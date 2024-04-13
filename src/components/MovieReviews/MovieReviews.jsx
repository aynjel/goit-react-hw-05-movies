import { axiosInstance } from 'moviedb';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieReviews.css';

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const getMovieReviews = async () => {
    try {
      const response = await axiosInstance.get(`movie/${movieId}/reviews`);
      setReviews(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getMovieReviews();
  }, [movieId]);

  return (
    <div className="movie-reviews">
      <h3>Reviews</h3>
      {reviews.length === 0 && <p>No reviews</p>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p className="author">{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
