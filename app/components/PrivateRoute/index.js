import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  authorized: state.authReducer.authorized,
})

export const PrivateRoute = connect(mapStateToProps, null)(({
  component: Component,
  authorized, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      authorized === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )}
  />
))
