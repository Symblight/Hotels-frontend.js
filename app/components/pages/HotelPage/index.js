import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { HotelInfo } from 'components/HotelInfo'
import { HotelReviews } from 'components/HotelReviews'
import { Header } from 'components/Header'

import { fetchCreateReview } from './actions'


const Wrapper = styled.div`
  width: 100%;
  margin auto;
  max-width: 1124px;
  padding: 24px;
  margin-top: 2rem;
`
const mapDispatchToProps = (dispatch) => ({
  onCreateReview: (data) => dispatch(fetchCreateReview(data)),
})

@connect(null, mapDispatchToProps)
class HotelPage extends PureComponent {
  handleClick = (value) => {
    const { match, onCreateReview } = this.props

    const newData = {
      ...value,
      hotel_id: parseInt(match.params.id),
    }

    if (onCreateReview) {
      onCreateReview(newData)
    }
  }

  render() {
    const { match } = this.props

    return (
      <Fragment>
        <Header />
        <Wrapper>
          <HotelInfo id={match.params.id} />
          <HotelReviews id={match.params.id} onClick={this.handleClick} />
        </Wrapper>
      </Fragment>
    )
  }
}

export { HotelPage }
