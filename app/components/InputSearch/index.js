import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from 'components/Input'


const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 24px;
`

export class InputBlock extends PureComponent {
    static propTypes = {
      value: PropTypes.string,
      onChange: PropTypes.func,
    }

    render() {
      const { value, onChange } = this.props

      return (
        <Wrapper>
          <Input value={value} onChange={onChange} />
        </Wrapper>
      )
    }
}
