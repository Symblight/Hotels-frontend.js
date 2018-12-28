import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Review } from 'components'
import { withReviews } from 'props-proxy/withReviews'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e1e4e8;

  span {
    color: #548EAD;
    letter-spacing: 1.09px;
  }
`

@withReviews
class HotelReviews extends PureComponent {
    static propTypes = {
      data: PropTypes.arrayOf(Object),
      onClick: PropTypes.func,
    }

    render() {
      const { data, onClick } = this.props

      return (
        <Wrapper>
          <Title>
            Отзывы
            <span>{` (${data ? data.length : 0})`}</span>
          </Title>
          <div>
            {
              data
                ? data.map((review) => (
                  <Review key={review.id} data={review} />
                ))
                : null
            }
          </div>
          <Review edit onClick={onClick} />
        </Wrapper>
      )
    }
}

export { HotelReviews }
