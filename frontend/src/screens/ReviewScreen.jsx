import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import StarRating from "../StarRating"; //Jacob
import "../App.css"; //jacob
const CLIENT_ID = "9a5a79f145b04c6e9cf87f424ab98ea0"; //Reece Spotify
const CLIENT_SECRET = "ebe731932e5d41d59af1943768b2b4a7"; //Reece Spotify


const AlbumCard = () => {
  const { albumId } = useParams();
  const [accessToken, setAccessToken] = useState('');
  const [albumDetails, setAlbumDetails] = useState(null);
  const [review, setReview] = useState("");

  //for some reason could not get accesstoken to work and be used between searches
  //so i just made it request a new accesstoken every time (not optimal probably) -Reece
  
  const fetchAccessToken = async () => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };
    const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
    const data = await response.json();
    setAccessToken(data.access_token);
    return data.access_token;
  };

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      const token = await fetchAccessToken(); 
      if (token) {
        fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => response.json())
        .then(data => {
          console.log('API Response:', data);
          setAlbumDetails(data);
        })
        .catch(error => console.error('Error with fetching album:', error));
      }
    };

    fetchAlbumDetails();
  }, [albumId]); 

  return (
    <Container>
      {albumDetails && (
        <>
          <Card>
          
            <Card.Img variant="middle" src={albumDetails.images[0].url} style={{width: '500px', height: '500px', marginLeft: 'auto', marginRight: 'auto', marginBottom:'auto', marginTop: 'auto', border: '5px solid #222529'}} />
            <Button style={{backgroundColor: '#222529'}} onClick={() => window.location.href = (`https://open.spotify.com/album/${albumId}`)}>
              Go to Album 
            </Button>
            <Card.Body>
              <Card.Title>{albumDetails.name}</Card.Title>
              <Card.Text>{albumDetails.artists[0].name}</Card.Text>
              <div>
                <span style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                  Your rating: <StarRating />
                </span>
              </div>
            
            </Card.Body>
          </Card>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} value={review} onChange={e => setReview(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Review
            </Button>
           
          </Form>
        </>
      )}
    </Container>
  );
};

export default AlbumCard;
