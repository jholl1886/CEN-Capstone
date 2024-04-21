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
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const router = createBrowserRouter(
  createRoutesFromElements(


     <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />      <Route path='blogs' element={<BlogScreen />} />
      <Route path='blogs/:id' element={<PostScreen />} />
      <Route path='/login' element={<LoginScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
