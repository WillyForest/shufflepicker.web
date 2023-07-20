import { useState, useEffect } from 'react';
import AuthService from '../services/core/AuthService';
import AuthorizedHome from './AuthorizedHome';
import UnauthorizedHome from './UnauthorizedHome';
import { Layout } from '../Layout';

const Home = () => {
  const [token, setToken] = useState<string | null>(null);
  
  useEffect(() => {
    setToken(AuthService.getAuthToken());
  }, []);

  return (
    <Layout>
      {token ? (
        <AuthorizedHome />
      ) : (
        <UnauthorizedHome />
      )}
    </Layout>
  );
};

export default Home;