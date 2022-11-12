import React, { useReducer, createContext, useContext, useRef, useState, useEffect } from 'react';
import TaskComponent from '../pure/Task';
import { Task } from '../../models/task.class';
import TaskForm from '../form/TaskForm';
import TaskFilter from '../pure/TaskFilter';

const containerContext = createContext(null);

const TaskContainer = () => {

  const initialTask = [new Task(id, 'Initial Task', false)];

  
  const ADD_TASK = 'ADD_TASK';
  const DELETE_TASK = 'DELETE_TASK';
  const SHOW_ALL = 'SHOW_ALL';
  const SHOW_PENDING = 'SHOW_PENDING';
  const SHOW_COMPLETED = 'SHOW_COMPLETED';
  const COMPLETE_TASK = 'COMPLETE_TASK';

  const [prevFilter, setPrevFilter] = useState(SHOW_ALL);

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
      default: {
        throw new Error('Something went wrong on reducer')
      }
    }
  }

  const [tasks, dispatch] = useReducer(reducer, initialTask);

  const [filter, dispatchFilter] = useReducer((filter, action) => {
    switch (action.type) {
      case SHOW_ALL: {
        return action.tasks
      }
      case SHOW_COMPLETED: {
        return action.tasks.filter((task) => task.completed)
      }
      case SHOW_PENDING: {
        return action.tasks.filter((task) => !task.completed)
      }
      default: {
        throw new Error('Something wrong on filter reducer')
      }
    }
  }, tasks);

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

  const showAll = (tasks) => {
    setPrevFilter(SHOW_ALL);
    dispatchFilter({
      type:SHOW_ALL,
      tasks: tasks
    })
  }

  const showPending = (tasks) => {
    setPrevFilter(SHOW_PENDING);
    dispatchFilter({
      type:SHOW_PENDING,
      tasks: tasks
    })
  }

  const showCompleted = (tasks) => {
    setPrevFilter(SHOW_COMPLETED);
    dispatchFilter({
      type:SHOW_COMPLETED,
      tasks: tasks
    })
  }

  useEffect(() => {
    dispatchFilter({
      type: prevFilter,
      tasks: tasks
    })
  }, [tasks]);

  return (
    <containerContext.Provider 
      value={
        {
          tasks,
          filter,
          completeTask,
          deleteTask, 
          addTask,
          showAll,
          showPending,
          showCompleted,
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
    filter,
    completeTask,
    deleteTask
  } = useContext(containerContext);
  
  return (
    filter.map((task, index) => {
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
    tasks,
    showAll,
    showPending,
    showCompleted
  } = useContext(containerContext);

  return (
    <div>
      <button onClick={() => showAll(tasks)}>Show All</button>
      <button onClick={() => showPending(tasks)}>Show Pending</button>
      <button onClick={() => showCompleted(tasks)}>Show Completed</button>
    </div>
  )
}

let id = 1;

export default TaskContainer;