import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsURL } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={imgURL} className="card-img-top" alt="image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/newsdetails" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}
