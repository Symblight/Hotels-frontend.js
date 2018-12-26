import axios from 'axios'


const api = window.config.apiUrlServer || 'http://localhost:3333'

const headerConfig = {
  'Access-Control-Allow-Origin': api,
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

export const getHotels = () => axios(`${api}/api/v1/hotels`, {
  method: 'GET',
  mode: 'no-cors',
  headers: headerConfig,
})

export const getHotel = (param) => axios(`${api}/api/v1/hotels/${param}`, {
  method: 'GET',
  mode: 'no-cors',
  headers: headerConfig,
})

export const getCountries = () => axios(`${api}/api/v1/countries`, {
  method: 'GET',
  mode: 'no-cors',
  headers: headerConfig,
})

export const getCities = () => axios(`${api}/api/v1/cities`, {
  method: 'GET',
  mode: 'no-cors',
  headers: headerConfig,
})

export const getCitiesByCountry = (data) => axios(`${api}/api/v1/cities/country`, {
  method: 'POST',
  mode: 'no-cors',
  headers: headerConfig,
  data,
})

export const getHotelsByFilters = (data) => axios(`${api}/api/v1/hotels/filters`, {
  method: 'POST',
  mode: 'no-cors',
  headers: headerConfig,
  data,
})

export const getHotelsBySearch = (data) => axios(`${api}/api/v1/search/client=${data}`, {
  method: 'GET',
  mode: 'no-cors',
})

export const getHotelsBySearchResults = (data) => axios(`${api}/api/v1/search/searchresult=${data}`, {
  method: 'GET',
  mode: 'no-cors',
})

export const getHotelReviews = (data) => axios(`${api}/api/v1/reviews/hotel/${data}`, {
  method: 'GET',
  mode: 'no-cors',
  headers: headerConfig,
})

export const getCreateReview = (data) => axios(`${api}/api/v1/reviews/`, {
  method: 'POST',
  mode: 'no-cors',
  headers: headerConfig,
  data,
})
