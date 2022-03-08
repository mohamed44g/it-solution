import React, { Component } from 'react'
import './bootstrap.css';
import './App.css';
import Home from './Home.js'
import Future from './future.js'
import Goal from './goals.js'
import It from './It.js'
import Future2 from './future2.js'
import Price from './price.js'
import Feed from './feedback.js'

export default class app extends Component {
  render() {
    return (
      <div>
        <Home />
        <Future />
        <Goal />
        <It />
        <Future2 />
        <Price />
        <Feed />
      </div>
    )
  }
}
