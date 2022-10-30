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
    }
  )

  return (
    <div>
      
    </div>
  );
}

TaskFormik.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskFormik;
