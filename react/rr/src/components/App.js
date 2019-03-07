import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

class App extends React.Component {
  render() {
    return (
      <div>
        <SongList />
        <SongDetail />
      </div>
    );
  }
}

export default App;
