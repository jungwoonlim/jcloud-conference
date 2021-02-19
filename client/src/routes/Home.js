import React, { Component } from "react";
import styled from "styled-components";
import Date from "../components/Date";

const Container = styled.section`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.h1`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <TitleText h1={12}>Welcome to Video Conference</TitleText>
        <Date />
      </Container>
    );
  }
}

export default App;
