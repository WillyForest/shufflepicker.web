import React, { useState } from 'react';
import { Login } from './modules/Login';
import { Registration } from './modules/Registration';
import { Button, Form, Alert } from 'react-bootstrap';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import Home from './modules/Home';
import AuthService from './services/core/AuthService';
import Logout from './modules/Logout';
import { queryClient } from "./utils/queryClient";
import { QueryClientProvider } from '@tanstack/react-query';

function App() {

  const handleLogin = (token: string) => {
    localStorage.clear();
    AuthService.setAuthToken(token);
  };

  return (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="register" element={<Registration />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
      </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;