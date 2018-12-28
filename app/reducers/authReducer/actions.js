import { createAction } from 'redux-actions'

import { apiSignUp, apiLogin, apiAuth, apiLogout } from 'api'
import {
  REQUEST_LOGIN_USER,
  SUCCESS_LOGIN_USER,
  INVALID_LOGIN_USER,

  REQUEST_CREATE_USER,
  SUCCESS_CREATE_USER,
  INVALID_CREATE_USER,

  REQUEST_AUTH_USER,
  SUCCESS_AUTH_USER,
  INVALID_AUTH_USER,

  REQUEST_LOGOUT_USER,
  SUCCESS_LOGOUT_USER,
  INVALID_LOGOUT_USER,
} from '../../constants'


const requestLogin = createAction(REQUEST_LOGIN_USER)
const successLogin = createAction(SUCCESS_LOGIN_USER, (json) => json.data)
const invalidLogin = createAction(INVALID_LOGIN_USER, (json) => json)

const requestSignUp = createAction(REQUEST_CREATE_USER)
const successSignUp = createAction(SUCCESS_CREATE_USER, (json) => json.data)
const invalidSignUp = createAction(INVALID_CREATE_USER, (json) => json)

const requestAuth = createAction(REQUEST_AUTH_USER)
const successAuth = createAction(SUCCESS_AUTH_USER, (json) => json.data)
const invalidAuth = createAction(INVALID_AUTH_USER, (json) => json)

const requestLogout = createAction(REQUEST_LOGOUT_USER)
const successLogout = createAction(SUCCESS_LOGOUT_USER)
const invalidLogout = createAction(INVALID_LOGOUT_USER, (json) => json)


export const fetchLogin = (data) => (dispatch) => {
  dispatch(requestLogin())
  return apiLogin(data).then((json) => {
    dispatch(successLogin(json))
  })
    .catch((error) => {
      dispatch(invalidLogin(error))
    })
}

export const fetchSignUp = (data) => (dispatch) => {
  dispatch(requestSignUp())
  return apiSignUp(data).then((json) => {
    dispatch(successSignUp(json))
  })
    .catch((error) => {
      dispatch(invalidSignUp(error))
    })
}

export const fetchAuth = () => (dispatch) => {
  dispatch(requestAuth())
  return apiAuth().then((json) => {
    dispatch(successAuth(json))
  })
    .catch((error) => {
      dispatch(invalidAuth(error))
    })
}

export const fetchLogout = () => (dispatch) => {
  dispatch(requestLogout())
  return apiLogout().then((json) => {
    dispatch(successLogout(json))
  })
    .catch((error) => {
      dispatch(invalidLogout(error))
    })
}
