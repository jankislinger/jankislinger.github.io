import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import {Header} from './components/headerComponent/header'

import './App.css';
import BlogIndex from "./components/pages/blogIndex"
import BlogPost from "./components/pages/blogPost"
import {HomePage} from "./components/pages/homePage"


class App extends React.Component {
  title = "About Us"
  breadcrumbs = [
    {href: "#", text: "Home"},
    {href: "", text: "Pages"},
  ]

  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <Header/>
          <div role="main" className="main">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/blog" component={BlogIndex}/>
              <Route path="/blog/:postKey" children={<BlogPost/>}/>
              <Route><h1>404</h1></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
