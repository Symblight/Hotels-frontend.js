import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'
import { HotelPage } from 'pages/HotelPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { LoginPage } from 'pages/LoginPage'
import { SignUpPage } from 'pages/SignUpPage'

import { PrivateRoute } from 'components'


export class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/hotel/:id" component={HotelPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
