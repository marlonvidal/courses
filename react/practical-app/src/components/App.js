import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import YoutubeAPI from "../services/YouTubeAPI";

class App extends React.Component {
  state = { videos: [], selectedVideo: null};

  onFormSubmited = term => {
    YoutubeAPI.getVideos(term, response => {
      this.setState({ videos: response.data.items });
    });
  };

  onVideoSelected = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmited} />
        <VideoDetail selectedVideo={this.state.selectedVideo} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
