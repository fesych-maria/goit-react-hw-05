import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;
