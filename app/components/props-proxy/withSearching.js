import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchFilters, fetchSearchHotels } from '../pages/MainPage/actions'


const mapDispatchToProps = (dispatch) => ({
  onChangeFilters: (data) => dispatch(fetchFilters(data)),
  onSearchListHotels: (data) => dispatch(fetchSearchHotels(data)),
})

const mapStateToProps = (state) => ({
  userFilters: state.reducerMainPage.userFilters,
  filters: state.reducerMainPage.filters,
})


export const withSearching = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class SearchFilter extends PureComponent {
    componentWillReceiveProps(nextProps) {
      const { onSearchListHotels, filters } = this.props


      if (nextProps.filters.search !== filters.search) {
        onSearchListHotels(nextProps.filters.search)
      }
    }

    render() {
      const { ...props } = this.props

      return (<Component {...props} />)
    }
  }
  return SearchFilter
}
