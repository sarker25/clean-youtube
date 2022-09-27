import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
  const URL = `https://www.youtube.com/watch?v=${videoId}`;
  const [timeStamp, setTimeStamp] = useState(0);
  const onProgres = (progress) => {
    setTimeStamp(parseInt(progress.playedSeconds));
  };
  const onReady = (e) => {};
  return (
    <ReactPlayer
      config={{
        youtube: {
          playerVars: { showinfo: 0 },
        },
      }}
      url={URL}
      width={"100%"}
      height={"390px"}
      controls={true}
      playing={false}
      onProgress={onProgres}
      onReady={onReady}
    />
  );
};

export default VideoPlayer;
