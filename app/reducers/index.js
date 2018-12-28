import { combineReducers } from 'redux'

import { reducerMainPage } from 'pages/MainPage/reducer'
import { reducerHotelPage } from 'pages/HotelPage/reducer'


export default combineReducers({
  reducerMainPage,
  reducerHotelPage,
})
