import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import VideoLists from "./../components/VideoLists";

class VideosContainer extends Component {

  componentWillUnmount() {
    this.props.removeVideos();
  }

  renderVideos = () => {
    const data = this.props.videos.data;
    if (data.length !== 0) {
      return (
        <div style={{ justifyContent: "center", alignItems: "center", padding: "20px" }}>
          {data.items.map(video => {
            return (
              <VideoLists
                key={video.id.videoId}
                url={video.id.videoId}
                title={video.snippet.title}
                desc={video.snippet.description}
                channel={video.snippet.channelTitle}
                channelUrl={video.snippet.channelId}
                thumbnail={video.snippet.thumbnails.medium.url}
              />
            );
          })}
        </div>
      )
    }
  }

  render () {
    console.log(this.props.videos);
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
