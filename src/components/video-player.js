import React, { useEffect } from "react";
import cloudinary from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
// import { Helmet } from "react-helmet";
// const { Video, CloudinaryContext } = require("cloudinary-react");

const VideoPlayer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ugwutotheeshoes",
      bigPlayButton: true,
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
          "fullscreenchange",
        ],
      },
    },
  });

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video("milkshake");
  const playFunction = () => {
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Special Button",
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Gatsby Plugin Example Campaign",
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: 43,
    });
  };
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
      {/* <Helmet script={analyticScript}> */}
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />

      {/* <script>{analyticScript}</script> */}
      {/* <script
          async
          src="https://www.google-analytics.com/analytics.js"
        ></script> */}
      <AdvancedVideo
        cldVid={myVideo}
        onPlay={playFunction}
        controls
        width="640"
        height="480"
      />
      {/* </Helmet> */}
    </div>
  );
};
export default VideoPlayer;
