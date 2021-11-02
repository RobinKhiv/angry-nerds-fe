import React, { useState, useContext } from 'react'
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css'
import ApiService from '../../services/ApiService';
import UserContext from '../../context/UserContext';

export default function Login() {
    const context = useContext(UserContext);
    const history = useHistory();
    const [error, setError] = useState(false);

    const login = ev => {
        ev.preventDefault();
        const { password, username } = ev.target;
        
        ApiService.postLogin({
            username: username.value,
            password: password.value
          })
            .then(res => {
                context.processLogin(res.authToken);
                history.push('/dashboard');
            })
            .catch(error => {
              setError( error.message );
            });
    }
    return (
        <Container id="login-container" className="d-grid h-100">
            <Form onSubmit={login} id="login-form" className="text-center w-100">
                <img className="mb4 angrynerd-logo" src="static/angrynerds-logo.png" alt="Angry Nerds"/>
                <h1 className="fs-3 mb-3 fw-normal">Please Log in</h1>
                <Form.Group controlId="login-username">
                    <Form.Control type="text" size="lg" name="username" placeholder="username" className="position-relative"/>
                </Form.Group>
                <Form.Group controlId="login-password" className="mb-3">
                    <Form.Control type="password" name="password" size="lg" placeholder="Password" className="position-relative"/>
                </Form.Group>
                <Form.Group controlId="remember-me" className="d-flex justify-content-center mb-4">
                    <Form.Check label="Remember Me" />
                </Form.Group>
                <div role="alert" className="text-danger">{error && <p>{error}</p>}</div>
                <div className="d-grid mb-1">
                    <Button variant="primary" type="submit" size="lg">Log in</Button>
                </div>
                <div className="d-grid">
                    <Link to="/register">
                        <Button variant="primary" size="lg" >Register</Button>
                    </Link>
                </div>
                <p className="mt-5 text-muted">&copy; 2021</p>    
            </Form>
        </Container>
    );
}
