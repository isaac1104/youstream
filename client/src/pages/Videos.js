import React from "react";
import Search from "./../containers/Search";
import VideosContainer from "./../containers/VideosContainer";

const Videos = () => {

  const style = {
    margin: "90px 0 0 230px"
  }

  return (
    <div style={style}>
      <Search/>
      <VideosContainer/>
    </div>
  );
}

export default Videos;
