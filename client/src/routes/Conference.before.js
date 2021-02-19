import React, { Component } from "react";
import Video from "../components/Video";
import io from "socket.io-client";

const socket = io("http://localhost:4000", { transports: ["websocket"] });

const sendMessage = (message) => {
  socket.emit("conference message", message);
};

class Conference extends Component {
  playVideoFromCamera = async () => {
    try {
      const constraints = { video: true, audio: false };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const videoElement = document.querySelector("video#localVideo");

      videoElement.srcObject = stream;
      sendMessage("got user media");
      // if (faceInitiator) {
      // }
    } catch (error) {
      console.log(`Error opening video camera. Error : ${error}`);
    }
  };

  componentDidMount() {
    this.playVideoFromCamera();
    socket.on("create conference", () => {
      console.log("create room");
    });
    socket.on("join conference", () => {
      console.log("start");
    });
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
