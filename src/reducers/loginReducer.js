// sampleReducer.js
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: null,
  logout: null
}, {});

export const LoginTypes = Types
export default Creators

export const INITIAL_STATE = {
  username: undefined
}

export const loginRequest = (state = INITIAL_STATE, action) => {
  return { ...state }
}

export const loginSuccess = (state = INITIAL_STATE, action) => {
  return { ...state }
}

export const loginFailure = (state = INITIAL_STATE) => {
  return { ...state }
}

export const logout = (state = INITIAL_STATE) => {
  return { ...state, username: undefined }
}

export const HANDLERS = {
  [LoginTypes.LOGIN_REQUEST]: loginRequest,
  [LoginTypes.LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.LOGIN_FAILURE]: loginFailure,
  [LoginTypes.LOGOUT]: logout,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
