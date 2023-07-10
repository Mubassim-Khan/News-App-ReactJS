import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsSection extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2 className='my-3'>MAK News - Top Headlines</h2>
          <div className="row">
            <div className="col-md-4">
            <NewsItem title="Title" description="This is a detail" />
            </div>

            <div className="col-md-4">
            <NewsItem title="Title" description="This is a detail" />
            </div>

            <div className="col-md-4">
            <NewsItem title="Title" description="This is a detail" />
            </div>
          </div>
      </div>
    )
  }
}
