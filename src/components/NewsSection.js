import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsSection extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=66d2128a876d4de595fac26a02f73a16";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
    console.log(parsedData)
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>MAK News - Top Headlines</h1>
        <div className="row">

        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} newsURL={element.url} imgURL={element.urlToImage} />
          </div>
        })}

        </div>
      </div>
    )
  }
}
