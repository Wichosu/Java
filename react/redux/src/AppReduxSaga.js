import './App.css';
import LoginFormContainer from './components/containers/LoginFormContainer';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

const AppReduxSaga = () => {
  return (
    <div className='App'>
      <LoginFormContainer />
    </div>
  );
}

export default AppReduxSaga;
