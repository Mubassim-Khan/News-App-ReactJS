import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
      <p>This is News Component</p>
      <NewsItem/>
      </div>
    )
  }
}
