import React from "react";
import styled from "styled-components";

const LocalVideo = styled.video`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 300px;
  height: auto;
`;

const RemoteVideo = styled.video`
  width: 80%;
  height: auto;
`;

function Video() {
  return (
    <div className="video_container" id="videos">
      <LocalVideo
        id="localVideo"
        autoPlay
        playsInline
        controls={false}
        muted={true}
      ></LocalVideo>
      <RemoteVideo
        id="remoteVideo"
        autoPlay
        playsInline
        controls={false}
      ></RemoteVideo>
    </div>
  );
}

export default Video;
