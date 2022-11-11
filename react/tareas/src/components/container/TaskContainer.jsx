import React, { useReducer } from 'react';
import TaskComponent from '../pure/Task';
import { Task } from '../../models/task.class';
import TaskForm from '../form/TaskForm';
import TaskFilter from '../pure/TaskFilter';

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
        return [...tasks]
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
    <div>
      <h3>List of tasks</h3>
      <TaskFilter
        showAll={showAll}
        showPending={showPending}
        showCompleted={showCompleted}
      />
      {
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
      }
      <TaskForm addTask={addTask} id={id}/>
    </div>
  );
}

let id = 1;

export default TaskContainer;