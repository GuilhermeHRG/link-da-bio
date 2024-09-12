import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';

const ListRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
]);

export default ListRoutes;
