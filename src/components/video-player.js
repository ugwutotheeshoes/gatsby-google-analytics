import React from "react";
import "cloudinary-video-player/dist/cld-video-player.js";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import "../styles/global.css";

const VideoPlayer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ugwutotheeshoes",
      analytics: {
        events: ["play", "pause", "ended", "error", "mute", "unmute"],
      },
    },
  });
  const myVideo = cld.video("milkshake");
  return (
    <div className="container">
            
      <AdvancedVideo
        cldVid={myVideo}
        onPlay={trackCustomEvent({ category: "Video", action: "Play" })}
        onEnded={trackCustomEvent({ category: "Video", action: "Ended" })}
        onError={trackCustomEvent({ category: "Video", action: "Error" })}
        onPlaying={trackCustomEvent({ category: "Video", action: "Playing" })}
        onLoadStart={trackCustomEvent({
          category: "Video",
          action: "Load Start",
        })}
        controls
        width="640"
        height="480"
      />
    </div>
  );
};
export default VideoPlayer;
