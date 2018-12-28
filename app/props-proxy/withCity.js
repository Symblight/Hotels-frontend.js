import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchCitiesList, fetchFilters } from '../pages/MainPage/actions'


const mapDispatchToProps = (dispatch) => ({
  onCitiesList: (data) => dispatch(fetchCitiesList(data)),
  onChangeFilters: (data) => dispatch(fetchFilters(data)),
})

const mapStateToProps = (state) => ({
  cities: state.reducerMainPage.filters.cities,
  userFilters: state.reducerMainPage.userFilters,
  filters: state.reducerMainPage.filters,
})


export const withCities = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class CityFilter extends PureComponent {
    componentWillReceiveProps(nextProps) {
      const { onChangeFilters, userFilters } = this.props

      if (nextProps.userFilters.id_city !== userFilters.id_city) {
        onChangeFilters(nextProps.userFilters)
      }
    }

    render() {
      const { cities, ...props } = this.props

      if (!cities) return null

      return (<Component data={cities} {...props} onSelect={this.onSelect} />)
    }
  }
  return CityFilter
}
