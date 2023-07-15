import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="container text-center my-5">
        <img src={loading} alt='loader' />
      </div>
    )
  }
}
