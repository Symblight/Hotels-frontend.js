import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HotelGrid } from 'components'
import { withHotels } from 'props-proxy/withHotels'


const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    min-width: 600px;
    width: 100%;
    align-items: center;
`

@withHotels
class HotelsGrids extends Component {
    static propTypes = {
      data: PropTypes.array,
    }

    renderNotFound() {
      return (
        <h2>Нет результатов</h2>
      )
    }

    render() {
      const { data } = this.props

      return (
        <Wrapper>
          { data && data.length > 0
            ? data.map((hotel) => (
              <HotelGrid key={hotel.id} data={hotel} />
            ))
            : this.renderNotFound()
          }
        </Wrapper>
      )
    }
}

export { HotelsGrids }
