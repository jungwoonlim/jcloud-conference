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

class Connect extends Component {
  render() {
    return (
      <ConnectBoard>
        <ConnectText>
          Do you want to start a video conference? <br />
          Click the button below to get started.
        </ConnectText>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link to="/conference">Connect Conference</Link>
        </button>
      </ConnectBoard>
    );
  }
}

export default Connect;
