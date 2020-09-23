import React from "react"
import {headerClass, rowClass, sectionClass, Topic} from "./sectionsTopics"
import {PageHeaderCommon} from "../pageHeader"


export function CoursesIndividual() {
  return (
    <div role="main" className="main">
      <PageHeaderCommon/>

      <SectionIndividualIntro/>
      <SectionTopicsSubjects/>
      <SectionTopicsThesis/>
    </div>
  )
}

function SectionIndividualIntro() {
  return (
    <section className="section bg-color-white m-0 border-0">
      <div className="container">
        <div className="row pb-4 mt-2">
          <h1>
            Individuální výuka
          </h1>
          <p className="text-4">
            Doučuji studenty pro přípravu na zkoušku z matematiky, statistiky nebo statistického jazyka R. Dále pomáhám
            se zpracováním a vyhodnocováním bakalářských a diplomových prací. Cena pro studenty je <strong>600 Kč /
            hodinu</strong>. Tato nabídka platí pouze pro studenty a v rozsahu kolem 10 hodin, což je typická doba pro
            práci s daty u jedné diplomové práce.
          </p>
        </div>
      </div>
    </section>
  )
}

function SectionTopicsSubjects() {
  return (
    <section className={sectionClass("grey-scale-2")}>
      <div className="container">
        <h2 className={headerClass}>
          Vyučované <strong>předměty</strong>
        </h2>
        <div className={rowClass}>
          <Topic
            title="Matematika"
            text="Matematická analýza (derivace, integrály) a maticová algebra vyučovaná na VŠE, ČZU a podobných vysokých školách."
            icon="fas fa-calculator"
            delayGroup={1}/>
          <Topic
            title="Statistika"
            text="Matematická pravděpodobnost (kombinatorika) a statistika (průměry, testy, regrese) na vysokoškolské úrovni."
            icon="fas fa-chart-area"
            delayGroup={2}/>
          <Topic
            title="Jazyk R"
            text="Úvodní kurzy programování a zpracování dat, typicky spojené se statistikou. Pomocí base i tidyverse způsobu."
            icon="fas fa-laptop-code"
            delayGroup={4}/>
        </div>
      </div>
    </section>
  )
}

function SectionTopicsThesis() {
  return (
    <section className={sectionClass("white")}>
      <div className="container">
        <h2 className={headerClass}>
          Pomoc s <strong>diplomovou prací</strong>
        </h2>
        <div className={rowClass}>
          <Topic
            title="Příprava výzkumu"
            text="Stanovení hypotéz, příprava dotazníku, výpočet minimálního počtu respondentů, návrhy experimentu a sběru dat."
            icon="fas fa-clipboard-list"
            delayGroup={8}/>
          <Topic
            title="Zpracování dat"
            text="Základní popisné statistiky, testování hypotéz, odhadování parametrů modelu (regrese, analýza přežití, ...)."
            icon="far fa-chart-bar"
            delayGroup={6}/>
          <Topic
            title="Interpretace výsledků"
            text="Výsledný report se slovně popsanými závěry, doplněné o graficky či tabulkově zobrazené výsledky analýz."
            icon="far fa-file-alt"
            delayGroup={4}/>
        </div>
      </div>
    </section>
  )
}
