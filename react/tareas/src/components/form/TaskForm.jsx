import React, { useRef } from 'react';
import { Task } from '../../models/task.class';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask, id }) => {

  const description = useRef(null);

  const sendTask = (e) => {
    e.preventDefault()
    const task = new Task(
      id,
      description.current.value,
      false
    )
    description.current.value = '';
    addTask(task);
  }

  return (
    <form onSubmit={sendTask}>
      <input ref={description} placeholder='Description' required />
      <button type='submit'>Add Task</button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default TaskForm;
