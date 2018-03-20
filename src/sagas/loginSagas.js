import { call, put } from 'redux-saga/effects';
import LoginActions from '../reducers/loginReducer';


export function* loginUser (api, action) {

  const response = yield call(api.loginUser, { ...action.payload })

  if (response.ok) {
    // do data conversion here if needed
    yield put(LoginActions.loginSuccess({ username: action.payload.username }));
  }
}
