import React from "react"
import {HeaderNav} from '../Nav'
import {Link} from "react-router-dom"

function HeaderLogo() {
  return (
    <div className="header-column">
      <div className="header-row">
        <div className="header-logo">
          <Link to="/">
            <img alt="Porto" width="100" height="48" data-sticky-width="82" data-sticky-height="40" src="/img/logo.png"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
      <div className="header-body">
        <div className="header-container container">
          <div className="header-row">
            <HeaderLogo/>
            <HeaderNav/>
          </div>
        </div>
      </div>
    </header>
  )
}


