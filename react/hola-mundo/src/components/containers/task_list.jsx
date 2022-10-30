import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';

const TaskListComponent = () => {

  const defaultTask1 = new Task('Example1', 'description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'description2', false, LEVELS.URGENTE);
  const defaultTask3 = new Task('Example3', 'description3', true, LEVELS.BLOCKING);

  //Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified');
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log('TaskList Component is going to unmount...');
    };
  }, [tasks]);

  function completeTask(task) {
    console.log(`Completed task: ${task} `);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component and it will update the
    // The iteration of the tasks in order to show the task updated
    setTasks(tempTasks);
  }

  function deleteTaks(task) {
    console.log('Delete this Task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log('Add this Task:', task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Iterar sobre una lista de tareas */}
          {/*TODO: Aplicar un for/map para renderizar una lista */}
          { tasks.map((task, index) => {
            return (
              <TaskComponent 
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTaks} />
            )
          })}
        </tbody>
      </table>
    )
  }

  let tasksTable = <Table />

  if(tasks.length > 0){
    tasksTable = <Table />
  } else {
    tasksTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    )
  }

  const loadingStyle = {
    color: 'grey',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card text-center'>
          {/* Card Header {title} */}
          <div className='card-header p-3'>
            <h5>
              Your Tasks:
            </h5>
          </div>
          {/* Card Body {content} */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
            {/* TODO: Add loading spiner */}
            {loading? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
          </div>
        </div>
      </div>
      <TaskFormik add={addTask} length={tasks.length}/>
    </div>
  );
};

export default TaskListComponent;
