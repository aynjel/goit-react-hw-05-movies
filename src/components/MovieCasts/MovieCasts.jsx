import { axiosInstance } from 'moviedb';
import { imgCastPlaceholder } from 'moviedb';
import { imageUrl } from 'moviedb';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieCasts.css';

function MovieCasts() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  const getMovieCasts = async () => {
    try {
      const response = await axiosInstance.get(`movie/${movieId}/credits`);
      setCasts(response.data.cast);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getMovieCasts();
  }, [movieId]);

  return (
    <div className="movie-casts">
      <h3>Cast</h3>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <p>{cast.name}</p>
            {cast.profile_path ? (
              <img
                src={`${imageUrl}${cast.profile_path}`}
                alt={cast.name}
                width="200"
              />
            ) : (
              <img src={imgCastPlaceholder} alt="placeholder" width="200" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCasts;
