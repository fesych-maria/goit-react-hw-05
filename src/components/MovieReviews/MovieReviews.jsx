import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../../services/api";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getReviewsById(movieId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return <div>MovieReviews</div>;
};

export default MovieReviews;
