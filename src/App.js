import React, { useState } from 'react'
import NavBar from './components/NavBar'
import NewsSection from './components/NewsSection'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const App = () => {

  const [progress, setProgress] = useState(0);

  const pageSize = 9;
  let country = "us";
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Routes>
            <Route exact path='/' element={<NewsSection key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="general" />}></Route>
            <Route exact path='/business' element={<NewsSection key="business" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="business" />}></Route>
            <Route exact path='/entertainment' element={<NewsSection key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="entertainment" />}></Route>
            <Route exact path='/general' element={<NewsSection key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="general" />}></Route>
            <Route exact path='/health' element={<NewsSection key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="health" />}></Route>
            <Route exact path='/science' element={<NewsSection key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="science" />}></Route>
            <Route exact path='/sports' element={<NewsSection key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="sports" />}></Route>
            <Route exact path='/technology' element={<NewsSection key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}
export default App