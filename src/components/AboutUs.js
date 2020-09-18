import React from "react"

export function RowNewWay() {
  return (
    <div className="container pb-1">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>The New Way to </span>
              <span className="word-rotator-words bg-primary">
										<b className="is-visible">Success</b>
										<b>Advance</b>
										<b>Progress</b>
									</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-10">
          <div className="overflow-hidden">
            <p className="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="250">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum
              pellentesque imperdiet. Nulla lacinia iaculis nulla
              non <span className="alternative-font">metus.</span> pulvinar. Sociis
              natoque
              penatibus et magnis dis parturient montes.
            </p>
          </div>
        </div>
        <div className="col-lg-2 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="450">
          <a href="#" className="btn btn-modern btn-primary mt-1">Join Our Team!</a>
        </div>
      </div>
    </div>
  )
}

export function RowWhoWeAre() {
  return (
    <section className="section section-default border-0 my-5 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="750">
      <div className="container py-4">

        <div className="row align-items-center">
          <div className="col-md-6 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="1000">
            <div className="owl-carousel owl-theme nav-inside mb-0" data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 6000, 'loop': true}">
              <div>
                <img alt="" className="img-fluid" src="img/generic/generic-corporate-3-2-full.jpg"/>
              </div>
              <div>
                <img alt="" className="img-fluid" src="img/generic/generic-corporate-3-3-full.jpg"/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="overflow-hidden mb-2">
              <h2 className="text-color-dark font-weight-normal text-5 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="1200">Who <strong className="font-weight-extra-bold">We
                Are</strong></h2>
            </div>
            <p className="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1400">Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam <a href="#">vehicula</a> sit amet enim ac sagittis. Curabitur eget
              leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus
              sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac
              laoreet libero.</p>
            <p className="mb-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1600">Consectetur
              adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget
              leo varius, elementum mauris eget, egestas quam.</p>
          </div>
        </div>

      </div>
    </section>

  )
}
