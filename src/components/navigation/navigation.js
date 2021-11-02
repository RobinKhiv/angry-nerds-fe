import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../../context/UserContext";
import JwtService from "../../services/JwtService";
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
          <Link className="nav-link" to='/dashboard'>Hello, {context.user.username}</Link>
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to='/'>AngryNerds</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {JwtService.hasAuthToken() ? loggedIn() : loggedOut()}
        </ul>
      </div>
    </nav>
  );
}
