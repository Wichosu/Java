import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  }

  return (
    <div>
      <h1>Login Page</h1>
      <LoginFormik />
      <p><small>Don't have an account?</small></p>
      <Button variant='outlined' onClick={goToRegister}>Create an account</Button>
    </div>
  );
}

export default LoginPage;
