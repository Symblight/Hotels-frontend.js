import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const FormStyled = styled(Form)`
    margin: auto;
    max-width: 400px !important;
`

export class FormSignUp extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  onSubmit = () => {
    const { onSubmit } = this.props

    const user = {
      username: 'symblight',
      email: 'symblight2@gmail.com',
      password: '12345678',
    }

    if (onSubmit) {
      onSubmit(user)
    }
  }

  render() {
    return (
      <FormStyled success>
        <Form.Input label='Username' placeholder='Username' />
        <Form.Input label='Email' placeholder='joe@schmoe.com' />
        <Form.Input label='Password' placeholder='password' />
        <Message
          error
          header='Action Forbidden'
          content='You can only sign up for an account once with a given e-mail address.'
        />
        <Link to="/profile"><Button onClick={this.onSubmit}>Sign up</Button></Link>
      </FormStyled>
    )
  }
}
