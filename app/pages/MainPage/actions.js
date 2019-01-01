import { createAction } from 'redux-actions'

import { getHotels, getCountries, getCitiesByCountry, getHotelsByFilters, getHotelsBySearch, getHotelsBySearchResults } from 'api'
import {
  REQUEST_LOAD_HOTELS,
  SUCCESS_LOAD_HOTELS,
  INVALID_LOAD_HOTELS,

  REQUEST_LOAD_LIST_COUNTRIES,
  SUCCESS_LOAD_LIST_COUNTRIES,
  INVALID_LOAD_LIST_COUNTRIES,

  REQUEST_LOAD_LIST_CITIES,
  SUCCESS_LOAD_LIST_CITIES,
  INVALID_LOAD_LIST_CITIES,

  REQUEST_CHANGE_FILTERS,
  SUCCESS_CHANGE_FILTERS,
  INVALID_CHANGE_FILTERS,

  REQUEST_SEARCH,
  SUCCESS_SEARCH,
  INVALID_SEARCH,

  REQUEST_SEARCH_HOTELS,
  SUCCESS_SEARCH_HOTELS,
  INVALID_SEARCH_HOTELS,

  CHANGE_FILTER_COUNTRY,
  CHANGE_FILTER_CITY,
  CHANGE_FILTER_COST,
  CHANGE_SEARCH,
  CHANGE_RATING,
  RESET_FILTERS,
} from '../../constants'


const requestHotels = createAction(REQUEST_LOAD_HOTELS)
const successHotels = createAction(SUCCESS_LOAD_HOTELS, (json) => json.data)
const invalidHotels = createAction(INVALID_LOAD_HOTELS, (json) => json)

const requestCountries = createAction(REQUEST_LOAD_LIST_COUNTRIES)
const successCountries = createAction(SUCCESS_LOAD_LIST_COUNTRIES, (json) => json.data)
const invalidCountries = createAction(INVALID_LOAD_LIST_COUNTRIES)

const requestCities = createAction(REQUEST_LOAD_LIST_CITIES)
const successCities = createAction(SUCCESS_LOAD_LIST_CITIES, (json) => json.data)
const invalidCities = createAction(INVALID_LOAD_LIST_CITIES)

const requestFilters = createAction(REQUEST_CHANGE_FILTERS)
const successFilters = createAction(SUCCESS_CHANGE_FILTERS, (json) => json.data)
const invalidFilters = createAction(INVALID_CHANGE_FILTERS)

const requestSearch = createAction(REQUEST_SEARCH)
const successSearch = createAction(SUCCESS_SEARCH, (json) => json.data)
const invalidSearch = createAction(INVALID_SEARCH)

const requestSearchResults = createAction(REQUEST_SEARCH_HOTELS)
const successSearchResults = createAction(SUCCESS_SEARCH_HOTELS, (json) => json.data)
const invalidSearchResults = createAction(INVALID_SEARCH_HOTELS)

export const changeCountry = createAction(CHANGE_FILTER_COUNTRY, (data) => data)
export const changeCity = createAction(CHANGE_FILTER_CITY, (data) => data)
export const changeCost = createAction(CHANGE_FILTER_COST, (data) => data)
export const changeSearch = createAction(CHANGE_SEARCH, (data) => data)
export const changeRating = createAction(CHANGE_RATING, (data) => data)
export const changeReset = createAction(RESET_FILTERS)


export const fetchHotelsList = () => (dispatch) => {
  dispatch(requestHotels())
  return getHotels().then((data) => {
    dispatch(successHotels(data))
  })
    .catch((error) => {
      dispatch(invalidHotels(error))
    })
}

export const fetchCountriesList = () => (dispatch) => {
  dispatch(requestCountries())
  return getCountries().then((data) => {
    dispatch(successCountries(data))
  })
    .catch((error) => {
      dispatch(invalidCountries(error))
    })
}

export const fetchCitiesList = (data) => (dispatch) => {
  dispatch(requestCities())
  return getCitiesByCountry(data).then((json) => {
    dispatch(successCities(json))
  })
    .catch((error) => {
      dispatch(invalidCities(error))
    })
}

export const fetchFilters = (data) => (dispatch) => {
  dispatch(requestFilters())
  return getHotelsByFilters(data).then((json) => {
    dispatch(successFilters(json))
  })
    .catch((error) => {
      dispatch(invalidFilters(error))
    })
}

export const fetchSearchHotels = (data) => (dispatch) => {
  dispatch(requestSearch())
  return getHotelsBySearch(data).then((json) => {
    dispatch(successSearch(json))
  })
    .catch((error) => {
      dispatch(invalidSearch(error))
    })
}


export const fetchSearchResultsHotels = (data) => (dispatch) => {
  dispatch(requestSearchResults())
  return getHotelsBySearchResults(data).then((json) => {
    dispatch(successSearchResults(json))
  })
    .catch((error) => {
      dispatch(invalidSearchResults(error))
    })
}
