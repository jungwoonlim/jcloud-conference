import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Conference from "./routes/Conference";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/conference" component={Conference} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
