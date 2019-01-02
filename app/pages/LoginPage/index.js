import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { FormLogin, PageWrapper, Notification } from 'components'
import { fetchLogin } from '../../reducers/authReducer/actions'


const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(fetchLogin(data)),
})

const mapStateToProps = (state) => ({
  authorized: state.authReducer.authorized,
  error: state.authReducer.error,
})

@connect(mapStateToProps, mapDispatchToProps)
class LoginPage extends PureComponent {
  static propTypes = {
    onLogin: PropTypes.func,
    authorized: PropTypes.bool,
  }

  handleLogin = (data) => {
    const { onLogin } = this.props

    if (onLogin) {
      onLogin(data)
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { authorized, error } = this.props

    if (authorized === true) {
      return <Redirect to={from} />
    }

    return (
      <PageWrapper>
        <FormLogin onSubmit={this.handleLogin} />
        <Notification data={error} />
      </PageWrapper>
    )
  }
}

export { LoginPage }
