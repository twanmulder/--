import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <a>
            <img src=""></img>
            LOGO
          </a>
          <ul>
            <li>
              <Link to="#services">Services</Link>
            </li>
            <li>
              <Link to="#clients">Clients</Link>
            </li>
            <li>
              <Link to="#careers">Careers</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navigation;
