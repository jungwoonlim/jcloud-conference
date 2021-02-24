import React, { Component } from "react";
import styled from "styled-components";
import FooterLayout from "../layout/FooterLayout";
import Connect from "../components/Connect";
import backgroundImage from "../images/background-image.jpg";

const Container = styled.div`
  height: 100vh;
  background-color: white;
  text-align: center;
`;

const Title = styled.p`
  font-size: 80px;
  font-family: cursive;
  margin-top: 10%;
`;

const ConferenceImage = styled.img`
  width: 600px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome to Video Conference</Title>
        <Connect />
        <ConferenceImage src={backgroundImage} />
        <FooterLayout />
      </Container>
    );
  }
}

export default App;
