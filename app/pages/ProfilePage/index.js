import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { PageWrapper } from 'components'


const Wrapper = styled.section`
  margin: 0 auto;
  float: none;
  width: 524px;
`

const HeroArticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
`

const Content = styled.article`
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.25);
`

const Field = styled.aside`
  display: table;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 10px 20px;
`

const FieldTitle = styled.strong`
  font-weight: bold;
  display: table-cell;
  vertical-align: top;
  width: 145px;
`

const Avatar = styled.div`
  width: 140px;
  height: 140px;

  border-radius: 50%;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 62px;
  font-weight: 700;

  margin-bottom: 10px;

  background-color: #3498db;

  color: #fff;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  text-decoration: none;

  color: #3498db;
`

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
})

@connect(mapStateToProps, null)
class ProfilePage extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  getFirstLetter(value) {
    return value.charAt(0).toUpperCase()
  }

  render() {
    const { user } = this.props

    if (!user) return null

    const LETTER = this.getFirstLetter(user.username)

    return (
      <PageWrapper>
        <Wrapper>
          <HeroArticle>
            <Avatar>{LETTER}</Avatar>
            <Title>{user.username}</Title>
          </HeroArticle>
          <Content>
            <Field>
              <FieldTitle>Profile</FieldTitle>
            </Field>
            <Field>
              <FieldTitle>Username</FieldTitle>
              <span>{user.username}</span>
            </Field>
            <Field>
              <FieldTitle>email</FieldTitle>
              <span>{user.email}</span>
            </Field>
          </Content>
        </Wrapper>
      </PageWrapper>
    )
  }
}

export { ProfilePage }
