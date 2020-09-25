import React, {useEffect, useState} from "react"
import {PageHeader} from "../PageHeader"
import {Link} from "react-router-dom"
import {API_URL, monthNames, TITLE} from "../constants"

function BlogIndex() {
  const title = "Blog"
  const breadcrumbs = [
    {href: "/", text: "Home"},
    {href: null, text: title},
  ]

  const [state, setState] = useState({
    loading: true,
    posts: [],
  });
  document.title = `Blog | ${TITLE}`

  useEffect(() => {
    setState({loading: true, posts: []})
    fetch(`${API_URL}/posts.json`)
      .then(response => response.json())
      .then(data => setState({posts: data.posts, loading: false}))
  }, [setState])


  return (
    <>
      <PageHeader title={title} breadcrumbs={breadcrumbs}/>
      <div className="container py-4">
        <div className="row">
          <div className="col">
            <div className="blog-posts">
              {state.posts.map((post, i) =>
                <BlogPostPreview postData={post} key={{i}}/>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function BlogPostPreview({postData}) {

  const postUrl = "/blog/" + postData.key
  const date = new Date(postData.date)


  return (
    <article className="post post-large">
      <div className="post-image">
        <Link to={postUrl}>
          <img src={postData.imageUrl} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
               alt=""/>
        </Link>
      </div>

      <div className="post-date">
        <span className="day">{date.getDate()}</span>
        <span className="month">{monthNames[date.getMonth()]}</span>
        <span className="year">{date.getFullYear()}</span>
      </div>

      <div className="post-content">

        <h2 className="font-weight-semibold text-6 line-height-3 mb-3">
          <a href={postUrl}>
            {postData.title}
          </a>
        </h2>

        <p>
          {postData.blogChunk} [...]
        </p>

        <div className="post-meta">
          <span>
            <i className="far fa-user"/>
            <span className="text-color-primary">{postData.author}</span>
          </span>
          <span>
            <i className="far fa-folder"/>
            {postData.tags.map((tag, i) => <>{i > 0 && ", "}<span
              className="text-color-primary">{tag}</span></>)}
          </span>
          <span className="d-block d-sm-inline-block float-sm-right mt-3 mt-sm-0">
            <a href={postUrl} className="btn btn-xs btn-light text-1 text-uppercase">
              Celý článek
            </a>
          </span>
        </div>

      </div>
    </article>

  )
}

export default BlogIndex
