import react, { Component } from "react";

const FooterStyle = {
  position: "absolute",
  textAlign: "center",
  width: "100%",
  height: "5vh",
  bottom: "0px",
};

class FooterLayout extends Component {
  render() {
    return (
      <>
        <div>jCloud's Conference Website ©2021</div>
      </>
    );
  }
}

export default FooterLayout;
