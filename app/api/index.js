import axios from 'axios'
import { ajax } from 'rxjs/ajax'


const api = window.config.apiUrlServer || 'http://localhost:3333'

// axios.defaults.withCredentials = true
// axios.defaults.header = 'Access-Control-Allow-Origin: *'
const headerConfig = {// GET
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

// GET
export const getHotels = () => axios(`${api}/api/v1/hotels`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})
export const getHotel = (param) => axios(`${api}/api/v1/hotels/${param}`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})
export const getCountries = () => axios(`${api}/api/v1/countries`, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  crossDomain: true,
  withCredentials: true,
  credentials: 'same-origin',
})

export const getCities = () => axios(`${api}/api/v1/cities`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})

// FILTERS
export const getCitiesByCountry = (data) => axios(`${api}/api/v1/cities/country`, {
  method: 'POST',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
  data,
})
export const getHotelsByFilters = (data) => axios(`${api}/api/v1/hotels/filters`, {
  method: 'POST',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
  data,
})

// SEARCH HOTELS
export const getHotelsBySearch = (data) => axios(`${api}/api/v1/search/client=${data}`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})
export const getHotelsBySearchResults = (data) => axios(`${api}/api/v1/search/searchresult=${data}`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})

// REVIEWS
export const getHotelReviews = (data) => axios(`${api}/api/v1/reviews/hotel/${data}`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})
export const getCreateReview = (data) => axios(`${api}/api/v1/reviews/`, {
  method: 'POST',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
  data,
})

// USER
export const apiLogin = (data) => axios(`${api}/api/v1/user/login`, {
  method: 'POST',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
  data,
})
export const apiSignUp = (data) => axios(`${api}/api/v1/user/signup`, {
  method: 'POST',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
  data,
})
export const getProfile = (data) => axios(`${api}/api/v1/user/profile/${data}`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})
export const apiAuth = () => axios(`${api}/api/v1/user/login`, {
  method: 'GET',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})
export const apiLogout = () => axios(`${api}/api/v1/user/logout`, {
  method: 'DELETE',
  headers: headerConfig,
  crossDomain: true,
  withCredentials: true,
})
