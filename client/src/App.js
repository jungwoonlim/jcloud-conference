import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Video from "./components/Video";
import Date from "./components/Date";
import Chat from "./components/Chat";
import Client from "./components/Client";
import Client2 from "./components/Client2";

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
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/date">Date</Link>
        <br />
        <Link to="/video">Video</Link>
        <br />
        <Link to="/client">Client</Link>
        <br />
        <Link to="/client2">Client2</Link>
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/date" component={Date} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/client2" component={Client2} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
