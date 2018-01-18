import React from "react";
import { Link } from "react-router-dom";

const VideoLists = (props) => {

  const url = `https://www.youtube.com/embed/${props.url}`;
  const channelUrl = `https://www.youtube.com/channel/${props.channelUrl}`;

  return (
      <div style={{ marginBottom: "40px", display: "flex" }}>
        <div>
          <Link to= {{
            pathname: `/videos/${props.url}`,
            state: {
              url: url,
              channel: props.channel,
              channelUrl: channelUrl,
              title: props.title,
              desc: props.desc
            }
          }}>
            <img
              className="embed-responsive-item"
              src={props.thumbnail}
              alt={props.title}
            />
          </Link>
        </div>
        <div style={ {marginLeft: "10px" }}>
          <h3>{props.title}</h3>
          <h5><a href={channelUrl}>{props.channel}</a></h5>
          <h6>{props.desc}</h6>
        </div>
        </div>
  );
}

export default VideoLists;
