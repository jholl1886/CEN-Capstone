import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogScreen from './screens/BlogScreen';
import PostScreen from './screens/PostScreen';
import HomeScreen from './screens/HomeScreen';
import AlbumCard from './AlbumCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'blogs', element: <BlogScreen /> },
      { path: 'blogs/:id', element: <PostScreen /> },
      { path: 'album/:albumId', element: <AlbumCard /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
