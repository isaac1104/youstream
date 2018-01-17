import React from "react";

const VideoDetails = (props) => {

  const url = `https://www.youtube.com/embed/${props.url}`;

  return (
    <div className= "col-md-3" style={{ marginBottom: "40px" }}>
      <h5>{props.title}</h5>
      <iframe
        className="embed-responsive-item"
        allowFullScreen
        src={url}
      />
    </div>
  );
}

export default VideoDetails;
