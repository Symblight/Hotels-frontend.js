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


const initialState = {
  user: null,
  errors: {},
  authorized: false,
  didInvalid: false,
  isFetching: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH_USER:
    case REQUEST_CREATE_USER:
    case REQUEST_LOGIN_USER: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_AUTH_USER:
    case SUCCESS_CREATE_USER:
    case SUCCESS_LOGIN_USER: {
      return {
        ...state,
        user: action.payload,
        authorized: true,
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_AUTH_USER:
    case INVALID_CREATE_USER:
    case INVALID_LOGIN_USER: {
      return {
        ...state,
        authorized: false,
        didInvalid: true,
        isFetching: false,
      }
    }
    case REQUEST_LOGOUT_USER: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_LOGOUT_USER: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_LOGOUT_USER: {
      return {
        ...state,
        didInvalid: true,
        isFetching: false,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}
