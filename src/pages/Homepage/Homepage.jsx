import { useState, useEffect } from 'react';
import { axiosInstance } from 'moviedb';
import MoviesList from 'components/MoviesList/MoviesList';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axiosInstance
        .get('trending/movie/day')
        .then(response => {
          console.log(response);
          return response;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <MoviesList title={'Trending Movies'} movies={movies} />
    </div>
  );
};

export default Homepage;
