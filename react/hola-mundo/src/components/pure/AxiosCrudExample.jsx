import React from 'react';
import { login, getAllPagedUsers, getAllUsers, getUserById, createUser, updateUserById, deleteUserById } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosCrudExample = () => {

  const initialCredentials = {
    email: '',
    password: ''
  }

  const loginSchema = Yup.object().shape(
    {
      email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
      password: Yup.string()
                    .required('Password is required')
    }
  )

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          sessionStorage.setItem('token', response.data.token);
        } else {
          sessionStorage.removeItem('token');
          throw new Error('Login Failure');
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
        sessionStorage.removeItem('token');
      })
      .finally(() => console.log('Login done'))
  }

  //CRUD examples
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        alert(JSON.stringify(response.data.data))
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        if(response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error('No users found')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        if(response.data.data && response.status === 200){
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error(`No users found`)
        }
      })
      .catch((error) => alert(`Someting went wrong: ${error}`))
  }

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error('User not created')
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const updateUser = (name, job, id) => {
    updateUserById(name, job, id)
      .then((response) => {
        if(response.data && response.status === 200){
          alert(JSON.stringify(response.data))
        } else {
          throw new Error(`No user found and no update done`)
        }
      })
      .catch((error) => alert(`Someting went wrong: ${error}`))
  }

  const deleteUser = (id) => {
    deleteUserById(id)
      .then((response) => {
        if(response.status === 204){
          alert(`User with id: ${id} successfully deleted`)
        } else {
          throw new Error(`No user found and no update done`)
        }
      })
      .catch((error) => alert(`Someting went wrong: ${error}`))
  }

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // *** */
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema = {loginSchema}
        // *** onSubmit Event
        onSubmit={async (values) => {
          authUser(values)
        }}
      >

        {/* We obtain props from Formik */}

        {({ values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur}) => (
              <Form>
              <label htmlFor='email'>Email</label>
              <Field id='email' type='email' name='email' placeholder='example@email.com' />
              {/* Email Errors */}
              {
                errors.email && touched.email && 
                (
                  <ErrorMessage name='email' component='div' />

                )
              }

              <label htmlFor='password'>Password</label>
              <Field 
                id='password' 
                name='password' 
                placeholder='password' 
                type='password' />
              {/* Password Errors */}
              {
                errors.password && touched.password && 
                (
                  <ErrorMessage name='password' component='div' />
                )
              }

              <button type='submit'>Login</button>
              {isSubmitting ? (<p>Login your credentials...</p>) : null}
              </Form>
            )}

        {/* { props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur
          } = props;

          return (
            
          )
        }} */}

      </Formik>
      {/* Example buttons to test API response */}
      <div>
        <button onClick={obtainAllUsers}>
          Get All Users with Axios
        </button>
        <button onClick={() => obtainAllPagedUsers(1)}>
          Get All Paged Users with Axios
        </button>
        <button onClick={() => obtainUserById(1)}>
          Get User 1
        </button>
        <button onClick={() => createNewUser('morpheus', 'leader')}>
          Create User
        </button>
        <button onClick={() => updateUser('morpheus', 'Developer', 1)}>
          Update User 1
        </button>
        <button onClick={() => deleteUser(1)}>
          Delete user 1
        </button>
      </div>
    </div>
  );
}

export default AxiosCrudExample;
