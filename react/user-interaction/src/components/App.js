import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import UnsplashAPI from "../api/UnsplashAPI";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = term => {
    UnsplashAPI.searchImages(term, (response) => {
      this.setState({ images: response });
    });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
