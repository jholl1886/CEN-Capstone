// AlbumCard.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';

const AlbumCard = ({ accessToken }) => {
  const { albumId } = useParams();
  const [albumCardAlbumCard, setAlbumCard] = useState(null);
  const [review, setReview] = useState("");

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => response.json())
    .then(data => setAlbumCard(data));
  }, [albumId, accessToken]);

  return (
    <Container>
      {albumCardAlbumCard && (
        <>
          <Card>
            <Card.Img variant="middle" src={albumCardAlbumCard.images[0].url} style={{width: '1200px', height: '1200px'}} />
            <Card.Body>
              <Card.Title>{albumCardAlbumCard.name}</Card.Title>
              <Card.Text>{albumCardAlbumCard.artists[0].name}</Card.Text>
              {/* More CardAlbumCard can be added here */}
            </Card.Body>
          </Card>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
