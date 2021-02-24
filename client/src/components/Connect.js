import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

const ConnectBoard = styled.div`
  margin: 0 auto;
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ConnectText = styled.p`
  font-size: 20px;
  font-family: serif;
`;

function Connect() {
  return (
    <ConnectBoard>
      <ConnectText>Connect</ConnectText>
      <Button type="primary">
        <Link to="/conference">Click</Link>
      </Button>
    </ConnectBoard>
  );
}

export default Connect;
