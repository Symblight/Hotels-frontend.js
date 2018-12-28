import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Rating } from 'semantic-ui-react'

import { Image } from 'components'


const Wrapper = styled.article`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #d0d0d0;
    width: 100%;
    margin-bottom: 12px;
    cursor: pointer;
    padding: 8px;
`

const ImageBlock = styled.div`
  margin-right: 12px;
`

const Content = styled.div`
  height: 100%;
  width: 450px;
`

const Controls = styled.div`
  height: 100%
`

export class HotelGrid extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
    }

    renderPanel() {
      const { data } = this.props

      return (
        <div>
          <span>Рейтинг:</span>
          <Link to={`/hotel/${data.id}`}><Button>Открыть</Button></Link>
        </div>
      )
    }

    render() {
      const { data } = this.props

      return (
        <Wrapper>
          <ImageBlock><Image alt={data.title} src={data.url_image} /></ImageBlock>
          <Content>
            <h3>{data.title}</h3>
            <span>
              {'Рейтинг:'}
              <Rating icon='star' defaultRating={data.rating} maxRating={5} disabled />
            </span>
            <div>{data.description}</div>
            <div>{`Цена за ночь: ${data.cost}`}</div>
            <h4>{data.text}</h4>
          </Content>
          <Controls>
            <Link to={`/hotel/${data.id}`}><Button color="green">Открыть</Button></Link>
          </Controls>
        </Wrapper>
      )
    }
}
