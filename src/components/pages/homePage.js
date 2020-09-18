import React from "react"

export function HomePage() {
  const path = "/"
  const title = "Home"
  const breadcrumbs = [
    {href: null, text: title},
  ]

  return (
    <div role="main" className="main">
      <HeaderParallax/>

      <SectionIntroduction/>
      <SectionTypesTutoring/>
      <SectionJesteNevimCoToBude/>
      <SectionLibraries/>
      <SectionDivnyKosticky/>

    </div>
  )
}

function HeaderParallax() {
  return (
    <section className="page-header page-header-modern page-header-background page-header-background-md parallax overlay overlay-color-dark overlay-show overlay-op-4 mt-0 mb-5"
             data-plugin-parallax="true"
             data-plugin-options="{'speed': 1.2}"
             data-image-src="img/slides/slide-corporate-16-1.jpg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align-self-center p-static order-2 text-center">
            <h1></h1>
          </div>
          <div className="col-md-12 align-self-center order-1">
            <ul className="breadcrumb breadcrumb-light d-block text-center">
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntroduction() {
  return (
    <div className="container py-3 my-5">
      <div className="row justify-content-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400">
        <div className="col">
          <h2 className="text-10 font-weight-normal text-color-dark mb-4 line-height-4">
            <span className="text-color-primary font-weight-bold ">Porto </span>lorem
            ipsum dolor sit amet, consectetur adipiscing elit nunc ut finibus
            erat, a fringilla purus.</h2>
          <p className="text-5 font-weight-normal text-color-dark line-height-7">Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut finibus
            erat, a fringilla purus. Aliquam consectetur, lorem vitae rhoncus
            mattis, libero velit hendrerit massa, eu finibus sem eros a odio. </p>

          <div className="row justify-content-center">
            <div className="col-md-2 col-lg-1 text-center mb-3 mb-md-0 mt-md-2 mt-lg-1 px-1 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="600">
              <img alt="" src="img/logo-red.png" className="img-fluid"/>
            </div>
            <div className="col-md-10 col-lg-11 d-flex align-items-center justify-content-center justify-content-lg-start line-height-9">
              <p className="opacity-9 pl-lg-2 pr-lg-4 mb-0">Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc ut finibus erat, a
                fringilla purus. Aliquam consectetur, lorem vitae rhoncus mattis,
                libero velit hendrerit massa, eu finibus sem eros a odio. Nunc
                posuere dolor id sapien congue, et pretium augue rhoncus. Praesent
                vulputate vehicula est, ut lobortis metus euismod placerat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


function SectionTypesTutoring() {
  return (
    <section className="section section-height-3 bg-light border border-bottom-0 m-0" style={{
      backgroundImage: "url(img/patterns/tiling.png)",
      backgroundRepeat: "repeat"
    }}>
      {/*<section className="section section-height-3 bg-light border border-bottom-0 m-0">*/}
      <div className="container">
        <div className="row featured-boxes featured-boxes-style-4">

          <SectionTypesTutoringElement
            title="Firemní školení"
            text="Vzděláváním zaměstnanců pomáháte sobě i jim. Naučím Vaše lidi pracovat efektivněji."
            icon="city"
            data-appear-animation="fadeInLeftShorter"
            data-appear-animation-delay="200"
          />

          <SectionTypesTutoringElement
            title="Školní kurzy"
            text="Umět zpracovávat data potřebuje každý student - nejen pro diplomovou práci."
            icon="graduation-cap"
            data-appear-animation="fadeIn"
          />

          <SectionTypesTutoringElement
            title="Kurzy pro veřejnost"
            text="Pravidelně pořádané kurzy, které Vám pomohou se odrazit, pokud nevíte, jak dál."
            icon="chalkboard-teacher"
            data-appear-animation="fadeIn"
          />

          <SectionTypesTutoringElement
            title="Individuální"
            text="Ať už máte konkrétní problém, nebo se jen chcete zdokonalit. Jsem tu pro Vás."
            icon="laptop-code"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay="200"
          />

        </div>
      </div>
    </section>
  )
}

function SectionTypesTutoringElement({title, text, icon, ...args}) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="featured-box featured-box-primary featured-box-effect-4 appear-animation" {...args}>
        <div className="box-content px-4">
          {/*<i className={`icon-featured icon-${icon} icons text-12`}/>*/}
          <i className={`fas fa-${icon} text-12 text-color-primary`}/>
          <h4 className="font-weight-bold text-color-dark pb-1 mb-2">
            {title}
          </h4>
          <p className="mb-0">
            {text}
          </p>
        </div>
      </div>
    </div>

  )
}

function SectionJesteNevimCoToBude() {
  return (
    <section className="parallax section section-text-light section-parallax section-center overlay overlay-show overlay-op-8 my-0" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/parallax/parallax-corporate-16.jpg">
      <div className="container my-5 py-5">
        <div className="row justify-content-center text-center">
          <div className="col-8 px-0">
            <h4 className="text-9 font-weight-bold mb-4">Lessons for successful
              project delivery</h4>
            <p className="mb-5 line-height-9">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras volutpat id sapien ac varius.
              Fusce hendrerit ligula a consectetur ullamcorper. Vestibulum varius
              pharetra lorem.</p>

            <a className="btn btn-light-2 btn-outline font-weight-semibold px-4 btn-py-2 text-2">LEARN
              ABOUT US<i className="fas fa-arrow-right ml-2 pl-3 text-3"/></a>
          </div>
        </div>
      </div>
    </section>

  )
}


function SectionLibraries() {
  return (
    <div className="container">
      <div className="row py-5 my-5">
        <div className="col">

          <div className="owl-carousel owl-theme mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 7}}, 'autoplay': true, 'autoplayTimeout': 3000, 'dots': false}">
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-1.png" alt=""/>
            </div>
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-2.png" alt=""/>
            </div>
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-3.png" alt=""/>
            </div>
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-4.png" alt=""/>
            </div>
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-5.png" alt=""/>
            </div>
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-6.png" alt=""/>
            </div>
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-4.png" alt=""/>
            </div>
            <div>
              <img className="img-fluid opacity-2" src="img/logos/logo-2.png" alt=""/>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

function SectionDivnyKosticky() {
  return (
    <section className="section section-background-half-primary-half-secondary section-no-border my-0">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row text-center">
              <div className="col-md-4">
                <div className="card bg-color-light border-0 py-3">
                  <div className="card-body px-5 py-5">
                    <h4 className="font-weight-semibold text-5 line-height-3 ls-0 mb-3">
                      <a href="#" className="text-dark text-decoration-none">Lorem
                        ipsum dolor sit amet, consectetur</a></h4>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed eget risus porta...</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="img/team/team-1.jpg" className="img-fluid rounded-circle mr-2" width="25" alt=""/>
                      <strong className="text-color-dark text-2">by John
                        Doe</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-color-light border-0 py-3">
                  <div className="card-body px-5 py-5">
                    <h4 className="font-weight-semibold text-5 line-height-3 ls-0 mb-3">
                      <a href="#" className="text-dark text-decoration-none">Lorem
                        ipsum dolor sit amet, consectetur</a></h4>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed eget risus porta...</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="img/team/team-2.jpg" className="img-fluid rounded-circle mr-2" width="25" alt=""/>
                      <strong className="text-color-dark text-2">by Jessica
                        Doe</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-color-light border-0 py-3">
                  <div className="card-body px-5 py-5">
                    <h4 className="font-weight-semibold text-5 line-height-3 ls-0 mb-3">
                      <a href="#" className="text-dark text-decoration-none">Lorem
                        ipsum dolor sit amet, consectetur</a></h4>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed eget risus porta...</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="img/team/team-4.jpg" className="img-fluid rounded-circle mr-2" width="25" alt=""/>
                      <strong className="text-color-dark text-2">by Jennifer
                        Doe</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
