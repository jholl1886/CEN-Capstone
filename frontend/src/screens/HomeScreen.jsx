// HomeScreen.jsx

import React, { useState, useEffect } from 'react';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

const CLIENT_ID = "9a5a79f145b04c6e9cf87f424ab98ea0"; //Reece Spotify
const CLIENT_SECRET = "ebe731932e5d41d59af1943768b2b4a7"; //Reece Spotify

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
      console.log(accessToken);
  }, []);

  async function search() {
    console.log("Search for " + searchInput);
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => { return data.artists.items[0].id });

    console.log("ID is " + artistID);
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album,single&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlbums(data.items);
      });
  }

  return (
    <>
      <main className="py-3">
        <Container>
          <h1>Welcome to JukeBoxd</h1>
          <InputGroup className="mb-3" size="lg">
            <FormControl
              placeholder="Artist Search"
              type="input"
              onKeyDown={event => {
                if (event.key === "Enter") {
                  search();
                }
              }}
              onChange={event => setSearchInput(event.target.value)}
            />
            <Button onClick={search}>Search</Button>
          </InputGroup>
          <Container>
            <Row className="mx-2 row row-cols-4">
              {albums.map((album, i) => {
                console.log(album);
                return (
                  <Link to={`/album/${album.id}`} key={album.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card key={i}>
                    <Card.Img src={album.images[0].url} />
                    <Card.Body>
                      <Card.Title>
                        {album.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  </Link>
                )
              })}
            </Row>
          </Container>
          <p className="bodyText"> JukeBoxd is created by CEN Capstone students Aditi, Jacob, Josiah, Krenn, and Reece. </p>
        </Container>
      </main>
      <Outlet />
    </>
  )
}

export default HomeScreen;
