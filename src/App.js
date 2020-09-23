import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import {Header} from './components/header'

import './App.css';
import BlogIndex from "./components/pages/blogIndex"
import BlogPost from "./components/pages/blogPost"
import {HomePage} from "./components/pages/homePage"
import {CoursesCompanies} from "./components/pages/coursesCompanies";
import {CoursesIndividual} from "./components/pages/coursesIndividual"
import {CoursesUniversity} from "./components/pages/coursesUniversity"
import {CoursesPublic} from "./components/pages/coursesPublic"
import {Footer} from "./components/footer"


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
              <Route exact path="/firemni-skoleni" component={CoursesCompanies}/>
              <Route exact path="/skolni-kurzy" component={CoursesUniversity}/>
              <Route exact path="/kurzy-pro-verejnost" component={CoursesPublic}/>
              <Route exact path="/individualni-kurzy" component={CoursesIndividual}/>
              <Route exact path="/blog" component={BlogIndex}/>
              <Route path="/blog/:postKey" children={<BlogPost/>}/>
              <Route><h1>404</h1></Route>
            </Switch>
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App
