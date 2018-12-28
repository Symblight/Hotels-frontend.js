import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Rating } from 'semantic-ui-react'

import { Image } from 'components/ImageComponent'

import { withHotel } from 'props-proxy/withHotel'


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 12px;
`

const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

@withHotel
class HotelInfo extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
    }

    render() {
      const { data } = this.props

      return (
        <Wrapper>
          <Image alt={data.title} src={data.url_image} />
          <WrapInfo>
            <h2>{data.title}</h2>
            <span>
              {'Рейтинг:'}
              <Rating icon='star' defaultRating={data.rating} maxRating={5} disabled />
            </span>
            <div>{data.description}</div>
            <div>
              {'Цена за ночь:'}
              {' '}
              {data.cost}
            </div>
            <h4>{data.text}</h4>
          </WrapInfo>
        </Wrapper>
      )
    }
}

export { HotelInfo }
