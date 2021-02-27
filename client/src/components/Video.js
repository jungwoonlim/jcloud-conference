import React from "react";
import styled from "styled-components";

const MainVideoContainer = styled.div`
  padding: 5%;
  width: 100%;
  height: 94%;
  background-color: #374151;
`;

const LocalVideoContainer = styled.div`
  //
`;

const RemoteVideoContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const LocalVideo = styled.video`
  position: absolute;
  bottom: 8%;
  right: 8%;
  width: 300px;
  height: 300px;
  border-radius: 50px;
  object-fit: cover;
`;

const RemoteVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;
`;

function Video() {
  return (
    <MainVideoContainer>
      <RemoteVideoContainer className="video_container " id="videos">
        <RemoteVideo
          id="remoteVideo"
          className="ring"
          autoPlay
          playsInline
          controls={false}
        ></RemoteVideo>
      </RemoteVideoContainer>
      <LocalVideoContainer>
        <LocalVideo
          id="localVideo"
          className="ring"
          autoPlay
          playsInline
          controls={false}
          muted={true}
        ></LocalVideo>
      </LocalVideoContainer>
    </MainVideoContainer>
  );
}

export default Video;
