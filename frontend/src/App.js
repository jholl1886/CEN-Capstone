// import React from 'react'
// import Header from './components/Header';
// import BlogScreen from './screens/BlogScreen';
// import PostScreen from './screens/PostScreen';
// import { Outlet } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Container, InputGroup, FormControl, Button, Row, Card, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css' ;
// import {useState, useEffect} from 'react';
// import './App.css';
// import { blogs as initialBlogs } from './blogs.js';

// const CLIENT_ID = "9a5a79f145b04c6e9cf87f424ab98ea0"; //Reece Spotify
// const CLIENT_SECRET = "ebe731932e5d41d59af1943768b2b4a7"; //Reece Spotify

// const App = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [accessToken, setAccessToken] = useState("");
//   const [albums, setAlbums] = useState([]);
//   const [showAlbums, setShowAlbums] = useState(false); // State to control the visibility of albums

// useEffect(() => {                                         //Connect to api once
// var authParameters = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
// }
// fetch('https://accounts.spotify.com/api/token', authParameters)
//   .then(result => result.json())
//   .then(data => setAccessToken(data.access_token))
// }, [])

// async function search(){
//   if(!searchInput.trim()){
//     return;
//   }
//   console.log("Search for " + searchInput);
//   //Get request using search to get Artist ID
//   var searchParameters = {
//     method: 'GET',
//     headers: {
//       'Content-Type' : 'application/json',
//       'Authorization': 'Bearer ' + accessToken
//     }
//   }
//   var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)   //Search by artist ID currently
//   .then(response => response.json())
//   .then(data => { return data.artists.items[0].id})

//   console.log("ID is " + artistID);
//   //Get request w Artist ID find albums

//   var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID  + '/albums' + '?include_groups=album,single&market=US&limit=50', searchParameters)   //NEED searchparameters for valid access token
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       setAlbums(data.items);
//       setShowAlbums(true); // Show the albums list after fetching
//     })
    


//   //Display
// }
// function clearSearch() {
//   setSearchInput("");
//   setAlbums([]);
//   setShowAlbums(false); // Hide the albums list
// }
//   console.log(albums);

  
//   return (
//     <>
//         <Header />
//         <main className ="py-3">
//           <Container>
            
//         <h1>Welcome to JukeBoxd</h1>
//         <InputGroup className="mb-3" size="lg">
//           <FormControl
//           placeholder="Artist Search"
//           type = "input"
//           value={searchInput}
//           onKeyDown={event =>{
//             if (event.key === "Enter") {
//               search();
//             }
//           }
//           }
//           onChange={event => setSearchInput(event.target.value)}
//           />
//           <Button onClick={search}>
//             Search
//           </Button>
//           <Button variant="secondary" onClick={clearSearch}>Clear</Button>
//           <Container>
//             <Row className="mx-2 row row-cols-4">
//               {albums.map((album, i) => {
//                 console.log(album);
//                 return (
//                   <Card>
//                 <Card.Img src={album.images[0].url}/>
//                 <Card.Body>
//                   <Card.Title>
//                     {album.name} 
//                   </Card.Title>
//                 </Card.Body>
//               </Card>
//                 )
//               })}
            
              
//             </Row>
            
              
//             </Container>
//             </InputGroup>
//         <p className="bodyText"> JukeBoxd is currently a work in progress created by CEN Capstone students Aditi, Jacob, Josiah, Krenn, and Reece. Database and spotify integration to be added this increment.</p>
//         <img src="Images/tswift reputation.jpeg" alt ="tswift" width="300" height="300"/>


import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
return (
  <>
     
    <Header />
    <main className='py-3'>
      <Container>
        <Outlet />
      </Container>
    </main>
    <Footer />
    <ToastContainer />  
  </>
);
};

export default App;