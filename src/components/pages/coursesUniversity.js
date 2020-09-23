import React from "react"
import {PageHeaderCommon} from "../pageHeader"


export function CoursesUniversity() {
  return (
    <div role="main" className="main">
      <PageHeaderCommon/>

      <SectionUniversityIntro/>

    </div>
  )
}

function SectionUniversityIntro() {
  return (
    <section className="section bg-color-white m-0 border-0">
      <div className="container">
        <div className="row pb-4 mt-2">
          <div className="col">
            <h1>
              Školní kurzy
            </h1>

            <p className="text-4">
              Semestrální kurz zaměřený na data science dává studentům potřebné znalosti ve zpracování a analýze dat.
              Naučí se zkoumat, čistit, vizualizovat a analyzovat data reprodukovatelný způsobem pomocí jazyku R a
              knihovny tidyverse.
            </p>

            <p className="text-4">
              R je nejpoužívanější jazyk pro statistiku a je proto zařazen do výuky jako součást předmětu statistika na
              mnoha vysokých školách. V naprosté většině českých vysokých škol je však vyučován ve své základní formě a
              moderní přístupy knihovny tidyverse jsou tak opomíjeny. Právě tato knihovna stojí za rostoucí popularitou
              jazyka R v posledních letech.

            </p>

            <p className="text-4">
              Kurz svým obsahem vychází z předmětu STAT 545 na UBC - v současné době nejpopulárnější kurz zaměřený na
              data
              science. Zabývá se datovou analýzou, ovšem bez statistické inference. Ta se předpokládá, že je vyučvána v
              samostatném kurzu. Cílem tedy není nahrazovat stávající kurz statistiky, ale doplnit jej o praktickou část
              práce s daty. Absolvent je schopen samostatně zpracovat a analyzovat data, například pro účely diplomové
              práce.
            </p>
          </div>
        </div>
        <div className="row pb-4 mt-2">
          <div className="col">

            <h4>Syllabus</h4>

            <p className="text-4">
              Kurz je rozvržen na jeden semestr s jedním cvičením (90 minut) týdně. Podoba syllabu není finální a je
              možné
              ji upravit podle ostatních předmětů v programu.
            </p>

            <p className="text-4 col-12 px-0">
              <ul>
                <li><em>1. týden</em> - Úvod do R a Rstudia, RMarkdown</li>
                <li><em>2. týden</em> - Načítání dat, základní funkce pro datovou analýzu (dplyr)</li>
                <li><em>3. týden</em> - Základní funkce pro datovou analýzu (dplyr)</li>
                <li><em>4. týden</em> - Vizualizace dat (ggplot2)</li>
                <li><em>5. týden</em> - Vizualizace dat (ggplot2)</li>
                <li><em>6. týden</em> - Práce s textem (tidyr, stringr)</li>
                <li><em>7. týden</em> - Případová studie I</li>
                <li><em>8. týden</em> - Funkcionální programování (purrr)</li>
                <li><em>9. týden</em> - Pokročilé metody zpracování dat (dplyr, tidyr)</li>
                <li><em>10. týden</em> - Pokročilá vizualizace dat (ggplot2)</li>
                <li><em>11. týden</em> - Použití statistických metod</li>
                <li><em>12. týden</em> - Získávání dat z webu, verzovací systémy</li>
                <li><em>13. týden</em> - Případová studie II</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="row pb-4 mt-2">
          <div className="col-8">
            <h4>Zakončení kurzu</h4>

            <p className="text-4">
              Kurz je zakončen zápočtem. Ten je udělován na základě následujících částí:
            </p>

            <p className="text-4">
              <ul>
                <li>Závěrečný projekt (40 %)</li>
                <li>Domácí úlohy (40 %)</li>
                <li>Docházka (20 %)</li>
              </ul>
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}
