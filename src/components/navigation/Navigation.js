import React from "react"
import { Link } from "react-router-dom"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showHideNav: "navigation-list--closed",
    }
  }

  toggleNav() {
    var css =
      this.state.showHideNav === "navigation-list--closed"
        ? "navigation-list--open"
        : "navigation-list--closed"
    this.setState({ showHideNav: css })
  }

  render() {
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
            onClick={this.toggleNav.bind(this)}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 2.14193H0V0.996094H19V2.14193ZM19 8.57552H0V7.42969H19V8.57552ZM0 15.0013H19V13.8555H0V15.0013Z"
              fill="black"
            ></path>
          </svg>
          <ul
            // className="navigation-list navigation-list--open"
            className={"navigation-list " + this.state.showHideNav}
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
}

export default Navigation
