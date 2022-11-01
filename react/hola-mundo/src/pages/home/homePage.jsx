import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const history = useHistory();

  console.log('We are in Route:', location.pathname);// '/about | /faqs'
  
  const navigate = (path) => {
    history.push(path);
  }

  const navigateProps = (path) => {
    history.push({
      pathname: path,
      search: '?online=true', //Query params
      state: {
        online: true
      }
    })
  }

  const goBack = () => {
    history.goBack();
  }

  const goForward = () => {
    history.goForward();
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigateProps('/online-state')}>
        Go to page with the State / Query Params
      </button>
      <button onClick={ () => navigate('/profile')}>
        Go to profile
      </button>
      <button onClick={ goBack }>
        Go Back
      </button>
      <button onClick={ goForward }>
        Go Forward
      </button>
    </div>
  );
}

export default HomePage;
