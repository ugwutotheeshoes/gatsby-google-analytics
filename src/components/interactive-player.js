function interactivePlayer(cld) {
    const videoPlayer = cld.videoPlayer("video-player", {
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
      })
      videoPlayer.source("milkshake");
  return;
    // <div>interactive-player</div>
//   )
}

export default interactivePlayer