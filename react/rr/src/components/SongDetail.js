import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    if (this.props.song) {
      return (
        <div>
          <h2>{this.props.song.title}</h2>
          <div>{this.props.song.duration}</div>
        </div>
      );
    }

    return <div />;
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
