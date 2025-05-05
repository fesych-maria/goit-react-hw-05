import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoader(true);
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
