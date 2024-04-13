import MoviesList from 'components/MoviesList/MoviesList';
import { axiosInstance } from 'moviedb';
import { useState } from 'react';
import './Moviespage.css';

function Moviespage() {
  const [searchKey, setSearchKey] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const handleSubmit = async event => {
    event.preventDefault();
    const query = event.target[0].value;
    try {
      const response = await axiosInstance.get('search/movie', {
        params: { query },
      });
      setSearchedMovies(response.data.results);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="movies-page">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search movies"
          onChange={event => setSearchKey(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchedMovies.length > 0 && (
        <MoviesList
          title={`Search results for "${searchKey}"`}
          movies={searchedMovies}
        />
      )}
    </div>
  );
}

export default Moviespage;
