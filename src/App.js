import React, { Component } from 'react'
import NavBar from './components/NavBar'
import NewsSection from './components/NewsSection'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<NewsSection key="general" pageSize={9} country="us" category="general" />}></Route>
            <Route exact path='/business' element={<NewsSection key="business" pageSize={9} country="us" category="business" />}></Route>
            <Route exact path='/entertainment' element={<NewsSection key="entertainment" pageSize={9} country="us" category="entertainment" />}></Route>
            <Route exact path='/general' element={<NewsSection key="general" pageSize={9} country="us" category="general" />}></Route>
            <Route exact path='/health' element={<NewsSection key="health" pageSize={9} country="us" category="health" />}></Route>
            <Route exact path='/science' element={<NewsSection key="science" pageSize={9} country="us" category="science" />}></Route>
            <Route exact path='/sports' element={<NewsSection key="sports" pageSize={9} country="us" category="sports" />}></Route>
            <Route exact path='/technology' element={<NewsSection key="technology" pageSize={9} country="us" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
