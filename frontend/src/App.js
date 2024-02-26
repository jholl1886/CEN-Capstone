import React from 'react'
import Header from './components/Header';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <>
    <Header />
    <main className ="py-3">
      <Container>
    <h1>Welcome to JukeBoxd</h1>
    <img src="Images/tswift reputation.jpeg" alt ="tswift" width="300" height="300"/>
        </Container>
      </main>
    </>
  )
}

export default App
