import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { FormSignUp, PageWrapper, Notification } from 'components'
import { fetchSignUp } from '../../reducers/authReducer/actions'


const mapDispatchToProps = (dispatch) => ({
  onSignUp: (data) => dispatch(fetchSignUp(data)),
})

const mapStateToProps = (state) => ({
  authorized: state.authReducer.authorized,
  error: state.authReducer.error,
})

@connect(mapStateToProps, mapDispatchToProps)
class SignUpPage extends Component {
  static propTypes = {
    onSignUp: PropTypes.func,
    authorized: PropTypes.bool,
  }

  handleSignUp = (data) => {
    const { onSignUp } = this.props

    if (onSignUp) {
      onSignUp(data)
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
        <FormSignUp onSubmit={this.handleSignUp} />
        <Notification data={error} />
      </PageWrapper>
    )
  }
}

export { SignUpPage }
