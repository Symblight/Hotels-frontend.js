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

  state = {
    user: {
      username: '',
      email: '',
      password: '',
    },
  }

  onSubmit = () => {
    const { onSubmit } = this.props
    const { user } = this.state

    if (onSubmit) {
      onSubmit(user)
    }
  }

  handleChange = ({ target }) => {
    const { user } = this.state

    // eslint-disable-next-line prefer-destructuring
    const field = target.name

    // eslint-disable-next-line no-multi-assign
    const newUser = {
      ...user,
    }

    newUser[field] = target.value

    this.setState({
      user: newUser,
    })
  }

  render() {
    const { user } = this.state

    return (
      <FormStyled success>
        <Form.Input
          label='Username'
          placeholder='Username'
          name="username"
          value={user.username}
          onChange={this.handleChange}
        />
        <Form.Input
          label='Email'
          placeholder='joe@schmoe.com'
          name="email"
          value={user.email}
          onChange={this.handleChange}
        />
        <Form.Input
          label='Password'
          placeholder='password'
          name="password"
          type="password"
          value={user.password}
          onChange={this.handleChange}
        />
        <Message
          error
          header='Action Forbidden'
          content='You can only sign up for an account once with a given e-mail address.'
        />
        <Link to="/profile">
          <Button onClick={this.onSubmit}>Sign up</Button>
        </Link>
      </FormStyled>
    )
  }
}
