import React, { Component } from 'react';
import './App.css'
import logo from './logo.svg';
import Router from './router'
import '@/static/reset.css'
import './mock'
class App extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <Router></Router>
    )
  }
}

export default App
