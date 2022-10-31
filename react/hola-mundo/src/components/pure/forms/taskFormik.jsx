import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = ({ add, length }) => {

  const initialValues = {
    name: '',
    description: '',
    completed: false,
    level: LEVELS.NORMAL
  }

  const taskSchema = Yup.object().shape(
    {
      name: Yup.string()
                .min(4, 'Task name too short!')
                .max(20, 'Task name too long!')
                .required('Task name is required!'),
      description: Yup.string()
                      .min(4, 'Task name too short!')
                      .max(100, 'Task name too long!')
                      .required('Task description is required!'),
      level: Yup.string()
                .required('Task Level is required')
    }
  )

  return (
    <div>
      <h4>Generate a Task</h4>
      <Formik 
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem('tasks', values);
          add(values);
        }}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
              <Form>
                <label htmlFor='name'>Task Name</label>
                <Field className='form-control' id='name' type='text' name='name' placeholder='Ex: Clean the house' />

                {/* Error message task name */}
                {
                  errors.name && touched.name && 
                  (
                    <ErrorMessage name='name' component='div'></ErrorMessage>
                  )
                }

                <label htmlFor='description'>Task Description</label>
                <Field className='form-control' id='description' type='text' name='description' placeholder='Ex: Mop the floor, clean the windows, etc...' />

                {/* Error message for task description */}
                {
                  errors.description && touched.description && 
                  (
                    <ErrorMessage name='description' component='div'></ErrorMessage>
                  )
                }

                <label htmlFor='level'>Task Level</label>
                <Field
                  className='form-select'
                  component='select'
                  id='level'
                  name='level'
                  multiple={false}
                >
                  <option value={LEVELS.NORMAL}>NORMAL</option>
                  <option value={LEVELS.URGENTE}>URGENTE</option>
                  <option value={LEVELS.BLOCKING}>BLOCKING</option>
                </Field>

                {/* Error message for task level */}
                {
                  errors.level && touched.level && 
                  (
                    <ErrorMessage name='level' component='div'></ErrorMessage>
                  )
                }
                <button className='mt-3 btn btn-success' type='submit'>{length < 0 ? 'Add first task' : 'Add new task'}</button>
                { isSubmitting ? (<p>Adding task...</p>) : null}
              </Form>
          )
        }
      </Formik>
    </div>
  );
}

TaskFormik.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskFormik;
