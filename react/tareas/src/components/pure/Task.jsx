import React from 'react';
import { Task } from '../../models/task.class';
import PropTypes from 'prop-types';

const TaskComponent = ({ task, deleteTask }) => {

  const spacing = {
    margin: '1rem'
  }

  const removeTask = (task) => {
    deleteTask(task);
  }

  return (
    <div style={{display: 'flex'}}>
      <p style={spacing}>{task.id}</p>
      <p style={spacing}>{task.description}</p>
      <p style={spacing}>{task.completed ? 'Done' : 'Pending'}</p>
      <p onClick={() => removeTask(task)} style={{margin: '1rem', color: 'red'}}>X</p>
    </div>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskComponent;
