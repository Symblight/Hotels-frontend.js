import { createAction } from 'redux-actions'

import { getHotel, getHotelReviews, getCreateReview } from 'api'
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


const requestHotel = createAction(REQUEST_LOAD_HOTEL)
const successHotel = createAction(SUCCESS_LOAD_HOTEL, (json) => json.data)
const invalidHotel = createAction(INVALID_LOAD_HOTEL, (json) => json)

const requestReviews = createAction(REQUEST_LOAD_REVIEWS)
const successReviews = createAction(SUCCESS_LOAD_REVIEWS, (json) => json.data)
const invalidReviews = createAction(INVALID_LOAD_REVIEWS, (json) => json)

const requestReview = createAction(REQUEST_CREATE_REVIEW)
const successReview = createAction(SUCCESS_CREATE_REVIEW, (json) => json.data)
const invalidReview = createAction(INVALID_CREATE_REVIEW, (json) => json)


export const fetchHotel = (data) => (dispatch) => {
  dispatch(requestHotel())
  return getHotel(data).then((json) => {
    dispatch(successHotel(json))
  })
    .catch((error) => {
      dispatch(invalidHotel(error))
    })
}

export const fetchReviews = (data) => (dispatch) => {
  dispatch(requestReviews())
  return getHotelReviews(data).then((json) => {
    dispatch(successReviews(json))
  })
    .catch((error) => {
      dispatch(invalidReviews(error))
    })
}

export const fetchCreateReview = (data) => (dispatch) => {
  dispatch(requestReview())
  return getCreateReview(data).then((json) => {
    dispatch(successReview(json))
  })
    .catch((error) => {
      dispatch(invalidReview(error))
    })
}
