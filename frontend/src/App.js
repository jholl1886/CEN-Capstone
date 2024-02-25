import React, { useState } from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import './App.css';  // Import your CSS file

const App = () => {
  const [buttonText, setButtonText] = useState('Do you like this album?');

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
        </Container>
      </main>
    </>
  )
}

export default App
