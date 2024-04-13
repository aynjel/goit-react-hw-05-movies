import { imageUrl } from 'moviedb';
import { Link } from 'react-router-dom';
import './MoviesList.css';
import { imgPlaceholder } from 'moviedb';

function MoviesList({ title, movies }) {
  return (
    <div className="movies-list">
      <h4>{title}</h4>
      {movies.length === 0 && <p>No movies</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <p>
              {movie.title || movie.name} (
              {new Date(
                movie.release_date || movie.first_air_date
              ).getFullYear()}
              )
            </p>
            {movie.poster_path ? (
              <img
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.title}
                width="200"
              />
            ) : (
              <img src={imgPlaceholder} alt="placeholder" width="200" />
            )}
            <Link to={`/movies/${movie.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
