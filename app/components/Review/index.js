import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, Button, Form, TextArea } from 'semantic-ui-react'
import moment from 'moment'

import { Hero } from 'components'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ReviewEditWrap = styled.div`
    padding: 12px;
    background-color: #fdffdb;
`

const ReviewWrap = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    margin-bottom: 12px;
    align-items: center;
`

const ReviewText = styled.div`
    overflow: hidden;
    font-size: 16px;
    line-height: 1.56;
`

const DateWrap = styled.span`
    color: #5f5f5f;
    font-size: 13px;
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 20px; 
`

export class Review extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
      edit: PropTypes.bool,
      onClick: PropTypes.func,
    }

    state = {
      title: '',
      text: '',
    }

    handleChangeTitle = (event) => {
      this.setState({ title: event.target.value })
    }

    handleChangeText = (event) => {
      this.setState({ text: event.target.value })
    }

    onClick = () => {
      const { onClick } = this.props
      const { title, text } = this.state

      const data = {
        title,
        text,
      }

      this.setState({
        text: '',
        title: '',
      })

      if (onClick) {
        onClick(data)
      }
    }

    renderEdit() {
      const { title, text } = this.state

      return (
        <ReviewEditWrap>
          <Form>
            <Input value={title} onChange={this.handleChangeTitle} />
            <TextArea placeholder='Tell us more' value={text} onChange={this.handleChangeText} />
            <Button color="green" onClick={this.onClick}>Отправить</Button>
          </Form>
        </ReviewEditWrap>
      )
    }

    renderReview() {
      const { data } = this.props

      return (
        <ReviewWrap>
          <Hero value="guest" size="medium" />
          <Article>
            <h3>{data.title}</h3>
            <ReviewText>{data.text}</ReviewText>
            <DateWrap>
              {
                moment(data.create_at).add(1, 'day').add(24, 'hours').format('LLL')
            }
            </DateWrap>
          </Article>
        </ReviewWrap>
      )
    }

    render() {
      const { edit } = this.props

      return (
        <Wrapper>
          {
              edit
                ? this.renderEdit()
                : this.renderReview()
          }
        </Wrapper>
      )
    }
}
