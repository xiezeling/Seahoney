import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '@/views/Home'
import Work from '@/views/Work'
import People from '@/views/People'
import User from '@/views/User'
import Download from '@/views/Download'
export default class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/work' component={Work}></Route>
          <Route path='/people' component={People}></Route>
          <Route path='/user' component={User}></Route>
          <Route path='/download' component={Download}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      </Router>
    )
  }
}