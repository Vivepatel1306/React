const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTE2NWRhMzQ0ZjYwNzYyOWY5NTM3ZDc3M2ZlMWViMiIsIm5iZiI6MTc0NDE3NTc4OC4zNzMsInN1YiI6IjY3ZjYwMmFjZDRjNDQ0YTFjYzk5MWQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.itZIxcbnF0HIS5prn2Qjy21VH03lruZz9A4UJDu__mM";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
};

// Function to get popular movies
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular`, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
  }
};

// Function to search for movies
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      options
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to search movies:", error);
  }
};
