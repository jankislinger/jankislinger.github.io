import {RowNewWay, RowWhoWeAre} from "../AboutUs"
import React, {useEffect, useState} from "react"
import ReactMarkdown from "react-markdown"
import {Link, useParams} from "react-router-dom"
import {PageHeader} from "../PageHeader"
import {API_URL, monthNames, TITLE} from "../constants"


function BlogPost() {

  let {postKey} = useParams()
  const postUrl = `/blog/${postKey}`

  const [metadata, setMetadata] = useState(null)
  const [markdown, setMarkdown] = useState(null)

  document.title = `Blog | ${TITLE}`

  useEffect(() => {
    fetch(`${API_URL}/post/${postKey}/metadata.json`)
      .then(response => response.json())
      .then(data => setMetadata(data))
      .then(() => console.log("state updated"))
  }, [setMetadata])

  useEffect(() => {
    fetch(`${API_URL}/post/${postKey}/full.md`)
      .then(response => response.text())
      .then(data => data.replaceAll("/assets/", "https://raw.githubusercontent.com/jankislinger/jankislinger.github.io/master/assets/"))
      .then(data => setMarkdown(data))
      .then(() => console.log("state updated"))
  }, [setMarkdown])

  if (metadata === null || markdown === null) {
    return (<div>Loading</div>)
  }

  const breadcrumbs = [
    {href: "/", text: "Home"},
    {href: "/blog", text: "Blog"},
    {href: null, text: metadata.title}
  ]

  const date = new Date(metadata.date)


  return (
    <>
      <PageHeader title={metadata.title} breadcrumbs={breadcrumbs}/>
      <div className="container py-4">

        <div className="row">
          <div className="col">
            <div className="blog-posts single-post">

              <article className="post post-large blog-single-post border-0 m-0 p-0">

                <div className="post-date ml-0">
                  <span className="day">{date.getDate()}</span>
                  <span className="month">{monthNames[date.getMonth()]}</span>
                  <span className="year">{date.getFullYear()}</span>
                </div>

                <div className="post-content ml-0">

                  <h2 className="font-weight-bold">
                    <Link to={postUrl}>
                      {metadata.title}
                    </Link>
                  </h2>

                  <div className="post-meta">
                    <span>
                      <i className="far fa-user"/>
                      <a href="#">{metadata.author}</a>
                    </span>
                    <span>
                      <i className="far fa-folder"/>
                      {metadata.tags.map((tag, i) => <>{i > 0 && ", "}<span
                        className="text-color-primary">{tag}</span></>)}
                    </span>
                    <span className="d-block d-sm-inline-block float-sm-right mt-3 mt-sm-0">
                    </span>
                  </div>

                  <div className="post mt-5">
                    <ReactMarkdown source={markdown}
                                   renderers={{
                                     table: ({children}) => {
                                       return <table
                                         className="table table-striped table-hover">{children}</table>
                                     },
                                     link: ({href, children}) => {
                                       return <a href={href} target="_blank"
                                                 rel="noopener noreferrer">{children}</a>
                                     }
                                   }}/>
                  </div>

                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <RowNewWay/>
      <RowWhoWeAre/>
    </>
  )
}


export default BlogPost
