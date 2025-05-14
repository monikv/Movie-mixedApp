
import axios from "axios";


export const handleMovie = async (query) => {
  // Movie fetching logic goes here

  const api_key = "5c71dcb1";
  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=${api_key}&s=${query}`
    );
  return res.data.Search;
  } catch (err) {
    console.log(err);
  }
};


