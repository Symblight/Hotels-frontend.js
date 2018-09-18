import { combineReducers } from 'redux'

import { reducerMainPage } from 'components/pages/MainPage/reducer'
import { reducerHotelPage } from 'components/pages/HotelPage/reducer'


export default combineReducers({
  reducerMainPage,
  reducerHotelPage,
})
