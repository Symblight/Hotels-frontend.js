import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PageWrapper, HotelReviews, HotelInfo } from 'components'
import { fetchCreateReview } from './actions'


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
      <PageWrapper>
        <HotelInfo id={match.params.id} />
        <HotelReviews id={match.params.id} onClick={this.handleClick} />
      </PageWrapper>
    )
  }
}

export { HotelPage }
