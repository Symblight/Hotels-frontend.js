import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchAuth, fetchLogin, fetchSignUp, fetchLogout } from '../reducers/authReducer/actions'


const mapDispatchToProps = (dispatch) => ({
  onAuth: () => dispatch(fetchAuth()),
  // onLogin: (data) => dispatch(fetchLogin(data)),
  // onSignUp: (data) => dispatch(fetchSignUp(data)),
  // onLogout: () => dispatch(fetchLogout()),
})

const mapStateToProps = (state) => ({
  authorized: state.authReducer.authorized,
  user: state.authReducer.user,
})

export const withAuth = (Component) => {
  @connect(mapStateToProps, null)
  class Auth extends PureComponent {
    componentDidMount() {
      const { onAuth } = this.props

      if (onAuth) {
        // onAuth()
      }
    }

    render() {
      const { authorized, user, ...props } = this.props

      return (
        <Component
          auth={authorized}
          user={user}
          {...props}
        />
      )
    }
  }
  return Auth
}
