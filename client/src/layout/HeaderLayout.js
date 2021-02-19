import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const Logo = styled.div`
  float: left;
  margin: 16px 0 16px 24px;
`;

class HeaderLayout extends react.Component {
  render() {
    return (
      <Header>
        <Logo />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/conference">Conference</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderLayout;
