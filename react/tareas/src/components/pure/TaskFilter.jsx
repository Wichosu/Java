import React, { useContext, useReducer } from 'react';

const TaskFilter = () => {
  return (
    <div>
      <button>Show All</button>
      <button>Show Pending</button>
      <button>Show Completed</button>
    </div>
  );
}

export default TaskFilter;
