import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const UnauthorizedHome = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    }

    const goToRegister = () => {
        navigate('/register');
    }

    return (
    <Container>
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={8} lg={6}>
                <div className="text-center">
                    <h1>Welcome!</h1>
                    <p className="lead">You need to login or register</p>
                    <Button variant="primary" size="lg" className="mx-1" onClick={goToLogin}>Login</Button>
                    <Button variant="secondary" size="lg" className="mx-1" onClick={goToRegister}>Register</Button>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default UnauthorizedHome;
        