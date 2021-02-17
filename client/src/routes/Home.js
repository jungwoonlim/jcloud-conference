import React, { Component } from "react";
import Date from "../components/Date";

class App extends Component {
  render() {
    return (
      <section className="container">
        <h1>Hello</h1>
        <span>This is Video Conference Website</span>
        <Date />
      </section>
    );
  }
}

export default App;
