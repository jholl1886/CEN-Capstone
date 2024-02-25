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
    <p>JukeBoxd is currently a work in progress by CEN capstone students</p>
        </Container>
      </main>
    </>
  )
}

export default App
