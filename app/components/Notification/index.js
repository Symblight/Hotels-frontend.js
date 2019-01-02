import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'


const MessageStyled = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px
`

class Notification extends PureComponent {
  static propTypes = {
    data: PropTypes.any,
  }

  state = {
    toggleOn: false,
  }

  handleClick = () => {
    const { toggleOn } = this.state

    this.setState({
      toggleOn: !toggleOn,
    })
  }

  render() {
    const { data } = this.props
    const { toggleOn } = this.state

    if (!data || toggleOn) return null

    return (
      <MessageStyled onClick={this.handleClick}>
        <Message negative>
          <Message.Header>Error</Message.Header>
          {data.message}
        </Message>
      </MessageStyled>
    )
  }
}

export { Notification }
