import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchHotel } from '../pages/HotelPage/actions'


const mapDispatchToProps = (dispatch) => ({
  onHotel: (data) => dispatch(fetchHotel(data)),
})

const mapStateToProps = (state) => ({
  hotel: state.reducerHotelPage.hotel,
})

export const withHotel = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class HotelComponent extends PureComponent {
    componentWillMount() {
      const { id, onHotel } = this.props

      onHotel(id)
    }

    render() {
      const { hotel, ...props } = this.props

      if (Object.keys(hotel).length === 0) return null

      return (<Component data={hotel} {...props} />)
    }
  }
  return HotelComponent
}
