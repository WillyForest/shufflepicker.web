import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
//import { GetUserDto, HomeService } from '../services/sp-api';

const AuthorizedHome = () => {
  const [errorMessage, setErrorMessage] = useState('');
//   const [user, setUser] = useState<GetUserDto | null>(null);

  const navigate = useNavigate();

  const goToLogout = () => {
    navigate('/logout');
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const user = await HomeService.getApiHomeMe();
        // setUser(user);
      } catch (error) {
        console.error(error);
        setErrorMessage('Something went wrong');
      }
    };

    fetchUser();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          {/* {user && 
          <div className="text-center mb-5"><h1 className="display-4">Welcome, {user.firstName} {user.lastName}</h1>
          <h3>Your role is {user.role?.name}</h3>
          </div>} */}
          <div className="text-center">
            <h4><a href="/capitals">Click here</a> to view and manage your capitals</h4>
            <Button className='mt-3' variant="danger" size="lg" onClick={goToLogout}>Logout</Button>
          </div>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorizedHome;
