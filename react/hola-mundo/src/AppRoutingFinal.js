import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';

function AppRoutingOne() {

  //TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = false;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
            loggedIn?
            <Redirect from='/' to='/dashboard' />
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={LoginPage} />
        {/* Register Route */}
        <Route exact path='/register' component={RegisterPage} />
        {/* Profile Route */}
        <Route exact path='/profile'>
          {
            loggedIn?
            (<ProfilePage />)
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        {/* Tasks Route */}
        <Route path='/profile/tasks'>
          {
            loggedIn?
            (<TaskPage />)
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        {/* Dashboard Route */}
        <Route exact path='/dashboard'>
          {
            loggedIn?
            (<DashBoardPage />)
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingOne;
