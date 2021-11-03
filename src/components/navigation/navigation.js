import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import JwtService from "../../services/JwtService";
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import "./navigation.css";

export default function Navigation() {
  const context = useContext(UserContext);
  const history = useHistory();
  
  const logout = () => { 
    context.processLogout();
    history.push('/login');
  }

  const loggedIn = ()=> {
    return(
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to='/dashboard'>Home</Link>
        </li>
        <li className="nav-item">
          <button onClick={logout} className="btn btn-outline-primary">Logout</button>
        </li>
      </React.Fragment>
    )
  }

  const loggedOut = () => {
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link to='/register' className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className="nav-link">Login</Link>
        </li>
      </React.Fragment>
    )
  }
  return (
    <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand >
        <Nav.Link as={Link} to='/dashboard'>{JwtService.hasAuthToken() ? `Hello, ${context.user.username}` : 'Angry Nerds'} 
          {JwtService.hasAuthToken() && <button onClick={logout} className="btn btn-outline-primary">Logout</button>}
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Angry Nerds</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {JwtService.hasAuthToken() ? loggedIn() : loggedOut()}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}
