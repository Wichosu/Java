import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/home/homePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    }
  ]

  let taskList2 = [
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged);
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/una404'>| NOT EXISTING ROUTE |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/login'>| LOGIN |</Link>
          <Link to='/faqs'>| FAQs ||</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/online-state' component={ StatePage } />
            <Route path='/login' component={ LoginPage } >
              {
                logged ?
                  () => {
                    alert('You are logged in. Redirecting to home...');
                    return (<Redirect to='/'/>)
                  }
                :
                () => {
                  alert('You must be logged in. Redirecting to home...');
                  return (<LoginPage></LoginPage>)
                }
              }
            </Route>
            <Route path='/(about|faqs)' component={ AboutPage } />
            <Route path='/profile' component={ ProfilePage } >
              {
                logged ?
                <ProfilePage />
                :
                () => {
                  alert('You must be logged in. Redirecting to login...');
                  return (<Redirect to='/login' />)
                }
              }
            </Route>
            <Route path='/tasks' component={ TaskPage } />
            <Route 
              exact 
              path='/task/:id'
              render={
                ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]} />)
              }>

            </Route>
            {/* 404 Page not found */}
            <Route component={ NotFoundPage } />
          </Switch>
        </main>
      </div>

    </Router>
  );
}

export default AppRoutingOne;
