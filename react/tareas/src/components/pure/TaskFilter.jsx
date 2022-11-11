import React from 'react';

const TaskFilter = ({ showAll, showPending, showCompleted }) => {

  const All = () => {
    showAll();
  }

  const Pending = () => {
    showPending();
  }

  const Completed = () => {
    showCompleted();
  }

  return (
    <div>
      <button onClick={All}>Show All</button>
      <button onClick={Pending}>Show Pending</button>
      <button onClick={Completed}>Show Completed</button>
    </div>
  );
}

export default TaskFilter;
