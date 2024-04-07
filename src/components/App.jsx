import { useState, useEffect } from 'react';
import { axiosInstance } from '../moviedb';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axiosInstance
        .get('/3/trending/all/day')
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
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App-intro">
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
};
