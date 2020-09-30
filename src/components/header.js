import React from "react"
import {Link, useRouteMatch} from "react-router-dom"


export function Header() {
  return (
    <header id="header" className="header-effect-shrink"
            data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
      <div className="header-body">
        <div className="header-container container">
          <div className="header-row">
            {/*<HeaderLogo/>*/}
            <HeaderNav/>
          </div>
        </div>
      </div>
    </header>
  )
}

function HeaderLogo() {
  return (
    <div className="header-column">
      <div className="header-row">
        <div className="header-logo">
          {/*TODO change to Link to="/"*/}
          <a href="https://portotheme.com/html/porto/8.0.0/" target="_blank" rel="noreferrer noopener">
            <img alt="Porto" width="100" height="48" data-sticky-width="82" data-sticky-height="40"
                 src={`${process.env.PUBLIC_URL}/img/logo.png`}/>
          </a>
        </div>
      </div>
    </div>
  )
}

function HeaderNav() {
  return (
    <div className="header-column justify-content-end">
      <div className="header-row">
        <div className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border order-2 order-lg-1">
          <div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
            {/*<div className="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">*/}
            {/*  <div className="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-font-md header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">*/}
            <nav className="collapse">
              <ul className="nav nav-pills" id="mainNav">

                <NavLink exactMatch={true} to="/">
                  Úvod
                </NavLink>

                <NavLink to="/firemni-skoleni">
                  Firemní školení
                </NavLink>

                <NavLink to="/skolni-kurzy">
                  Školní kurzy
                </NavLink>

                <NavLink to="/kurzy-pro-verejnost">
                  Kurzy pro veřejnost
                </NavLink>

                <NavLink to="/individualni-kurzy">
                  Individuální
                </NavLink>

                <NavLink to="/blog">
                  Blog
                </NavLink>


              </ul>
            </nav>
          </div>
          <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
            <i className="fas fa-bars"/>
          </button>
        </div>
      </div>
    </div>
  )
}

function NavLink({to, children, exactMatch}) {
  const active = useRouteMatch({path: to, exact: !!exactMatch})
  return (
    <li className="nav-item" data-toggle="collapse" data-target=".header-nav-main nav">
      <Link className={`dropdown-item ${active ? "active" : ""}`} to={to}>
        {children}
      </Link>
    </li>
  )
}
