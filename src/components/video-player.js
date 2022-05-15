import React, { useEffect } from "react";
import cloudinary from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
// const { Video, CloudinaryContext } = require("cloudinary-react");

const VideoPlayer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ugwutotheeshoes",
      bigPlayButton: true,
      width: 500,
      playedEventPercents: [10, 50, 90],
      analytics: {
        events: [
          "play",
          "pause",
          "ended",
          "percentsplayed",
          "error",
          "volumechange",
          "mute",
          "unmute",
          "qualitychanged",
          "seek",
          "fullscreenchange"
        ]
      }
    },
  });

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video("milkshake");

  return (
    <div>
      {/* <iframe
        src="https://player.cloudinary.com/embed/?public_id=milkshake&cloud_name=ugwutotheeshoes&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
        width="640"
        height="480"
        controls
        muted
        analytics={true}
        id="video-player"
        allowfullscreen
        frameborder="0"
      ></iframe> */}
      <AdvancedVideo cldVid={myVideo} controls width="640" height="480" />
    </div>
  );
};
export default VideoPlayer;
