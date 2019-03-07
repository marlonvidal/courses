import axios from "axios";

//const SERVER_KEY = 'AIzaSyCqBNl_kcu8um0QMau-mAPxKvPzlMop-n8';
const BROWSER_KEY = "AIzaSyC__WEaWo8f8GigE5Dkw4EgxxJuQuCMEpA";

const axiosClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: BROWSER_KEY
  }
});

class YoutubeAPI {
  static getVideos(term, callback) {
    axiosClient
      .get("/search", {
        params: { q: term, part: "snippet", maxResults: 5 }
      })
      .then(response => callback(response));
  }
}

export default YoutubeAPI;
