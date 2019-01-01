import {
  REQUEST_LOAD_HOTEL,
  SUCCESS_LOAD_HOTEL,
  INVALID_LOAD_HOTEL,

  REQUEST_LOAD_REVIEWS,
  SUCCESS_LOAD_REVIEWS,
  INVALID_LOAD_REVIEWS,

  REQUEST_CREATE_REVIEW,
  SUCCESS_CREATE_REVIEW,
  INVALID_CREATE_REVIEW,
} from '../../constants'


const initialState = {
  hotel: {},
  reviews: [],
  didInvalid: false,
  isFetching: false,
}

export const reducerHotelPage = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOAD_HOTEL: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_LOAD_HOTEL: {
      return {
        ...state,
        hotel: action.payload,
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_LOAD_HOTEL: {
      return {
        ...state,
        didInvalid: true,
        isFetching: false,
      }
    }

    case REQUEST_LOAD_REVIEWS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_LOAD_REVIEWS: {
      return {
        ...state,
        reviews: action.payload,
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_LOAD_REVIEWS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }

    case REQUEST_CREATE_REVIEW: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_CREATE_REVIEW: {
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_CREATE_REVIEW: {
      return {
        ...state,
        didInvalid: false,
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
