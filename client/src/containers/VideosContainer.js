import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import VideoDetails from "./../components/VideoDetails";

class VideosContainer extends Component {

  renderVideos = () => {
    const data = this.props.videos.data;
    if (data.length !== 0) {
      return (
        <div className="row align-items-center"
          style={{ justifyContent: "center", alignItems: "center", padding: "20px" }}
        >
          {data.items.map(video => {
            return (
              <VideoDetails
                key={video.id.videoId}
                url={video.id.videoId}
                title={video.snippet.title}
                desc={video.snippet.description}
              />
            );
          })}
        </div>
      )
    }
  }

  render () {
    return (
      <div style={{ marginTop: "20px" }}>
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
