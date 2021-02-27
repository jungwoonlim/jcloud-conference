import react, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
  padding: 20px;
  height: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #1d1d1f;
`;

const Button = styled.button`
  // outline: none !important;
  cursor: pointer;
`;

class HeaderLayout extends Component {
  render() {
    return (
      <Header>
        <Button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Video On/Off
        </Button>
        <Button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Mic On/Off
        </Button>
        <Button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Screen Sharing
        </Button>
        <Button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          <Link to="/">Exit</Link>
        </Button>
      </Header>
    );
  }
}

export default HeaderLayout;
