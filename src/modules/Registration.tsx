import { Layout } from '../Layout';
import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

export const Registration = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      if (response.ok) {
        navigate('/login?from=registration');
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
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name<span className="required">*</span></Form.Label>
            <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name<span className="required">*</span></Form.Label>
            <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email<span className="required">*</span></Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password<span className="required">*</span></Form.Label>
            <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Register
        </Button>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <style type="text/css">{`
            .required {
            color: red;
            }
        `}</style>
        </Form>
    </Layout>
  );
};