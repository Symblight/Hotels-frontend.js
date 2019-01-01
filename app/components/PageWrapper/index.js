import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
    width: 100%;
    margin auto;
    max-width: 1124px;
    padding: 24px;
    margin-top: 2rem;
`

export class PageWrapper extends PureComponent {
    static propTypes = {
      children: PropTypes.node.isRequired,
    }

    render() {
      const { children } = this.props

      return (
        <Wrapper>
          {children}
        </Wrapper>
      )
    }
}
