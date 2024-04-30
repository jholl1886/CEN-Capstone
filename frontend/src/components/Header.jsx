import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FaUser, FaSearch } from 'react-icons/fa';
import { IoMdPaper } from 'react-icons/io';
import { useSelector } from 'react-redux'; // Import useSelector

const Header = () => {
  const userInfo = useSelector((state) => state.auth.userInfo); // Get userInfo from Redux store

  // Define logoutHandler function if not already defined

  const logoutHandler = () => {
    // Your logout logic here
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>JukeBoxd</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to='/blogs'>
                <Nav.Link as={Link} to="/blogs">
                  <IoMdPaper /> Blogs
                </Nav.Link>
              </LinkContainer>
              
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

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
