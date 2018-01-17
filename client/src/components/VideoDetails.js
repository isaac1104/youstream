import React from "react";

const VideoDetails = (props) => {

  const url = `https://www.youtube.com/embed/${props.url}`;

  return (
    <div className= "col-md-3">
      <h5>{props.title}</h5>
      <iframe
        className="embed-responsive-item"
        allowFullScreen
        src={url}
      />
      <h6>{props.desc}</h6>
    </div>
  );
}

export default VideoDetails;
