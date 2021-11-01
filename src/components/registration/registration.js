import React from 'react'
import { Container, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './registration.css'

export default function registration() {
    return (
        <Container id="register-container" className="d-grid h-100">
        <Form id="login-form" className="text-center w-100">
            <img className="mb4 angrynerd-logo" src="static/angrynerds-logo.png" alt="Angry Nerds"/>
            <h1 className="fs-3 mb-3 fw-normal">Welcome, Please Register</h1>
            <Form.Group controlId="register-name">
                <Form.Control type="name" size="lg" placeholder="Full Name" className="position-relative"/>
            </Form.Group>
            <Form.Group controlId="register-username">
                <Form.Control type="username" size="lg" placeholder="Username" className="position-relative"/>
            </Form.Group>
            <Form.Group controlId="register-email">
                <Form.Control type="email" size="lg" placeholder="Email Address" className="position-relative"/>
            </Form.Group>
            <Form.Group controlId="register-password" className="mb-3">
                <Form.Control type="password" size="lg" placeholder="Password" className="position-relative"/>
            </Form.Group>
            <Form.Group controlId="terms-conditions" className="d-flex justify-content-center mb-4">
                <Form.Check label="I Agree to the Terms and Conditions" />
            </Form.Group>
            <div className="d-grid mb-4">
                <Button variant="primary" size="lg">Register</Button>
            </div>
            <p className="mt-5 text-muted">&copy; 2021</p>
        </Form>
    </Container>
    );
}
