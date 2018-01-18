import React from "react";

const VideoLists = (props) => {

  const url = `https://www.youtube.com/embed/${props.url}`;
  const channelUrl = `https://www.youtube.com/channel/${props.channelUrl}`;

  return (
      <div style={{ marginBottom: "40px", display: "flex" }}>
        <div>
          <img
            className="embed-responsive-item"
            src={props.thumbnail}
            alt={props.title}
          />
        </div>
        <div style={{marginLeft: "10px"}}>
          <h3>{props.title}</h3>
          <h5><a href={channelUrl}>{props.channel}</a></h5>
          <h6>{props.desc}</h6>
        </div>
      </div>
  );
}

export default VideoLists;
