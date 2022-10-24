import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task}) => {

  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    }
  }, [task])

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.URGENTE:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>
        )
      default:
        break;
    }
  }

  /**
   * Function that return icon depending on completion of task
   */
  function taskIconCompleted() {
    if(task.completed){
      return (<i className='bi-toggle-on' style={{color: 'green'}}></i>) 
    } else {
      return (<i className='bi-toggle-off' style={{color: 'gray'}}></i>)
    }
  }

  return (
      <tr className='fw-normal'>
        <th>
          <span className='ms-2'>{ task.name }</span>
        </th>
        <td className='align-middle'>
          <span>{ task.description }</span>
        </td>
        <td className='align-middle'>
          {/* Execution of function to return badge Element */}
          {taskLevelBadge()}
        </td>
        <td className='align-middle'>
          {/* Execution of function to return icon depending on completion */}
          { taskIconCompleted() }
          <i className='bi-trash' style={{color: 'tomato'}}></i>
          {/* <span>{ task.completed ? 'Completed' : 'Pending' }</span> */}
        </td>
      </tr>

    // <div>
    //   <h2 className='task-name'>
    //     Nombre: { task.name }
    //   </h2>
    //   <h3>
    //     Descripcion: { task.description }
    //   </h3>
    //   <h4>
    //     Level: { task.level }
    //   </h4>
    //   <h5>
    //     This task is: { task.completed ? 'COMPLETED' : 'PENDING'}
    //   </h5>
    // </div>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
