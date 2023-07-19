import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsSection = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const firstLetterCap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  document.title = `MAK News - ${firstLetterCap(props.category)}`;

  const updateNewsSection = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNewsSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

  return (
    <>
      <h1 className="text-center" style={{ margin: "30px 0px" }} >MAK News - Top {firstLetterCap(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You have reached end of page</b>
          </p>
        }
      >

        <div className="container my-3">
          <div className="row">
            {articles.map((element, id) => {
              return <div className="col-md-4" key={id}>
                <NewsItem title={element.title} description={element.description} newsURL={element.url} imgURL={element.urlToImage} author={element.author} datePublished={element.publishedAt} newsSource={element.source.name} />
              </div>
            })}
          </div>
        </div>

      </InfiniteScroll>
    </>
  )
}

NewsSection.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: "general"
}

NewsSection.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string.isRequired
}

export default NewsSection