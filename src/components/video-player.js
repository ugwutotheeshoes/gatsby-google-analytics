import React, { useEffect } from "react";
import cloudinary from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
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
  // const analyticScript = (function (i, s, o, g, r, a, m) {
  //   i["GoogleAnalyticsObject"] = r;
  //   (i[r] =
  //     i[r] ||
  //     function () {
  //       (i[r].q = i[r].q || []).push(arguments);
  //     }),
  //     (i[r].l = 1 * new Date());
  //   (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  //   a.async = 1;
  //   a.src = g;
  //   m.parentNode.insertBefore(a, m);
  // })(
  //   window,
  //   document,
  //   "script",
  //   "https://www.google-analytics.com/analytics.js",
  //   "ga"
  // );

  // ga("create", "UA-XXXXX-Y", "auto");
  // ga("send", "pageview");

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
        <AdvancedVideo cldVid={myVideo} controls width="640" height="480" />
      {/* </Helmet> */}
    </div>
  );
};
export default VideoPlayer;
