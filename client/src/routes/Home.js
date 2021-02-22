import React, { Component } from "react";
import styled from "styled-components";
import Connect from "../components/Connect";
import Date from "../components/Date";
import { Typography } from "antd";
const { Title } = Typography;

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
        <Title level={2} strong>
          Welcome to Video Conference
        </Title>
        <Connect />
        <Date />
      </Container>
    );
  }
}

export default App;
