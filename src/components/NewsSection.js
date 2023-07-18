import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class NewsSection extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    category: PropTypes.string.isRequired
  }

  firstLetterCap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `MAK News - ${this.firstLetterCap(this.props.category)}`;
  }

  async updateNewsSection() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNewsSection();
  }

  prevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNewsSection();
  }

  nextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNewsSection();
  }

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" }} >MAK News - Top {this.firstLetterCap(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>You have reached end of page</b>
            </p>
          }
        >

          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.id}>
                  <NewsItem title={element.title} description={element.description} newsURL={element.url} imgURL={element.urlToImage} author={element.author} datePublished={element.publishedAt} newsSource={element.source.name} />
                </div>
              })}
            </div>
          </div>

        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
        </div> */}

      </>
    )
  }
}
