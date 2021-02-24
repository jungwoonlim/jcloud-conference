import React, { Component } from "react";
import styled from "styled-components";
import MainBoard from "./MainBoard";
import FooterLayout from "../layout/FooterLayout";
import { Carousel } from "antd";

const Container = styled.div`
  height: 100vh;
  background-color: white;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Carousel effect="fade" autoplay>
          <MainBoard />
          <MainBoard />
          <MainBoard />
          <MainBoard />
        </Carousel>
        <FooterLayout />
      </Container>
    );
  }
}

export default App;
