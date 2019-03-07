import React from "react";

class VideoDetail extends React.Component {
  render() {
    if (this.props.selectedVideo) {
      return (
        <div>
          <div className="ui embed">
            <iframe
              src={`https://www.youtube.com/embed/${
                this.props.selectedVideo.id.videoId
              }`}
            />
          </div>

          <div className="ui segment">
            <h4 className="ui header">
              {this.props.selectedVideo.snippet.title}
            </h4>
            <p>{this.props.selectedVideo.snippet.description}</p>
          </div>
        </div>
      );
    }

    return <div />;
  }
}

export default VideoDetail;
