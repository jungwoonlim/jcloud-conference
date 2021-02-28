import React, { Component } from "react";
import styled from "styled-components";
import FooterLayout from "../layout/FooterLayout";
import Connect from "../components/Connect";
import backgroundImage from "../images/background-image.png";

const Container = styled.div`
  height: 100vh;
  background-color: #1d1d1f;
  text-align: center;
`;

const Title = styled.p`
  font-size: 80px;
  font-family: cursive;
  padding-top: 10%;
`;

const ConferenceImage = styled.img`
  margin: 0 auto;
  width: 500px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Title className="text-white font-bold">
          Welcome to Video Conference
        </Title>
        <Connect />
        <ConferenceImage src={backgroundImage} />
        <FooterLayout />
      </Container>
    );
  }
}

export default App;
