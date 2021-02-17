import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Conference from "./routes/Conference";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/conference">Conference</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/conference" component={Conference} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
