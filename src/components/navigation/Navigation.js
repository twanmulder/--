import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navigation() {
  const [isNavVisible, setNavState] = useState(false)

  const toggleNav = () => {
    setNavState(!isNavVisible)
  }

  return (
    <header>
      {/* MOBILE NAVIGATION */}
      <nav className=" navigation navigation--mobile">
        <a className="navigation-logo">
          <img src=""></img>
          LOGO
        </a>
        {/* HAMBURGER ICON */}
        <svg
          onClick={toggleNav}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 2.14193H0V0.996094H19V2.14193ZM19 8.57552H0V7.42969H19V8.57552ZM0 15.0013H19V13.8555H0V15.0013Z"
            fill="black"
          ></path>
        </svg>
        <ul
          className={
            isNavVisible
              ? " navigation-list navigation-list--open"
              : "navigation-list navigation-list--closed"
          }
        >
          <li className="navigation-item">
            <Link to="#services">Services</Link>
          </li>
          <li className="navigation-item">
            <Link to="#clients">Clients</Link>
          </li>
          <li className="navigation-item">
            <Link to="#careers">Careers</Link>
          </li>
          <li className="navigation-item">
            <Link to="#about">About</Link>
          </li>
          <li className="navigation-item navigation-item--highlight">
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* DESKTOP NAVIGATION */}
      <nav className=" navigation navigation--desktop">
        <a className="navigation-logo">
          <img src=""></img>
          LOGO
        </a>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="#services">Services</Link>
          </li>
          <li className="navigation-item">
            <Link to="#clients">Clients</Link>
          </li>
          <li className="navigation-item">
            <Link to="#careers">Careers</Link>
          </li>
          <li className="navigation-item">
            <Link to="#about">About</Link>
          </li>
          <li className="navigation-item navigation-item--highlight">
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
