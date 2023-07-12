import React, { Component } from 'react'
import NavBar from './components/NavBar'
import NewsSection from './components/NewsSection'

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <NewsSection pageSize={9}/>
      </>
    )
  }
}
