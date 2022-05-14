import React, { useEffect } from "react";
import cloudinary from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";

const VideoPlayer = () => {
  //   <iframe
  //   src="https://player.cloudinary.com/embed/?public_id=milkshake&cloud_name=ugwutotheeshoes&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
  //   width="640"
  //   height="480"
  //   allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  //   allowfullscreen
  //   frameborder="0"
  // ></iframe>
  // const cld = new Cloudinary({ cloud_name: "ugwutotheeshoes" });
  // var vplayer = cloudinary.videoPlayer({
  //   muted: true,
  //   controls: true,
  //   analytics: {
  //     events: [
  //       "play",
  //       "pause",
  //       "ended",
  //       { type: "percentsplayed", percents: [10, 40, 70, 90] },
  //       "error",
  //     ],
  //   },
  // });
  return (
    <div>
      <iframe
        src="https://player.cloudinary.com/embed/?public_id=milkshake&cloud_name=ugwutotheeshoes&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
        width="640"
        height="480"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
        frameborder="0"
        analytics={{
          events: [
            "play",
            "pause",
            "ended",
            { type: "percentsplayed", percents: [10, 40, 70, 90] },
            "error",
          ],
        }}
      ></iframe>
    </div>
  );
};
export default VideoPlayer;
