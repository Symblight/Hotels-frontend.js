import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Image } from 'components'


const URL = window.config.urlModal
const ESCAPE_KEY = 27

const Wrapper = styled.div`
    position: fixed;
    display: flex;

    justify-content: center;
    align-items: center;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    height: 100%;
    width: 100%;
    z-index: 999;

    background-color: rgba(255,255,255,.97);
`

const Modal = styled.div`
    position: relative;
    width: 450px;
    height: 350px;

    border-radius: 6px;

    background-color: #fff;

    box-shadow: 0 2px 10px rgba(0,0,0,.15);

    overflow: hidden;
`

const CloseWrap = styled.div`
  position: absolute;

  top: 10px;
  right: 10px;

  cursor: pointer;
`

const ImageStyled = styled(Image)`
  width: 100% !important;
  height: 100%;
`

class Promotion extends PureComponent {
  state = {
    toggle: true,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false)
  }

  onToggle = () => {
    const { toggle } = this.state

    this.setState({
      toggle: !toggle,
    })
  }

  handleKeyPress = (event) => {
    const { toggle } = this.state

    if (event.keyCode === ESCAPE_KEY && toggle) {
      this.onToggle()
    }
  }

  render() {
    const { toggle } = this.state

    if (!toggle) return null

    return (
      <Wrapper>
        <Modal>
          <ImageStyled src={URL} alt="promotion" />
          <CloseWrap onClick={this.onToggle}>
            <i className="material-icons close-modal">clear</i>
          </CloseWrap>
        </Modal>
      </Wrapper>
    )
  }
}

export { Promotion }
