"use client";
import React from "react";

const VideoComponent: React.FC = () => {
  return (
    <div className="video-container">
      <video
        src="/media/shell-ad-video.mp4"
        className="video-player"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoComponent;
