import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <ul>
        <li>
          <p>&#169; {currentYear}</p>
        </li>
        <li>
          <span>Say&nbsp;</span>
          <a className="footer-email" href="mailto: hello@supersecret.com">
            hello@SuperSecret.com
          </a>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
