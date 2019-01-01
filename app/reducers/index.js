import { combineReducers } from 'redux'

import { reducerMainPage } from 'pages/MainPage/reducer'
import { reducerHotelPage } from 'pages/HotelPage/reducer'
import { authReducer } from './authReducer'


export default combineReducers({
  reducerMainPage,
  reducerHotelPage,
  authReducer,
})
