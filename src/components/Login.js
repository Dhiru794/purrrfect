import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css'; // Optional: if you have custom styles

function Login() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="login-card p-4 border rounded shadow-sm">
            <h3 className="text-center mb-4">Login</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <div className="left-move"><Form.Label >Email address</Form.Label></div>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <div className="left-move"><Form.Label>Password</Form.Label></div>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 w-100">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;