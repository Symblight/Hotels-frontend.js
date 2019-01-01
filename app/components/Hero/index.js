import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const SIZE = 140
const FONT_SIZE = 72

const setSizeContainer = ({ size }) => size === 'medium' ? SIZE / 3 : SIZE
const setSizeFont = ({ size }) => size === 'medium' ? FONT_SIZE / 2 : FONT_SIZE

const Avatar = styled.div`
  width: ${setSizeContainer}px;
  height: ${setSizeContainer}px;

  border-radius: 50%;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: ${setSizeFont}px;
  font-weight: 700;

  margin-bottom: 10px;

  background-color: #3498db;

  color: #fff;
`

class Hero extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    size: PropTypes.string,
  }

  static defaultProps = {
    size: 'large',
  }

  getFirstLetter(value) {
    return value.charAt(0).toUpperCase()
  }

  render() {
    const { value, size } = this.props

    const LETTER = this.getFirstLetter(value)

    return (
      <Avatar size={size}>{LETTER}</Avatar>
    )
  }
}

export { Hero }
