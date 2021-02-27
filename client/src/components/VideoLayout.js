import React, { Component } from "react";
import styled from "styled-components";
import HeaderLayout from "../layout/HeaderLayout";
import FooterLayout from "../layout/FooterLayout";
import Video from "../components/Video";

const SiderLayout = styled.div`
  background-color: red;
  flex: 0 0 200px;
`;

class VideoLayout extends Component {
  render() {
    return (
      <div>
        <HeaderLayout />
        <h1>hello</h1>
      </div>
    );
  }
}

export default VideoLayout;
