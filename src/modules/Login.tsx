import { Layout } from '../Layout';
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { API_BASE_URL } from '../config';

interface LoginProps {
  onLogin: (token: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get('from');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const token = await response.text();
        onLogin(token);
        navigate('/');
      } else {
        const message = await response.text();
        setErrorMessage(message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <Layout>
      {from && from === 'registration' && <Alert>You successfully registered! Now you can login</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </Form>
    </Layout>
  );
};