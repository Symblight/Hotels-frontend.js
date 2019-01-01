import axios from 'axios'


const api = window.config.apiUrlServer || 'http://localhost:3333'

// GET
export const getHotels = () => axios.get(`${api}/api/v1/hotels`)
export const getHotel = (param) => axios.get(`${api}/api/v1/hotels/${param}`)
export const getCountries = () => axios.get(`${api}/api/v1/countries`)
export const getCities = () => axios.get(`${api}/api/v1/cities`)

// FILTERS
export const getCitiesByCountry = (data) => axios.post(`${api}/api/v1/cities/country`, data)
export const getHotelsByFilters = (data) => axios.post(`${api}/api/v1/hotels/filters`, data)

// SEARCH HOTELS
export const getHotelsBySearch = (data) => axios.get(`${api}/api/v1/search/client=${data}`)
export const getHotelsBySearchResults = (data) => axios.get(`${api}/api/v1/search/searchresult=${data}`)

// REVIEWS
export const getHotelReviews = (data) => axios.get(`${api}/api/v1/reviews/hotel/${data}`)
export const getCreateReview = (data) => axios.post(`${api}/api/v1/reviews/`, data)

// USER
export const apiLogin = (data) => axios.post(`${api}/api/v1/user/login`, data)
export const apiSignUp = (data) => axios.post(`${api}/api/v1/user/signup`, data)
export const getProfile = (data) => axios.get(`${api}/api/v1/user/profile/${data}`)
export const apiAuth = () => axios.get(`${api}/api/v1/user/login`)
export const apiLogout = () => axios.delete(`${api}/api/v1/user/logout`)
