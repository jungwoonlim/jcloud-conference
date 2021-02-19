import React, { Component } from "react";
import Video from "../components/Video";
import io from "socket.io-client";

class Conference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      isChannelReady: null,
      isInitiator: null,
      isStarted: null,
      localVideo: null,
      remoteVideo: null,
      localStream: null,
      remoteStream: null,
      pc: null,
      pcConfig: null,
      turnReady: null,
      room: null,
      turnExists: null,
      xhr: null,
      turnServer: null,
    };
  }

  conferenceStart = () => {
    this.socket = io("http://localhost:4000", { transports: ["websocket"] });
    this.pcConfig = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
    this.isChannelReady = false;
    this.isInitiator = false;
    this.isStarted = false;
    this.turnReady = false;
    this.localVideo = document.querySelector("#localVideo");
    this.remoteVideo = document.querySelector("#remoteVideo");
    this.room = "foo";

    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then(this.gotStream)
      .catch((e) => {
        alert(`getUserMedia() error: ${e.name}`);
      });

    if (this.room !== "") {
      this.socket.emit("create or join", this.room);
      console.log(`Attempted to create or join room ${this.room}`);
    }

    this.socket.on("created", (room) => {
      console.log(`Created room ${room}`);
      this.isInitiator = true;
    });

    this.socket.on("full", (room) => {
      console.log(`Room ${room} is full`);
    });

    this.socket.on("join", (room) => {
      console.log(`Another peer made a request to join room ${room}`);
      console.log(`This peer is the initiator of room ${room}!`);
      this.isChannelReady = true;
    });

    this.socket.on("joined", (room) => {
      console.log(`joined ${room}`);
      this.isChannelReady = true;
    });

    this.socket.on("log", (array) => {
      console.log.apply(console, array);
    });

    // This client receives a message
    this.socket.on("message", (message) => {
      console.log(`Client received message : ${message}`);
      if (message === "got user media") {
        this.maybeStart();
      } else if (message.type === "offer") {
        if (!this.isInitiator && !this.isStarted) {
          this.maybeStart();
        }
        this.pc.setRemoteDescription(new RTCSessionDescription(message));
        this.doAnswer();
      } else if (message.type === "answer" && this.isStarted) {
        this.pc.setRemoteDescription(new RTCSessionDescription(message));
      } else if (message.type === "candidate" && this.isStarted) {
        var candidate = new RTCIceCandidate({
          sdpMLineIndex: message.label,
          candidate: message.candidate,
        });
        this.pc.addIceCandidate(candidate);
      } else if (message === "bye" && this.isStarted) {
        this.handleRemoteHangup();
      }
    });

    if (location.hostname !== "localhost") {
      requestTurn(
        "https://computeengineondemand.appspot.com/turn?username=41784574&key=4080218913"
      );
    }
  };

  gotStream = (stream) => {
    console.log("Adding local stream.");
    this.localStream = stream;
    this.localVideo.srcObject = stream;
    this.sendMessage("got user media");
    console.log(this.isInitiator);
    if (this.isInitiator) {
      this.maybeStart();
    }
  };

  maybeStart = () => {
    console.log("maybeStart()");
    console.log(`isStarted : ${this.isStarted}`);
    console.log(`localStream : ${this.localStream}`);
    console.log(`isChannelReady : ${this.isChannelReady}`);
    if (
      !this.isStarted &&
      typeof this.localStream !== "undefined" &&
      this.isChannelReady
    ) {
      console.log("create peer connection");
      this.createPeerConnection();
      this.pc.addStream(this.localStream);
      this.isStarted = true;
      console.log(`isInitiator : ${this.isInitiator}`);
      if (this.isInitiator) this.doCall();
    }
  };

  createPeerConnection = () => {
    try {
      console.log("createPeerConnection function");
      this.pc = new RTCPeerConnection(null);
      this.pc.onicecandidate = this.handleIceCandidate;
      this.pc.onaddstream = this.handleRemoteStreamAdded;
      this.pc.onremovestream = this.handleRemoteStreamRemoved;
      console.log("Created RTCPeerConnection");
    } catch (e) {
      console.log(`Failed to create PeerConnection, exception: ${e.message}`);
      alert("Cannot create RTCPeerConnection object.");
      return;
    }
  };

  handleIceCandidate = (event) => {
    console.log(`icecandidate event : ${event}`);
    if (event.candidate) {
      this.sendMessage({
        type: "candidate",
        label: event.candidate.sdpMLineIndex,
        id: event.candidate.sdpMid,
        candidate: event.candidate.candidate,
      });
    } else {
      console.log("End of candidates.");
    }
  };

  handleCreateOfferError = (event) => {
    console.log(`createOffer() error ${event}`);
  };

  handleRemoteStreamAdded = (event) => {
    console.log("Remote stream added.");
    this.remoteStream = event.stream;
    this.remoteVideo.srcObject = this.remoteStream;
  };

  handleRemoteStreamRemoved = (event) => {
    console.log(`Remote stream removed. Event: ${event}`);
  };

  doCall = () => {
    console.log("Sending offer to peer");
    this.pc.createOffer(
      this.setLocalAndSendMessage,
      this.handleCreateOfferError
    );
  };

  doAnswer = () => {
    console.log("Sending answer to pper.");
    this.pc
      .createAnswer()
      .then(this.setLocalAndSendMessage, this.onCreateSessionDescriptionError);
  };

  setLocalAndSendMessage = (sessionDescription) => {
    this.pc.setLocalDescription(sessionDescription);
    console.log(`setLocalAndSendMessage sending message ${sessionDescription}`);
    this.sendMessage(sessionDescription);
  };

  onCreateSessionDescriptionError = (error) => {
    console.log(`Failed to create session description: ${error.toString()}`);
  };

  requestTurn = (turnURL) => {
    this.turnExists = false;
    for (let i in this.pcConfig.iceServers) {
      if (this.pcConfig.iceServers[i].urls.substr(0, 5) === "turn:") {
        this.turnExists = true;
        this.turnReady = true;
        break;
      }
    }
    if (!this.turnExists) {
      console.log(`Getting TURN server from ${turnURL}`);
      // No TURN server. Get one from computeengineondemand.appspot.com:
      this.xhr = new XMLHttpRequest();
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4 && this.xhr.status === 200) {
          this.turnServer = JSON.parse(this.xhr.responseText);
          console.log(`Got TURN server : ${this.turnServer}`);
          this.pcConfig.iceServers.push({
            urls: `turn:${this.turnServer.username}@${this.turnServer.turn}`,
            credential: this.turnServer.password,
          });
          this.turnReady = true;
        }
      };
      this.xhr.open("GET", this.turnURL, true);
      this.xhr.send();
    }
  };

  hangup = () => {
    console.log("Hanging up.");
    stop();
    this.sendMessage("bye");
  };

  handleRemoteHangup = () => {
    console.log("Session terminated.");
    stop();
    this.isInitiator = false;
  };

  stop = () => {
    this.isStarted = false;
    this.pc.close();
    this.pc = null;
  };

  sendMessage = (message) => {
    console.log(`Client sending message: ${message}`);
    this.socket.emit("message", message);
  };

  componentDidMount() {
    this.conferenceStart();
  }

  componentDidUpdate() {
    this.conferenceStart();
  }

  render() {
    return (
      <section className="container">
        <h1>Conference Room</h1>
        <Video />
      </section>
    );
  }
}

export default Conference;
