import react, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

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
  state = {
    size: "large",
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <ConnectBoard>
        <ConnectText>
          Do you want to start a video conference? <br />
          Click the button below to get started.
        </ConnectText>
        <Button type="dashed" size={size}>
          <Link to="/conference">Connect Conference</Link>
        </Button>
      </ConnectBoard>
    );
  }
}

export default Connect;
