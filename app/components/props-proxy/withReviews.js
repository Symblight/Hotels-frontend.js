import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchReviews } from '../pages/HotelPage/actions'


const mapDispatchToProps = (dispatch) => ({
  onReviews: (data) => dispatch(fetchReviews(data)),
})

const mapStateToProps = (state) => ({
  reviews: state.reducerHotelPage.reviews,
})

export const withReviews = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class Reviews extends PureComponent {
    componentDidMount() {
      const { id, onReviews } = this.props

      onReviews(id)
    }

    render() {
      const { reviews, ...props } = this.props

      if (!reviews) return null

      return (<Component data={reviews} {...props} />)
    }
  }
  return Reviews
}
