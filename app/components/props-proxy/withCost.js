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


export const withCost = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class CostFilter extends PureComponent {
    componentWillReceiveProps(nextProps) {
      const { onChangeFilters, userFilters } = this.props


      if (nextProps.userFilters.cost !== userFilters.cost) {
        onChangeFilters(nextProps.userFilters)
      }
    }

    render() {
      const { ...props } = this.props

      return (<Component {...props} />)
    }
  }
  return CostFilter
}
