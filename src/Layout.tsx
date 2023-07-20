import React, { useState, useEffect } from 'react';
import AuthService from './services/core/AuthService';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(AuthService.getAuthToken());
  }, []);

  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">Shuffle Picker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              {!token && <Nav.Link href="/login">Login</Nav.Link>}
              {!token && <Nav.Link href="/register">Register</Nav.Link>}
              {token && <Nav.Link href="/logout">Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="12">{children}</Col>
        </Row>
      </Container>
    </div>
  );
};