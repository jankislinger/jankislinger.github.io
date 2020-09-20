import React from "react"

const animationSpeed = 80

export function Companies() {
  return (
    <div role="main" className="main">
      <HeaderParallax/>

      <SectionCompanyIntro/>
      <SectionServicesBase/>
      <SectionServicesAdvanced/>

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

function SectionCompanyIntro() {
  return (
    <section className="section bg-color-white m-0 border-0">
      <div className="container">
        <div className="row pb-4 mt-2">
          <h1>Firemní školení</h1>
          <p className="text-4">
            Obsah školení je možné sestavit přesně podle Vašich potřeb s ohledem na zkušenosti a znalosti účastníků.
            Kurz je možné libovolně poskládat z nabízených témat podle potřeb. Školení je možné uskutčnit praktickou
            formou (do 10 osob), nebo formou prezentace. Pro více informací a cenovou nabídku mě prosím kontaktujte.
          </p>
        </div>
      </div>
    </section>
  )
}

function SectionServicesBase() {
  return (
    <section className="section bg-color-grey-scale-2 m-0 border-0">
      <div className="container">
        <h2 className="font-weight-normal text-7">
          Základní <strong>Témata</strong>
        </h2>
        <div className="row pb-4 mt-2">
          <Service
            title="Datová analýza"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={1}
          />
          <Service
            title="Vizualizace"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={2}
          />
          <Service
            title="Načítání dat"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={4}
          />
        </div>
        <div className="row pb-4 mt-2">
          <Service
            title="Úprava a čištění dat"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={8}
          />
          <Service
            title="Statistika"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={6}
          />
          <Service
            title="Machine Learning"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={4}
          />
        </div>
      </div>
    </section>
  )
}

function SectionServicesAdvanced() {
  return (
    <section className="section bg-color-white m-0 border-0">
      <div className="container">
        <h2 className="font-weight-normal text-7">
          Pokročilá <strong>Témata</strong>
        </h2>

        <div className="row pb-4 mt-2">
          <Service
            title="Propojení s SQL"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={8}
          />
          <Service
            title="Práce s textem"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={10}
          />
          <Service
            title="Neuronové sítě"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={12}
          />
        </div>
        <div className="row pb-4 mt-2">
          <Service
            title="Shiny"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={16}
          />
          <Service
            title="Automatizované reporty"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={14}
          />
          <Service
            title="Web scraping"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={12}
          />
        </div>
        <div className="row pb-4 mt-2">
          <Service
            title="Obecné programování"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={16}
          />
          <Service
            title="Verzovací systémy"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={18}
          />
          <Service
            title="Tvorba knihoven"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla."
            delayGroup={20}
          />
        </div>
      </div>
    </section>
  )
}

function Service({title, text, delayGroup}) {
  const animationDelay = delayGroup * animationSpeed
  return (
    <div className="col-lg-4 appear-animation animated fadeInRightShorter appear-animation-visible"
         data-appear-animation="fadeInRightShorter"
         data-appear-animation-delay={`${animationDelay}`}
         style={{animationDelay: `${animationDelay}ms`}}>
      <div className="feature-box feature-box-style-2">
        <div className="feature-box-icon">
          <i className="icons icon-support text-color-primary"/>
        </div>
        <div className="feature-box-info">
          <h4 className="font-weight-bold mb-2">{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>

  )
}
