import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "./../actions";
import Search from "./Search";
import VideoDetails from "./../components/VideoDetails";

class VideosContainer extends Component {

  renderVideos = () => {
    const data = this.props.videos.data;
    if (data.length !== 0) {
      return data.items.map(video => {
        return (
          <VideoDetails
            title={video.snippet.title}
          />
        );
      });
    }
  }

  render () {
    return (
      <div>
        <Search/>
        {this.renderVideos()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, actions)(VideosContainer);
