import React from 'react'
import { Container, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css'

export default function login() {
    return (
        <Container id="login-container" className="d-grid h-100">
            <Form id="login-form" className="text-center w-100">
                <img className="mb4 angrynerd-logo" src="static/angrynerds-logo.png" alt="Angry Nerds"/>
                <h1 className="fs-3 mb-3 fw-normal">Please Log in</h1>
                <Form.Group controlId="login-email">
                    <Form.Control type="email" size="lg" placeholder="Email Address" className="position-relative"/>
                </Form.Group>
                <Form.Group controlId="login-password" className="mb-3">
                    <Form.Control type="password" size="lg" placeholder="Password" className="position-relative"/>
                </Form.Group>
                <Form.Group controlId="remember-me" className="d-flex justify-content-center mb-4">
                    <Form.Check label="Remember Me" />
                </Form.Group>
                <div className="d-grid mb-1">
                    <Button variant="primary" size="lg">Log in</Button>
                </div>
                <div className="d-grid">
                    <Button variant="primary" size="lg">Register</Button>
                </div>
                <p className="mt-5 text-muted">&copy; 2021</p>
            </Form>
        </Container>
    );
}
