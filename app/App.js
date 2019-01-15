import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Header, Promotion } from 'components'
import { Routers } from './routers'

import { fetchAuth, fetchLogout } from './reducers/authReducer/actions'


const mapDispatchToProps = (dispatch) => ({
  onAuth: () => dispatch(fetchAuth()),
  onLogout: () => dispatch(fetchLogout()),
})

const mapStateToProps = (state) => ({
  authorized: state.authReducer.authorized,
  error: state.authReducer.error,
})

class App extends Component {
  static propTypes = {
    onAuth: PropTypes.func,
    onLogout: PropTypes.func,
    authorized: PropTypes.bool,
  }

  componentDidMount() {
    const { onAuth } = this.props

    if (onAuth) {
      onAuth()
    }
  }

  handleLogout = () => {
    const { onLogout } = this.props

    if (onLogout) {
      onLogout()
    }
  }

  render() {
    const { authorized } = this.props

    return (
      <div>
        <Header authorized={authorized} onLogout={this.handleLogout} />
        <Routers />
        <Promotion />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
