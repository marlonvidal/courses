import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  onVideoItemSelected = (video) => {    
    this.props.onVideoSelected(video);
  };

  render() {
    var videos = this.props.videos;

    if (videos.length > 0) {
      var items = videos.map(item => {
        return (
          <VideoItem
            onVideoItemSelected={this.onVideoItemSelected}
            key={item.id.videoId}
            video={item}
          />
        );
      });

      return <div className="ui relaxed divided list">{items}</div>;
    }

    return <div />;
  }
}

export default VideoList;
