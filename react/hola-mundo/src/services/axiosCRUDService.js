import axios from 'axios';

/**
 * 
 * @param { string } email 
 * @param { string } password 
 */

export const login = (email, password) => {

  let body = {
    email: email,
    password: password
  }

// Returns the response with a Promise 
  return axios.post('https://reqres.in/api/login', body)
}

//TODO: Obtain All users
export const getAllUsers = () => {
  return axios.get('https://reqres.in/api/users');
}

//TODO: Obtain All paged users
export const getAllPagedUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
}

//TODO: Obtain user b ID
export const getUserById = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
}

//TODO: Create user
export const createUser = (name, job) => {
  let body = {
    name: name,
    job: job
  }

  return axios.post('https://reqres.in/api/users', body);
}
//TODO: Update user
export const updateUserById = (name, job, id) => {
  let body = {
    name: name,
    job: job
  }

  return axios.put(`https://reqres.in/api/users/${id}`, body)
}


//TODO: Delete user
export const deleteUserById = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`)
}