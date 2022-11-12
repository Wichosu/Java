import React, { useReducer, createContext, useContext, useRef } from 'react';
import TaskComponent from '../pure/Task';
import { Task } from '../../models/task.class';
import TaskForm from '../form/TaskForm';
import TaskFilter from '../pure/TaskFilter';

const containerContext = createContext(null);

const TaskContainer = () => {
  
  const ADD_TASK = 'ADD_TASK';
  const DELETE_TASK = 'DELETE_TASK';
  const SHOW_ALL = 'SHOW_ALL';
  const SHOW_PENDING = 'SHOW_PENDING';
  const SHOW_COMPLETED = 'SHOW_COMPLETED';
  const COMPLETE_TASK = 'COMPLETE_TASK';
  
  function reducer(tasks, action) {
    switch (action.type) {
      case ADD_TASK: {
        return [...tasks, new Task(action.id, action.description, false)];
      }
      case DELETE_TASK: {
        return tasks.filter(task => task.id !== action.id);
      }
      case COMPLETE_TASK: {
        return tasks.map((task) => {
          if (task.id === action.task.id) {
            return action.task
          } else {
            return task
          }
        })
      }
      case SHOW_ALL: {
        return tasks
      }
      case SHOW_COMPLETED: {
        return tasks.filter((task) => task.completed)
      }
      case SHOW_PENDING: {
        return tasks.filter((task) => !task.completed)
      }
      default: {
        throw new Error('Something went wrong on reducer')
      }
    }
  }

  const initialTask = [new Task(id, 'Initial Task', false)]

  const [tasks, dispatch] = useReducer(reducer, initialTask)

  const addTask = (description) => {
    dispatch({
      type: ADD_TASK,
      id: ++id,
      description: description
    })
  }
  
  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      id: taskId
    })
  }

  const completeTask = (task) => {
    dispatch({
      type: COMPLETE_TASK,
      task: task
    })
  }

  const showAll = () => {
    dispatch({
      type:SHOW_ALL
    })
  }

  const showPending = () => {
    dispatch({
      type:SHOW_PENDING
    })
  }

  const showCompleted = () => {
    dispatch({
      type:SHOW_COMPLETED
    })
  }

  return (
    <containerContext.Provider 
      value={
        {
          tasks,
          completeTask,
          deleteTask, 
          addTask,
          showAll,
          showPending,
          showCompleted
        }
      }>
      <h3>List of tasks</h3>
      <Filter />
      <List />
      <Form />
    </containerContext.Provider>
  );
}

function List() {
  const {
    tasks,
    completeTask,
    deleteTask
  } = useContext(containerContext);
  
  return (
    tasks.map((task, index) => {
      return (
        <TaskComponent 
          key={index}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      )
    })
  )
}

function Form() {
  const { addTask } = useContext(containerContext);
  const description = useRef();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTask(description.current.value);
      description.current.value = '';
    }}>
        <input ref={description} placeholder='Description' required />
        <button type='submit'>Add Task</button>
    </form>
  )
}

function Filter() {
  const {
    showAll,
    showPending,
    showCompleted
  } = useContext(containerContext);

  return (
    <div>
      <button onClick={showAll}>Show All</button>
      <button onClick={showPending}>Show Pending</button>
      <button onClick={showCompleted}>Show Completed</button>
    </div>
  )
}

let id = 1;

export default TaskContainer;