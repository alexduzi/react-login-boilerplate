import { takeEvery, all } from 'redux-saga/effects';
import API from '../services/Api';

import { LoginTypes } from '../reducers/loginReducer';

import { loginUser } from './loginSagas';

const api = API.create();

export default function* root () {
  yield all([

    takeEvery(LoginTypes.LOGIN_REQUEST, loginUser, api),
  ])
}
