import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
  fetchCountriesList,
  fetchCitiesList,
  fetchFilters,
} from '../pages/MainPage/actions'


const mapDispatchToProps = (dispatch) => ({
  onCountriesList: (data) => dispatch(fetchCountriesList(data)),
  onCitiesList: (data) => dispatch(fetchCitiesList(data)),
  onChangeFilters: (data) => dispatch(fetchFilters(data)),
})

const mapStateToProps = (state) => ({
  countries: state.reducerMainPage.filters.countries,
  userFilters: state.reducerMainPage.userFilters,
})


export const withCountries = (Component) => {
  @connect(mapStateToProps, mapDispatchToProps)
  class CountriesFilter extends PureComponent {
    componentWillMount() {
      const { onCountriesList } = this.props

      onCountriesList()
    }

    componentWillReceiveProps(nextProps) {
      const { onChangeFilters, onCitiesList, userFilters } = this.props

      if (nextProps.userFilters.id_country !== userFilters.id_country) {
        onChangeFilters(nextProps.userFilters)
        onCitiesList(nextProps.userFilters)
      }
    }

    render() {
      const { countries, ...props } = this.props

      if (!countries) return null

      return (<Component data={countries} {...props} />)
    }
  }
  return CountriesFilter
}
