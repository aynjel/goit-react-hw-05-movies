import Moviepage from 'pages/Moviepage/Moviepage';
import { Outlet } from 'react-router-dom';

function MovieLayout() {
  return (
    <div>
      <Moviepage />
      <Outlet />
    </div>
  );
}

export default MovieLayout;
