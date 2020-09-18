import React from "react"

export class PageHeader extends React.Component {

  renderBreadcrumbs() {
    return renderBreadcrumbs(this.props.breadcrumbs)
  }

  render() {
    return (
      <section className="page-header page-header-modern bg-color-light-scale-1 page-header-sm">
        <div className="container">
          <div className="row">

            <div className="col-md-8 align-self-center p-static order-2 order-md-1">
            </div>

            <div className="col-md-4 align-self-center order-1 order-md-2">

              <ul className="breadcrumb d-block text-md-right">
                <li><a href="#">Home</a></li>
                <li className="active">Features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export class _PageHeader extends React.Component {

  renderBreadcrumbs() {
    return renderBreadcrumbs(this.props.breadcrumbs)
  }

  render() {
    return (
      <div className="main" role="main">
        <section className="page-header page-header-classic page-header-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                <h1 data-title-border>{this.props.title}</h1>
              </div>
              <div className="col-md-4 order-1 order-md-2 align-self-center">
                <ul className="breadcrumb d-block text-md-right">
                  {this.renderBreadcrumbs()}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function renderBreadcrumbs(breadcrumbs) {
  return breadcrumbs.map((step, i) => {
    if (i < breadcrumbs.length - 1) {
      return (
        <li className="active" key={i}>
          <a href={step.href}>
            {step.text}
          </a>
        </li>
      )
    }
    return (
      <li key={i}>
        {step.text}
      </li>
    )
  })
}

export function HeaderWithForm() {
  return (
    <div className="slider-with-overlay">
      <div className="slider-container rev_slider_wrapper" style={{height: "670px"}}>
        <div id="revolutionSlider" className="slider rev_slider" data-version="5.4.8"
             data-plugin-revolution-slider="false"
             data-plugin-options="{'delay': 9000, 'gridwidth': 1170, 'gridheight': 670, 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,500], 'navigation' : {'arrows': { 'enable': false }, 'bullets': {'enable': true, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 70, 'h_offset': 0}}}">
          <img src="https://portotheme.com/html/porto/8.0.0/img/slides/slide-corporate-16-1.jpg"
               alt=""
               data-bgposition="center center"
               data-bgfit="cover"
               data-bgrepeat="no-repeat"
               className="rev-slidebg"
          />
        </div>
      </div>

      <div className="slider-contact-form">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="slider-contact-form-wrapper bg-primary rounded p-5 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="500">
                <div className="row">
                  <div className="col text-center">
                    <h2 className="font-weight-light text-color-light text-8 mb-2">
                      Školení jazyka <strong>R</strong></h2>
                    <p className="text-color-light opacity-7 font-weight-light mb-4 px-3 text-5">Enter
                      your personal info below and let’s start talking about your new
                      website or customized project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



