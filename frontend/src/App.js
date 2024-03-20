import React from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import './App.css';


const App = () => {
  return (
    <>
    <Header />
    <main className ="py-3">
      <Container>
    <h1>Welcome to JukeBoxd</h1>
    <p className="bodyText"> JukeBoxd is currently a work in progress created by CEN Capstone students Aditi, Jacob, Josiah, Krenn, and Reece. Database and spotify integration to be added this increment.</p>
    <img src="Images/tswift reputation.jpeg" alt ="tswift" width="300" height="300"/>
        </Container>
      </main>
    </>
  )
}

export default App
