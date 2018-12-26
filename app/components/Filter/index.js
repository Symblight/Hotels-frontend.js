import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e1e4e8;
    margin-bottom: 24px;
    text-align: center;
    background-color: #fff;
`

const TitleWrap = styled.div`
  background-color: #2980b9;
  font-weight: 700;
  color: #ffffff;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor:pointer;
`

const Container = styled.div`
    width: 100%;
    min-height: 100px;
    align-items: center;
    padding: 8px;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export class FilterComponent extends PureComponent {
    static propTypes = {
      children: PropTypes.any,
      title: PropTypes.string,
      onClick: PropTypes.func,
      enabled: PropTypes.bool,
      controll: PropTypes.bool,
    }

    static defaultProps = {
      enabled: true,
      controll: false,
    }

    onClick = () => {
      const { onClick } = this.props

      if (onClick) {
        onClick()
      }
    }

    renderPanel() {
      return (
        <Button color="green" onClick={this.onClick}>Применить</Button>
      )
    }

    render() {
      const { children, title, enabled, controll } = this.props

      return (
        <Wrapper>
          <TitleWrap>{title}</TitleWrap>
          { enabled
            ? (
              <Container>
                {children}
              </Container>
            )
            : null
          }
          {
            controll
              ? this.renderPanel() : null
          }
        </Wrapper>
      )
    }
}
