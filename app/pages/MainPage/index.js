import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  InputButtonSearch,
  PageWrapper,
  HotelsGrids,
  FilterCity,
  FilterCountries,
  FilterCost,
  FilterRating,
} from 'components'


import {
  fetchFilters,
  fetchSearchResultsHotels,
  changeCountry,
  changeCity,
  changeCost,
  changeSearch,
  changeRating,
  changeReset,
} from './actions'


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1124px;
  padding: 24px;
  margin: auto;
`

const FilterWrapper = styled.div`
  width: 320px;
  margin-left: 24px;
`

const mapStateToProps = (state) => ({
  hotels: state.reducerMainPage.hotels,
  userFilters: state.reducerMainPage.userFilters,
  filters: state.reducerMainPage.filters,
})

const mapDispatchToProps = (dispatch) => ({
  onChangeFilters: (data) => dispatch(fetchFilters(data)),
  onSearchListHotels: (data) => dispatch(fetchSearchResultsHotels(data)),

  onSelectCountry: (data) => dispatch(changeCountry(data)),
  onSelectCity: (data) => dispatch(changeCity(data)),
  onChangeCost: (data) => dispatch(changeCost(data)),
  onChangeSearch: (data) => dispatch(changeSearch(data)),
  onChangeRating: (data) => dispatch(changeRating(data)),
  onReset: () => dispatch(changeReset()),
})

@connect(mapStateToProps, mapDispatchToProps)
class MainPage extends Component {
  static propTypes = {
    onChangeFilters: PropTypes.func,
    userFilters: PropTypes.object,
    filters: PropTypes.object,
    onSelectCountry: PropTypes.func,
    onSelectCity: PropTypes.func,
    onChangeCost: PropTypes.func,
    onSearchListHotels: PropTypes.func,
  }

  componentWillReceiveProps(nextProps) {
    const { onChangeFilters, userFilters } = this.props

    if (nextProps.userFilters !== userFilters) {
      if (onChangeFilters) {
      // h onChangeFilters(nextProps.userFilters)
      }
    }
  }

  handleChangeCountries = ({ id }) => {
    const { onSelectCountry } = this.props

    if (onSelectCountry) {
      onSelectCountry(id)
    }
  }

  handleChangeCities = ({ id }) => {
    const { onSelectCity } = this.props

    if (onSelectCity) {
      onSelectCity(id)
    }
  }

  handleChangeCost = (event, value) => {
    const { onChangeCost } = this.props

    if (onChangeCost) {
      onChangeCost(value)
    }
  }

  handleChangeRating = (value) => {
    const { onChangeRating } = this.props

    if (onChangeRating) {
      onChangeRating(value)
    }
  }

  handleChangeInputSeacrh = (value) => {
    const { onChangeSearch } = this.props

    if (onChangeSearch) {
      onChangeSearch(value)
    }
  }

  handleClickSeacrh = () => {
    const { onSearchListHotels, filters } = this.props

    if (onSearchListHotels) {
      onSearchListHotels(filters.search)
    }
  }

  handleReset = () => {
    const { onReset } = this.props

    if (onReset) {
      onReset()
    }
  }

  renderFilters() {
    const { userFilters, filters } = this.props

    return (
      <FilterWrapper>
        <FilterCountries
          onChange={this.handleChangeCountries}
          onClick={this.handleClickFilters}
          enabled
        />
        <FilterCity
          onChange={this.handleChangeCities}
          onClick={this.handleClickFilters}
          enabled={!!filters.cities}
          data={filters.cities}
        />
        <FilterRating
          onChange={this.handleChangeRating}
          data={userFilters.rating}
        />
        <FilterCost
          onChange={this.handleChangeCost}
          data={userFilters.cost}
        />
      </FilterWrapper>
    )
  }

  render() {
    const { filters } = this.props

    return (
      <PageWrapper>
        <InputButtonSearch
          onClick={this.handleClickSeacrh}
          onChange={this.handleChangeInputSeacrh}
          searchList={filters.searchList}
          search={filters.search}
        />
        <Container>

          <HotelsGrids />

          {this.renderFilters()}

        </Container>
      </PageWrapper>
    )
  }
}

export { MainPage }
