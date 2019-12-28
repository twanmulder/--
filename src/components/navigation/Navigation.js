import React from "react"
import { Link } from "react-router-dom"

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <nav>
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
