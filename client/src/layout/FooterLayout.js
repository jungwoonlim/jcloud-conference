import react from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterStyle = {
  position: "absolute",
  textAlign: "center",
  width: "100%",
  bottom: "0px",
};

class FooterLayout extends react.Component {
  render() {
    return (
      <Footer style={FooterStyle}>jCloud's Conference Website ©2021</Footer>
    );
  }
}

export default FooterLayout;
