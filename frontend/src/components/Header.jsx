import { Navbar, Nav, Container,Form, FormControl, Button  } from 'react-bootstrap';
import { FaUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">JukeBoxd</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className= "ms-auto">
                    <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link> 
                    <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-2"
                            />
                            <Button variant="outline-light"><FaSearch /></Button>
                        </Form>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    </header>
  )}
export default Header;