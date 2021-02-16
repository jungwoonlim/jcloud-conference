import React from "react";

function Video() {
  return (
    <div className="video_container">
      <video id="localVideo" autoPlay playsInline controls={false}></video>
    </div>
  );
}

export default Video;
