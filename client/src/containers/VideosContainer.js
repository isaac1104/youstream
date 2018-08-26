import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import VideoLists from "./../components/VideoLists";

class VideosContainer extends Component {
  componentDidMount() {
    const { keyword } = this.props.match.params;
    this.props.fetchVideos(keyword);
  };

  componentDidUpdate(prevProps) {
    const { keyword } = this.props.match.params;
    if (prevProps.match.params.keyword !== keyword) {
      this.props.fetchVideos(keyword);
    }
  };

  componentWillUnmount() {
    this.props.removeVideos();
  };

  renderVideos = () => {
    const { data, error, isFetching } = this.props.videos;

    if (error) {
      return <h1 className='text-center text-danger'>Video Not Found!</h1>;
    }

    if (isFetching) {
      return <h1 className='text-center'>Loading...</h1>
    }

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
      );
    }
  };

  render() {
    return (
      <div style={{ marginTop: "90px", marginLeft: '10px' }}>
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
