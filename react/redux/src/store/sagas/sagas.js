import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { API_CALL_REQUEST } from '../actions/asyncActions';
// Watcher SAGA
// Listen the API_CALL_REQUEST actions
export function* watcherSaga() {
  //Listens the action and starts a Worker saga
  yield takeLatest(API_CALL_REQUEST, workerSaga)
}

//WORKER SAGA
// Is called from watcher Saga, does the Login and Dispatched an action
export function* workerSaga(action) {
  try {
    const response = yield call(fetchHttp(action.payload.request))
    // We Obtain the token from response 
    const token = response.data.token;
    yield put({
      type: action.payload.okAction,
      payload: {
        token: token
      }
    })
  } catch (error) {
    yield put({
      type: action.payload.failAction,
      payload: {
        error: error
      }
    })
  }
}

function fetchHttp(request) {
  return function() {
    return(axios(request))
  }
}