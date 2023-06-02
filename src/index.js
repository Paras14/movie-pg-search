import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MoviePGPage from './component/MoviePGPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import SearchPage from './component/SearchPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "/moviepage/:movieId",
    element: <MoviePGPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);