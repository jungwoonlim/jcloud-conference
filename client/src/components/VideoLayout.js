import React, { Component } from "react";
import styled from "styled-components";
import HeaderLayout from "../layout/HeaderLayout";
import Video from "./Video";

const VideoLayoutContainer = styled.div`
  height: 100%;
`;

class VideoLayout extends Component {
  render() {
    return (
      <VideoLayoutContainer>
        <HeaderLayout />
        <Video />
      </VideoLayoutContainer>
    );
  }
}

export default VideoLayout;
