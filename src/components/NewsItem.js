import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
    <div className="card" style={{ width: "18rem"}}>
      <img src="https://talksport.com/wp-content/uploads/sites/5/2023/07/PM-TALKSPORT-Blog-8th-July-AM.jpg?strip=all&quality=100&w=1500&h=1000&crop=1" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    )
  }
}
