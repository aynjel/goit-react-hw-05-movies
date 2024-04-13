import { imageUrl } from 'moviedb';
import { axiosInstance } from 'moviedb';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Moviepage.css';

function Moviepage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axiosInstance
          .get(`movie/${movieId}`)
          .then(response => {
            console.log(response);
            return response;
          })
          .catch(error => {
            console.log(error);
            return error;
          });
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <div className="movie-page">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {movie && (
        <div className="movie-details">
          <h2>
            <Link to="/">
              <span role="img" aria-label="back">
                ⬅️
              </span>
            </Link>
            {movie.title}
          </h2>
          <div className="movie-meta">
            <img
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.title}
              width="200"
            />
            <p>{movie.overview}</p>
          </div>
        </div>
      )}

      {/* Movie Reviews and Casts */}
      <div className="movie-nav">
        <Link to={`reviews`}>Reviews</Link>
        <Link to={`casts`}>Casts</Link>
      </div>
    </div>
  );
}

export default Moviepage;
