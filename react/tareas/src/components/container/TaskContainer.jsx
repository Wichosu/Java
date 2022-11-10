import React, { useState } from 'react';
import TaskComponent from '../pure/Task';
import { Task } from '../../models/task.class';
import TaskForm from '../form/TaskForm';

const TaskContainer = () => {

  const [id, setId] = useState(0);

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setId(id + 1);
  }

  const deleteTask = (task) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <div>
      <h3>List of tasks</h3>
      {
        tasks.map((task, index) => {
          return (
            <TaskComponent 
              key={index}
              task={task}
              deleteTask={deleteTask}
            />
          )
        })
      }
      <TaskForm addTask={addTask} id={id}/>
    </div>
  );
}

export default TaskContainer;
