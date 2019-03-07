import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song A", duration: "2:02" },
    { title: "Song B", duration: "3:23" },
    { title: "Song C", duration: "4:21" }
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
});
