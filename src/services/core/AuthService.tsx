const AuthService = {
    setAuthToken: (token: string) => {
      localStorage.setItem('authToken', token);
    },
    getAuthToken: () => {
      const token = localStorage.getItem('authToken');
      return token;
    },
    unsetAuthToken: () => {
      localStorage.removeItem('authToken');
    },
  };
  
  export default AuthService;  