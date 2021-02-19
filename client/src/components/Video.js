import React from "react";

function Video() {
  return (
    <div className="video_container" id="videos">
      <video
        id="localVideo"
        autoPlay
        playsInline
        controls={false}
        muted={true}
      ></video>
      <video id="remoteVideo" autoPlay playsInline controls={false}></video>
    </div>
  );
}

export default Video;
