import React, { useState } from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import './App.css';  // Import your CSS file

const StarRating = ({ rating, onStarClick }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <button
          key={star}
          className={star <= rating ? "active" : ""}
          onClick={() => onStarClick(star)}
        >
          &#9733; {/* Unicode character for a star */}
        </button>
      ))}
    </div>
  );
};

const App = () => {
  const [buttonText, setButtonText] = useState('Do you like this album?');
  const [rating, setRating] = useState(0);
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleButtonClick = () => {
    setButtonText('Swifty spotted');
    
  };
  
  return (
    <>
    <Header />
    <main className ="py-3">
      <Container>
    <h1>Welcome to JukeBoxd</h1>
    <p className="bodyText">JukeBoxd is currently a work in progress created by CEN capstone students</p>

    
    <img src="Images/tswift album.jpeg" alt ="tswift" width="300" height="300"/>
    
    <button className="interactiveButton" onClick={handleButtonClick}>
            {buttonText}
          </button>
          <StarRating rating={rating} onStarClick={handleStarClick} />
          <p>Your Rating: {rating} stars</p>
        </Container>
      </main>
    </>
  )
}

export default App
