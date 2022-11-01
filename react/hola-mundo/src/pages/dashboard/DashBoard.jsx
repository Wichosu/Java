import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';

const DashBoardPage = () => {

  const history = useHistory();

  const logout = () => {
    history.push('/login');
  }

  const goToProfile = () => {
    history.push('/profile')
  }

  return (
    <div>
      <Button variant='contained' onClick={logout}>Logout</Button>
      <Button variant='contained' onClick={goToProfile}>Profile</Button>
      <Copyright></Copyright>
    </div>
  );
}

export default DashBoardPage;
