import {RowNewWay, RowWhoWeAre} from "../AboutUs"
import React, {useEffect, useState} from "react"
import ReactMarkdown from "react-markdown"
import {Link, useParams} from "react-router-dom"
import {PageHeader} from "../PageHeader"
import {API_URL, monthNames} from "../constants"


function BlogPost() {

  let {postKey} = useParams()
  const postUrl = `/blog/${postKey}`

  const [metadata, setMetadata] = useState(null);
  const [markdown, setMarkdown] = useState(null);


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
                {/*<div className="post-image ml-0 text-center">*/}
                {/*  <a href="blog-post.html">*/}
                {/*    <img src={`${API_URL}/post/${postKey}/images/${metadata.imageUrl}`} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt=""/>*/}
                {/*  </a>*/}
                {/*</div>*/}

                {/*<div className="post-date ml-0">*/}
                {/*  <span className="day">10</span>*/}
                {/*  <span className="month">Jan</span>*/}
                {/*</div>*/}

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

                  {/*<div className="post-meta">*/}
                  {/*  <span><i className="far fa-user"/> By <a href="#">John Doe</a> </span>*/}
                  {/*  <span><i className="far fa-folder"/> <a href="#">Lifestyle</a>, <a href="#">Design</a> </span>*/}
                  {/*  <span><i className="far fa-comments"/> <a href="#">12 Comments</a></span>*/}
                  {/*</div>*/}

                  <div className="post-meta">
                    <span>
                      <i className="far fa-user"/>
                      By <a href="#">{metadata.author}</a>
                    </span>
                    <span>
                      <i className="far fa-folder"/>
                      {metadata.tags.map((tag, i) => <>{i > 0 && ", "}<a href="#">{tag}</a></>)}
                    </span>
                    <span><i className="far fa-comments"/>
                      <a href="#">{metadata.numComments} Comments
                    </a></span>
                    <span className="d-block d-sm-inline-block float-sm-right mt-3 mt-sm-0">
                    </span>
                  </div>


                  <ReactMarkdown source={markdown}/>


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
