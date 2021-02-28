import react, { Component } from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  padding: 20px 0;
  position: fixed;
  text-align: center;
  width: 100%;
  bottom: 0px;
  background-color: #2f2f2f;
`;

class FooterLayout extends Component {
  render() {
    return (
      <>
        <FooterStyle className="text-white font-bold">
          jCloud's Conference Website ©2021
        </FooterStyle>
      </>
    );
  }
}

export default FooterLayout;
