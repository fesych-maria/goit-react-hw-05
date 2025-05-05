import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);
  const date = new Date(movie.release_date);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={250}
        alt="poster"
      />
      <h2>
        {movie.title} ({date.getFullYear()})
      </h2>
      <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <p>Genres</p>
      <ul>
        {movie.genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <hr></hr>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr></hr>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
