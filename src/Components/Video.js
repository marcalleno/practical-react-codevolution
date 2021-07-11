import React from "react";
import ReactPlayer from "react-player";

function Video() {
  return (
    <div>
      <h2>Video Component</h2>
      <ReactPlayer
        width="480px"
        height="360px"
        controls
        url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
        onReady={() => window.alert("onReady callback")}
        onStart={() => window.alert("onStart callback")}
        onPause={() => window.alert("onPause callback")}
        onEnded={() => window.alert("onEnded callback")}
        onError={() => window.alert("onError callback")}
      />
    </div>
  );
}

export default Video;
