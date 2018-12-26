import React, { Fragment, PureComponent } from 'react'
import styled from 'styled-components'

import { Header } from 'components/Header'


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1124px;
  padding: 24px;
  margin: auto;
`

export class NotFoundPage extends PureComponent {
  render() {
    const { location } = this.props

    return (
      <Fragment>
        <Header />
        <Container>
          {' Not found: '}
          {location.pathname}
        </Container>
      </Fragment>
    )
  }
}
