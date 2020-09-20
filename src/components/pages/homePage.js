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
    <section
      className="page-header page-header-modern page-header-background page-header-background-md parallax overlay overlay-color-dark overlay-show overlay-op-4 mt-0 mb-5"
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
      <div className="row justify-content-center appear-animation" data-appear-animation="fadeInUpShorter"
           data-appear-animation-delay="400">
        <div className="col">
          <h2 className="text-10 font-weight-normal text-color-dark mb-4 line-height-4">
            <span className="text-color-primary font-weight-bold ">
              Jan Kislinger </span>
            Profesionální kurzy datové analýzy, machine learningu a vizualizace v jazyce R.
          </h2>
          <p className="text-5 font-weight-normal text-color-dark line-height-7">
            Vyučuji jazyk R a jeho aplikace v <i>data science</i>. Kurzy jsou určené pro studenty, kteří chtejí začít s
            datovou
            analytikou, i pro profesionály, kteří si chtějí rozšířit své možnosti o další nástroj. Učím zejména moderní
            metody jazyka R pomocí tidyverse, čímž jsou mé kurzy unikátní.
          </p>

          <div className="row justify-content-center">
            <div
              className="col-md-2 col-lg-1 text-center mb-3 mb-md-0 mt-md-2 mt-lg-1 px-1 appear-animation"
              data-appear-animation="fadeIn" data-appear-animation-delay="600">
              <img alt="" src="https://tidyverse.tidyverse.org/logo.png" className="img-fluid"/>
            </div>
            <div
              className="col-md-10 col-lg-11 d-flex align-items-center justify-content-center justify-content-lg-start line-height-9">
              <p className="opacity-9 pl-lg-2 pr-lg-4 mb-0">
                Tidyverse je soubor knihoven v R speciálně uzpůsobených pro práci s daty. Práce s daty je díky němu
                intuitivní a výsledný kód velmi snadno čitelný. Začátečník pomocí něj dokáže na pár řádcích kódu udělat
                takovou úpravu dat, která by v základním R vyžadovala zkušeného programátora.

                Mezi nejpoužívanější knihovny patří dplyr pro úpravu dat, ggplot2 pro vizualizaci a purrr pro
                funkcionální programování. Patří sem však i specifické balíky pro jednoduché načítání dat, práci s
                textem, nebo i stahování dat z webových stránek. Kompletní seznam knihoven naleznete na oficiálních
                stránkách tidyverse.
              </p>
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
    <section
      className="parallax section section-text-light section-parallax section-center overlay overlay-show overlay-op-8 my-0"
      data-plugin-parallax data-plugin-options="{'speed': 1.5}"
      data-image-src="img/parallax/parallax-corporate-16.jpg">
      <div className="container my-5 py-5">
        <div className="row justify-content-center text-center">
          <div className="col-8 px-0">
            <h4 className="text-9 font-weight-bold mb-4">
              Poznejte svého lektora
            </h4>
            <p className="mb-5 line-height-9">
              Vystudoval jsem statistiku a optimalizaci na Matematicko-fyzikální fakultě Univerzity Karlovy. Poté jsem
              pracoval jako data scientist na různých projektech. Denně Tak využívám nástroje jako R, Python, nebo SQL.
              Posledních 5 let se také věnuji výuce statistiky a jazyka R - jak individuálně, tak skupinově.
            </p>

            <a href="https://www.linkedin.com/in/jankislinger/" target="_blank"
               className="btn btn-light-2 btn-outline font-weight-semibold px-4 btn-py-2 text-2">
              Více informací
              <i className="fab fa-linkedin-in ml-2 pl-3 text-4"/>
            </a>
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

          <div className="owl-carousel owl-theme mb-0"
               data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 7}}, 'autoplay': true, 'autoplayTimeout': 3000, 'dots': false}">
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
                      <img src="img/team/team-1.jpg" className="img-fluid rounded-circle mr-2"
                           width="25" alt=""/>
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
                      <img src="img/team/team-2.jpg" className="img-fluid rounded-circle mr-2"
                           width="25" alt=""/>
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
                      <img src="img/team/team-4.jpg" className="img-fluid rounded-circle mr-2"
                           width="25" alt=""/>
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
