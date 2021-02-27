import react, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ConnectBoard = styled.div`
  margin: 0 auto;
  width: 500px;
  text-align: center;
`;

const ConnectText = styled.p`
  font-size: 25px;
  font-family: serif;
`;

const Button = styled.button`
  margin: 5px;
`;

class Connect extends Component {
  render() {
    return (
      <ConnectBoard>
        <ConnectText className="text-white font-bold">
          Do you want to start a video conference? <br />
          Click the button below to get started.
        </ConnectText>
        <Button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link to="/conference">Connect Conference</Link>
        </Button>
      </ConnectBoard>
    );
  }
}

export default Connect;
