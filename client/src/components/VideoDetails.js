import React from "react";

const VideoDetails = (props) => {

  const style = {
    margin: "90px 0 0 230px",
    textAlign: "center"
  }

  const { state } = props.location;
  return (
    <div style={style}>
      <h1 style={{ margin: "120px 0 40px 0" }}>{state.title}</h1>
      <div
        className="embed-responsive"
        style={{ width: "1200px", height: "600px", margin: "auto" }}
      >
        <iframe
          className="embed-responsive-item"
          src={state.url}
          allowFullScreen
          title={state.title}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3><a href={state.channelUrl}>{state.channel}</a></h3>
        <h4>{state.desc}</h4>
      </div>
    </div>
  );
}

export default VideoDetails;
