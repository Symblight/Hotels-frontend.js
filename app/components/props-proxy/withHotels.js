import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchHotelsList } from '../pages/MainPage/actions'


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
