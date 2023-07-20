import { Navigate } from 'react-router-dom';
import AuthService from '../services/core/AuthService';

const Logout = () => {
    AuthService.unsetAuthToken();

    return <Navigate to="/" />;
  };

export default Logout;