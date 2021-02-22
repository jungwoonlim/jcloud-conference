import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

function Connect() {
  return (
    <div>
      <h1>Connect</h1>
      <Button type="primary">
        <Link to="/conference">Click</Link>
      </Button>
    </div>
  );
}

export default Connect;
