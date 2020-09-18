import React from "react"
import {Link} from "react-router-dom"

function DropdownItem({href, text}) {
  return (
    <li>
      <a className="dropdown-item" href={href}>
        {text}
      </a>
    </li>
  )
}

function DropDownSubmenu({text, children, hot = false}) {
  return (
    <li className="dropdown-submenu">
      <a className="dropdown-item" href="#">
        {text}
        {hot ? <span className="tip tip-dark">hot</span> : ''}
      </a>
      <DropdownMenu>
        {children}
      </DropdownMenu>
    </li>
  )
}

function DropdownMenu({children}) {
  return (
    <ul className="dropdown-menu">
      {children}
    </ul>
  )
}

function Dropdown({href, text, children}) {
  return (
    <li className="dropdown">
      <a className="dropdown-item dropdown-toggle" href={href}>
        {text}
      </a>
      <DropdownMenu>
        {children}
      </DropdownMenu>
    </li>
  )
}

function DropdownHome() {
  return (
    <Dropdown href="index.html" text="Home">
      <DropdownItem href="index.html" text="Landing Page"/>
      <DropDownSubmenu text="Classic">
        <DropdownItem href="index-classic.html" text="Classic - Original"/>
        <DropdownItem href="index-classic-color.html" text="Classic - Color"/>
      </DropDownSubmenu>
      {/*<DropDownSubmenu text={["Corporate ", <span className="tip tip-dark">hot</span>]}>*/}
      <DropDownSubmenu text="Corporate" hot={true}>
        <>
          <DropdownItem href="index-corporate.html" text="Corporate - Version 1"/>
          <DropdownItem href="index-corporate-2.html" text="Corporate - Version 2"/>
        </>
      </DropDownSubmenu>
    </Dropdown>
  )
}

function SearchDropdown({show}) {
  const searchAction = "page-search-results.html"
  let className = "header-nav-features-dropdown"
  if (show) {
    className = className + " show"
  }

  return (
    <div className={className} id="headerTopSearchDropdown">
      <form role="search" action={searchAction} method="get">
        <div className="simple-search input-group">
          <input className="form-control text-1" id="headerSearch" name="q" type="search" defaultValue="" placeholder="Search..."/>
          <span className="input-group-append">
            <button className="btn" type="submit">
              <i className="fa fa-search header-nav-top-icon"/>
            </button>
          </span>
        </div>
      </form>
    </div>
  )
}

function Search() {
  const [show, setShow] = React.useState(false)

  return (
    <div className="header-nav-features header-nav-features-no-border header-nav-features-lg-show-border order-1 order-lg-2">
      <div className="header-nav-feature header-nav-features-search d-inline-flex">
        <span className="header-nav-features-toggle" data-focus="headerSearch" onClick={() => setShow(!show)}>
          <i className="fas fa-search header-nav-top-icon"/>
        </span>
        <SearchDropdown show={show}/>
      </div>
    </div>
  )
}

function NavLink({to, children}) {
  return (
    <li className="nav-item">
      <Link className="dropdown-item" to={to}>
        {children}
      </Link>
    </li>
  )
}

export function HeaderNav() {
  return (
    <div className="header-column justify-content-end">
      <div className="header-row">
        <div className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border order-2 order-lg-1">
          <div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
            {/*<div className="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">*/}
            {/*  <div className="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-font-md header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">*/}
            <nav className="collapse">
              <ul className="nav nav-pills" id="mainNav">

                <NavLink to="/">
                  Úvod
                </NavLink>

                <NavLink to="/blog">
                  Pro firmy
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
