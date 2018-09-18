import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchFilters } from '../pages/MainPage/actions'


const mapDispatchToProps = (dispatch) => ({
  onChangeFilters: (data) => dispatch(fetchFilters(data)),
})

const mapStateToProps = (state) => ({
  userFilters: state.reducerMainPage.userFilters,
  filters: state.reducerMainPage.filters,
})


export const withRating = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class RatingFilter extends PureComponent {
    componentWillReceiveProps(nextProps) {
      const { onChangeFilters, userFilters } = this.props


      if (nextProps.userFilters.rating !== userFilters.rating) {
        onChangeFilters(nextProps.userFilters)
      }
    }

    render() {
      const { ...props } = this.props

      return (<Component {...props} />)
    }
  }
  return RatingFilter
}
