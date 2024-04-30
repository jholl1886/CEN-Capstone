import { Navbar, Nav, Container,Form, FormControl, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap'
import { FaUser, FaSearch } from 'react-icons/fa';
import { IoMdPaper } from 'react-icons/io';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {/* Wrap Navbar.Brand inside LinkContainer */}
          <LinkContainer to='/'>
            <Navbar.Brand>JukeBoxd</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Each LinkContainer should wrap only one Nav.Link */}
              <LinkContainer to='/blogs'>
                <Nav.Link as={Link} to="/blogs">
                  <IoMdPaper /> Blogs
                </Nav.Link>
              </LinkContainer>
              
              {/* <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer> */}
            < Nav.Link href= "/login"> <FaUser /> Sign In </Nav.Link>



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
  );
}

export default Header;