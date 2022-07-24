import * as types from "./actionTypes"

import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  laodUsersSuccess,
  laodUsersError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
} from "./actions";
import { loadUsersApi, createUserApi, deleteUserApi, updateUserApi } from "./api";

function* onLoadUsersStartAsync () {
  try {
    const response = yield call(loadUsersApi);
    if(response.status === 200){
      yield delay(500);
      yield put(laodUsersSuccess(response.data)) 
    }
  } catch(error) {
    yield put(laodUsersError(error.response.data))
  }  
}

function* onCreateUserStartAsync ({payload}) {
  try {
    const response = yield call(createUserApi, payload);
    if(response.status === 200){      
      yield put(createUserSuccess(response.data)) 
    }
  } catch(error) {
    yield put(createUserError(error.response.data))
  }  
}

function* onDeleteUserStartAsync(userId)  {
  try {
    const response = yield call(deleteUserApi, userId);
    if(response.status === 200){     
      yield delay(500);
      yield put(deleteUserSuccess(userId));
    }
  } catch(error) {
    yield put(deleteUserError(error.response.data))
  }  
}

function* onUpdateUserStartAsync({payload: {id, formValue}}) {
  try {
    // console.log("payload", payload);
    const response = yield call(updateUserApi, id, formValue);
    if(response.status === 200) {
      yield put(updateUserSuccess())
    }
  } catch (error) {
    yield put(updateUserError(error.response.data));
  }
}

function* onDeleteUser() {
  while(true) {
    const {payload: userId} = yield take(types.DELETE_USER_START);
    // call은 api뿐만 아니라 다른 제너레이터 펑션도 invoke 할 수 있다.
    yield call(onDeleteUserStartAsync, userId)
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];

export default function *rootSaga() {
  yield all([...userSagas])
}