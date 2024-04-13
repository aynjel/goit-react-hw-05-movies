import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import Homepage from 'pages/Homepage/Homepage';
import NotFound from 'pages/NotFound/NotFound';
import Moviespage from 'pages/Moviespage/Moviespage';
import MovieReviews from './MovieReviews/MovieReviews';
import MovieCasts from './MovieCasts/MovieCasts';
import MovieLayout from 'layouts/MovieLayout';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/movies" element={<Moviespage />} />
        <Route path="/movies/:movieId" element={<MovieLayout />}>
          <Route path="reviews" element={<MovieReviews />} />
          <Route path="casts" element={<MovieCasts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
