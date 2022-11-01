import React from 'react';
import { Button } from '@mui/material';
import RegisterFormik from '../../components/pure/forms/registerFormik';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {

  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  }

  return (
    <div>
      <h1>Register Page</h1>
      <RegisterFormik />
      <p><small>Already have an account?</small></p>
      <Button variant='outlined' onClick={goToLogin}>Login</Button>
    </div>
  );
}

export default RegisterPage;
