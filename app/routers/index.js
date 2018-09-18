import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { MainPage } from 'components/pages/MainPage'
import { HotelPage } from 'components/pages/HotelPage'
import { NotFoundPage } from 'components/pages/NotFoundPage'


export class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/hotel/:id" component={HotelPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
