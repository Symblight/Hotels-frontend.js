import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchHotelsList } from '../pages/MainPage/actions'


const HOTELS = [
  {
    id: 0,
    title: 'hotel1',
  },
  {
    id: 1,
    title: 'hotel2',
  },
  {
    id: 2,
    title: 'hotel3',
  },
  {
    id: 3,
    title: 'hotel4',
  },
]

const mapDispatchToProps = (dispatch) => ({
  onHotelList: (data) => dispatch(fetchHotelsList(data)),
})

const mapStateToProps = (state) => ({
  hotelsList: state.reducerMainPage.hotels,
})

export const withHotels = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class AsyncHotelsList extends PureComponent {
    componentWillMount() {
      const { onHotelList } = this.props

      onHotelList()
    }

    render() {
      const { hotelsList, ...props } = this.props

      if (!hotelsList) return null

      return (
        <Component data={hotelsList} {...props} />
      )
    }
  }

  return AsyncHotelsList
}
