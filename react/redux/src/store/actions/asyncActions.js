// Async Action Types
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; // Watcher Saga Listens
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; // Dispached by worker saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; // Dispached by worker saga

export const login = (email, password) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
          email: email,
          password: password
        },
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_SUCCESS
    }
  }
}

export const httpRequest = (method, url, data) => {
  return {
    type: API_CALL_REQUEST,
    payload: {
      request: {
        method: method,
        url: url,
        data: data,
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_SUCCESS
    }
  } 
}