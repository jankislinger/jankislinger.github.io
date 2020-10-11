import React from "react"
import {PageHeaderCommon} from "../pageHeader"
import {PATH_COURSE_REGISTRATION, TITLE} from "../constants";
import {Link} from "react-router-dom";


export function CoursesPublic() {
  document.title = `Veřejné kurzy | ${TITLE}`

  return (
    <div role="main" className="main">
      <PageHeaderCommon/>

      <SectionPublicIntro/>
      <SectionPublicDates/>
      <SectionCoursesOverview/>

    </div>
  )
}

function SectionPublicIntro() {
  return (
    <section className="section bg-color-white m-0 border-0">
      <div className="container">
        <div className="row pb-4 mt-2">
          <div className="col">
            <h1>
              Veřejné kurzy
            </h1>

            <p className="text-4">
              Ve spolupráci s organizací Minervo přinášíme dostupné kurzy, které pomáhají. Připravili jsme několik sérií
              seminářů zaměřených na datovou analýzu, machine learning a vizualizaci v jazyce R.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionPublicDates() {
  const mailTitle = `Přihláška do kurzu: Úvod do datové analýzy a vizualizace`
  const mailBody = `Dobrý den,%0d%0dtímto emailem se nezávazně registruji na uvedený kurz a prosím o podrobnější informace.%0d%0dS pozdravem,`
  const hideMobile = "d-none d-md-inline-block"

  return (
    <section className="section bg-color-grey-scale-1 m-0 border-0 text-warning">
      <div className="container">
        <div className="row pb-4 mt-2">
          <div className="col">
            <h2>
              Aktuálně vypsané termíny
            </h2>

            <table className="table table-striped table-hover text-4">
              <thead>
              <th>Kurz</th>
              <th>Termín</th>
              <th className="d-none d-md-table-cell">Místo</th>
              <th className="d-none d-lg-table-cell">Délka</th>
              <th>Cena</th>
              <th>Přihláška</th>
              </thead>
              <tbody>
              {activeCourses.map(course => {
                return (
                  <tr>
                    <td>{course.title}</td>
                    <td>{course.date.toLocaleDateString("cs-CZ")}</td>
                    <td className="d-none d-md-table-cell">{course.location}</td>
                    <td className="d-none d-lg-table-cell">{course.duration}</td>
                    <td>{course.price}</td>
                    <td className="pl-4">
                      <Link
                        to={`${PATH_COURSE_REGISTRATION}/${course.date.toISOString().substring(0, 10)}/${course.key}`}>
                        <i className="fas fa-sign-in-alt text-4"/>
                      </Link>
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}


function SectionCoursesOverview() {
  return (
    <section className="section bg-color-white m-0 border-0">
      <div className="container">
        <div className="row pb-4 mt-2">
          <div className="col">
            <div className="row">
              <div className="col">
                <h4>Úvod do datové analýzy a vizualizace</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="text-4">
                  Není vyžadována žádná znalost R. Vhodné i pro pokročilejší uživatele R bez znalosti knihovny
                  tidyverse.
                  Délka kurzu: <em>8-12 hodin</em>.
                </p>

                <p className="text-4">
                  <ul>
                    <li>Základy práce s R a RStudiem</li>
                    <li>Průvodce procesem “load-process-vizualize” pomocí knihovny <em>tidyverse</em></li>
                    <li>Načítání dat z nejběžnějších zdrojů - Excel, csv</li>
                    <li>Základní funkce z knihovny <em>dplyr</em> pro zpracování dat</li>
                    <li>Vizualizace dat pomocí knihovny <em>ggplot2</em></li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h4>Pokročilá datová analýza a vizualizace</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">

                <p className="text-4">
                  Kurz volně navazuje na úvod do datové analýzy a vizualizace. Je vyžadována základní znalost R a
                  knihovny
                  tidyverse. Délka kurzu: <em>6-8 hodin</em>.
                </p>

                <p className="text-4">
                  <ul>
                    <li>Pokročilé funkce z knihoven <em>dplyr</em> a <em>tidyr</em> pro zpracování dat</li>
                    <li>Funkcionální programování s knihovnou <em>purrr</em></li>
                    <li>Načítání dat z dalších zdrojů - SQL, web scraping, …</li>
                    <li>Pokročilé nástroje vizualizace pomocí <em>ggplot2</em></li>
                    <li>Tvorba automatických reportů do PDF a Word</li>
                  </ul>
                </p>
              </div>
            </div>


            <div className="row">
              <div className="col">
                <h4>Úvod do machine learningu</h4>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="text-4">
                  Je vyžadována alespoň základní znalost jazyka R. Není potřeba znalost statistiky ani vysokoškolské
                  matematiky. Délka kurzu: <em>8-10 hodin</em>.
                </p>

                <p className="text-4">
                  <ul>
                    <li>Přehled nejpoužívanějších algortmů a jejich aplikace</li>
                    <li>Praktické příklady na reálných datech</li>
                    <li>Stromové algoritmy, regresní algoritmy, clustering, …</li>
                    <li>Neuronové sítě pomocí knihoven Tensorflow a Keras</li>
                    <li>Metody validace modelů strojového učení</li>
                    <li>Trénovací, testovací a validační data, cross-validace</li>
                    <li>Problémy <em>overfittingu</em> a <em>underfittingu</em></li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const activeCourses = [
  {
    title: "Úvod do datové analýzy a vizualizace",
    key: "uvod-do-datove-analyzy-a-vizualizace",
    date: new Date("2020-11-23"),
    location: "Praha",
    duration: "8 hodin",
    price: "2400 Kč",
  },
  {
    title: "Úvod do machine learningu",
    key: "uvod-do-machine-learningu",
    date: new Date("2020-12-08"),
    location: "Praha",
    duration: "8 hodin",
    price: "2800 Kč",
  },
  {
    title: "Úvod do datové analýzy a vizualizace",
    key: "uvod-do-datove-analyzy-a-vizualizace",
    date: new Date("2021-01-25"),
    location: "Praha",
    duration: "8 hodin",
    price: "2400 Kč",
  },
  {
    title: "Pokročilá datová analýza a vizualizace",
    key: "pokrocila-datova-analyza-a-vizualizace",
    date: new Date("2021-01-26"),
    location: "Praha",
    duration: "8 hodin",
    price: "2600 Kč",
  },
]

