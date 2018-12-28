import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header } from 'components/Header'


const Wrapper = styled.div`
  width: 100%;
  margin auto;
  max-width: 1124px;
  padding: 24px;
  margin-top: 2rem;
`

class LoginPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
        LoginPage
        </Wrapper>
      </Fragment>
    )
  }
}

export { LoginPage }
