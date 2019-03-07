import axios from "axios";

axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { Authorization: "Client-ID 3215468979098790xa9sx8a0s" }
});

class UnsplashAPI {
  static searchImages = (term, callback) => {
        
    let result = [];
    for(let i = 0; i < 10; i++) {
      result.push({ key: i, value: `aeae ${i}`})
    }

    callback(result);

    // axios
    //   .get("/search/photos", {
    //     params: { query: term }
    //   })
    //   .then(response => callback(response));
  }
}

export default UnsplashAPI;
