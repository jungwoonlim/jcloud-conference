import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Video from "./components/Video";
import Date from "./components/Date";
import Chat from "./components/Chat";

class App extends Component {
  playVideoFromCamera = async () => {
    try {
      const constraints = { video: true, audio: false };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const videoElement = document.querySelector("video#localVideo");

      videoElement.srcObject = stream;
    } catch (error) {
      console.log(`Error opening video camera. Error : ${error}`);
    }
  };

  componentDidMount() {
    // this.playVideoFromCamera();
  }

  render() {
    return (
      <section className="container">
        <h1>Hello</h1>
        {/* <Video />
          <Date />
          <Chat /> */}
      </section>
    );
  }
}

export default App;
