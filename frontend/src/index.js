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
import AlbumCard from './screens/ReviewScreen';
import store from './store';
import CreateBlogScreen from './screens/CreateBlogScreen';
import { Provider } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';

const router = createBrowserRouter(
  createRoutesFromElements(


     <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />      <Route path='blogs' element={<BlogScreen />} />
      <Route path='blogs/:id' element={<PostScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path="/blogs/*" element={<BlogScreen />} /> 
      <Route path="/album/:albumId" element={<AlbumCard />} />
      <Route path="/createblog" element={<CreateBlogScreen /*addBlog={addBlog}*/ />} />
      <Route path='/register' element={<RegisterScreen />} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <RouterProvider router={router} />
     </Provider>  
  </React.StrictMode>

);


reportWebVitals();