import React, { Component } from 'react'
import NavBar from './components/NavBar'
import NewsSection from './components/NewsSection'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {

  pageSize = 9;
  country = "us";

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<NewsSection key="general" pageSize={this.pageSize} country={this.country} category="general" />}></Route>
            <Route exact path='/business' element={<NewsSection key="business" pageSize={this.pageSize} country={this.country} category="business" />}></Route>
            <Route exact path='/entertainment' element={<NewsSection key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" />}></Route>
            <Route exact path='/general' element={<NewsSection key="general" pageSize={this.pageSize} country={this.country} category="general" />}></Route>
            <Route exact path='/health' element={<NewsSection key="health" pageSize={this.pageSize} country={this.country} category="health" />}></Route>
            <Route exact path='/science' element={<NewsSection key="science" pageSize={this.pageSize} country={this.country} category="science" />}></Route>
            <Route exact path='/sports' element={<NewsSection key="sports" pageSize={this.pageSize} country={this.country} category="sports" />}></Route>
            <Route exact path='/technology' element={<NewsSection key="technology" pageSize={this.pageSize} country={this.country} category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
