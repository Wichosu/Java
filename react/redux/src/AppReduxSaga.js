import './App.css';
import LoginFormContainer from './components/containers/LoginFormContainer';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

const AppReduxSaga = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <FilterOptions />
        <TodosContainer />
        <TodoFormContainer />
      </header>
      {/* <LoginFormContainer /> */}
    </div>
  );
}

export default AppReduxSaga;
