import React from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import './App.css';  // Import your CSS file

const App = () => {
  return (
    <>
    <Header />
    <main className ="py-3">
      <Container>
    <h1>Welcome to JukeBoxd</h1>
    <p className="bodyText">JukeBoxd is currently a work in progress created by CEN capstone students</p>

    <img src="Images/tswift album.jpeg" alt ="tswift" width="200" height="200"/>
        </Container>
      </main>
    </>
  )
}

export default App
