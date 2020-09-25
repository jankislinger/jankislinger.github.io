import React from "react"
import {headerClass, rowClass, sectionClass, Topic} from "./sectionsTopics"
import {PageHeaderCommon} from "../pageHeader"
import {TITLE} from "../constants";


export function CoursesCompanies() {
  document.title = `Firemní školení | ${TITLE}`

  return (
    <div role="main" className="main">
      <PageHeaderCommon/>

      <SectionCompanyIntro/>
      <SectionTopicsBase/>
      <SectionTopicsAdvanced/>

    </div>
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

function SectionTopicsBase() {
  return (
    <section className={sectionClass("grey-scale-2")}>
      <div className="container">
        <h2 className={headerClass}>
          Základní <strong>Témata</strong>
        </h2>
        <div className={rowClass}>
          <Topic
            title="Datová analýza"
            text="Porozumět datům a pochopit jejich obsah. Skupinové průměry na dva řádky kódu, složitější statistiky nejsou problém."
            icon="fas fa-table"
            delayGroup={1}
          />
          <Topic
            title="Vizualizace"
            text="Knihovna ggplot2 jako nástroj pro tvotbu grafů všech možných typů. Dokonce i interaktivní či animované."
            icon="fas fa-chart-bar"
            delayGroup={2}
          />
          <Topic
            title="Načítání dat"
            text="Od Excelu, Google sheets a csv, přes SQL, až po specifické datové formáty (například data z SPSS)."
            icon="far fa-file-excel"
            delayGroup={4}
          />
          <Topic
            title="Úprava a čištění dat"
            text="Jedna z nejdůležitějších a nejobsáhlejších částí práce s daty. Transoformace dat do použitelné podoby."
            icon="fas fa-filter"
            delayGroup={8}
          />
          <Topic
            title="Statistika"
            text="Principy statistického testování, přehled běžně používaných testůs příklady, regresní a podobné modely."
            icon="fas fa-chart-area"
            delayGroup={6}
          />
          <Topic
            title="Machine Learning"
            text="Prediktivní a klasifikační modely obsažené v celé řadě různých algoritmů. Bez složité matematiky."
            icon="fas fa-cogs"
            delayGroup={4}
          />
        </div>
      </div>
    </section>
  )
}

function SectionTopicsAdvanced() {
  return (
    <section className={sectionClass("white")}>
      <div className="container">
        <h2 className={headerClass}>
          Pokročilá <strong>Témata</strong>
        </h2>

        <div className={rowClass}>
          <Topic
            title="Propojení s SQL"
            text="SQL nabízí mnohem více možností než samotné načítání a ukládání dat. Propojení s R je velmi efektivní."
            icon="fas fa-database"
            delayGroup={8}
          />
          <Topic
            title="Práce s textem"
            text="Včetně snadného spojování a rozdělování textových řetězců i získávání informací z textu a analýza sentimentu."
            icon="far fa-comment-dots"
            delayGroup={10}
          />
          <Topic
            title="Neuronové sítě"
            text="Speciální kapitola Machine Learningu, která v současnosti získává čím dál více pozornosti téměř ve všech odvětvích."
            icon="fas fa-project-diagram"
            delayGroup={12}
          />
          <Topic
            title="Shiny"
            text="Interaktivní dashboard jako webová aplikace se všemi funkcemi, které jazyk R se svými knihovnami nabízí."
            icon="fas fa-tachometer-alt"
            delayGroup={16}
          />
          <Topic
            title="Automatizované reporty"
            text="Automaticky vytvořené reporty včetně tabulek a (interaktivních) grafů s exportem výstupů do Wordu, PDF nebo webové stránky."
            icon="far fa-file-word"
            delayGroup={14}
          />
          <Topic
            title="Web scraping"
            text="Získávání dat automatickým procházením webových stránek. Ať už jsou data v tabulce, nebo nestrukturovaná."
            icon="fas fa-file-download"
            delayGroup={12}
          />
          <Topic
            title="Obecné programování"
            text="Cykly, funkce, podmínky a mnoho dalšího. To vše se hodí, pokud Vám nebudou stačit již existující knihovny."
            icon="fas fa-code"
            delayGroup={16}
          />
          <Topic
            title="Verzovací systém"
            text="Chytrý způsob ukládání a sdílení kódu a analýz mezi více spolupracovníky. Ukážeme si verzovací systém 'git'."
            icon="fas fa-code-branch"
            delayGroup={18}
          />
          <Topic
            title="Tvorba knihoven"
            text="Efektivní a jednoduchý způsob jak sdílet a používat vlastní funkce pro více projektů podobného typu."
            icon="far fa-file-code"
            delayGroup={20}
          />
        </div>
      </div>
    </section>
  )
}
