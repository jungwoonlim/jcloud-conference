import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Conference from "./routes/Conference";
import HeaderLayout from "./layout/HeaderLayout";
import FooterLayout from "./layout/FooterLayout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderLayout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/conference" component={Conference} />
        </Switch>
        <FooterLayout />
      </BrowserRouter>
    );
  }
}

export default App;
