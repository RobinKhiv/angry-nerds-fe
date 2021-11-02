import React, { useState, useContext } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registration.css'
import ApiService from '../../services/ApiService';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function Registration() {
    const user = useContext(UserContext);
    const [error, setError] = useState(false);
    const history = useHistory();

    const register = ev => {
        ev.preventDefault();
        
        const data = { 
            password: ev.target.password.value, 
            username: ev.target.username.value 
        };

        ApiService.postUser(data)
            .then(res => {
                user.processLogin(res.authToken);
                history.push('/dashboard');
            }).catch(error => setError(error.message));
    }

    return (
        <Container id="register-container" className="d-grid h-100">
        <Form onSubmit={register} id="login-form" className="text-center w-100">
            <img className="mb4 angrynerd-logo" src="static/angrynerds-logo.png" alt="Angry Nerds"/>
            <h1 className="fs-3 mb-3 fw-normal">Welcome, Please Register</h1>
            <Form.Group controlId="register-username">
                <Form.Control type="username" name="username" required size="lg" placeholder="Username" className="position-relative"/>
            </Form.Group>
            <Form.Group controlId="register-password" className="mb-3">
                <Form.Control type="password" name="password" required size="lg" placeholder="Password" className="position-relative"/>
            </Form.Group>
            <Form.Group controlId="terms-conditions" className="d-flex justify-content-center mb-4">
                <Form.Check required label="I Agree to the Terms and Conditions" />
            </Form.Group>
            <div role="alert" className="text-danger">{error && <p>{error}</p>}</div>
            <div className="d-grid mb-4">
                <Button type="submit" variant="primary" size="lg">Register</Button>
            </div>
            <p className="mt-5 text-muted">&copy; 2021</p>
        </Form>
    </Container>
    );
}
