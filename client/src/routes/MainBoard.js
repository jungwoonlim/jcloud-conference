import React, { Component } from "react";
import styled from "styled-components";
import Connect from "../components/Connect";

const ContentStyle = styled.div`
  height: 95vh;
  color: #d9d9d9;
  line-height: center;
  text-align: center;
  background: #2f2f2f;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  // padding: 30% 0;
`;

const Title = styled.p`
  font-size: 50px;
  // font-family: serif;
  font-family: cursive;
  margin: 20% 0;
`;

class MainBoard extends Component {
  render() {
    return (
      <ContentStyle>
        <MainContainer>
          <Title>Welcome to Video Conference</Title>
          <Connect />
        </MainContainer>
      </ContentStyle>
    );
  }
}

export default MainBoard;
