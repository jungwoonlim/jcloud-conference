import React, { Component } from "react";
import Video from "./components/Video";
import Date from "./components/Date";

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
        <div className="App">
          {/* <Video /> */}
          <Date />
        </div>
      </section>
    );
  }
}

export default App;
