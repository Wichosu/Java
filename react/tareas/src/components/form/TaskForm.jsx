import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask }) => {

  const description = useRef(null);

  const sendTask = (e) => {
    e.preventDefault()
    addTask(description.current.value);
    description.current.value = '';
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
}

export default TaskForm;
