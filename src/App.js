import React, { Component } from 'react'
import NavBar from './components/NavBar'
import NewsSection from './components/NewsSection'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  pageSize = 9;
  country = "us";

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route exact path='/' element={<NewsSection key="general" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="general" />}></Route>
            <Route exact path='/business' element={<NewsSection key="business" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="business" />}></Route>
            <Route exact path='/entertainment' element={<NewsSection key="entertainment" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="entertainment" />}></Route>
            <Route exact path='/general' element={<NewsSection key="general" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="general" />}></Route>
            <Route exact path='/health' element={<NewsSection key="health" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="health" />}></Route>
            <Route exact path='/science' element={<NewsSection key="science" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="science" />}></Route>
            <Route exact path='/sports' element={<NewsSection key="sports" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="sports" />}></Route>
            <Route exact path='/technology' element={<NewsSection key="technology" setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
