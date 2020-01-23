import React from "react"
import { Link } from "react-router-dom"

import { TimelineMax, Circ } from "gsap/all"
import "gsap/CSSPlugin"

class HeroSugg extends React.Component {
  componentDidMount() {
    console.log("test")
  }

  render() {
    return (
      <section className="hero">
        <article className="hero-text">
          <h1>
            <div className="word-container">
              <span>Unique&nbsp;</span>
            </div>

            <div className="word-container">
              <span>Value&nbsp;</span>
            </div>

            <div className="word-container">
              <span>Proposition&nbsp;</span>
            </div>
          </h1>
          <h4>
            Reason why we are better than all the others but a little longer
          </h4>
        </article>
        <div className="hero-CTAs">
          <Link className="hero-CTA hero-CTA--primary" to="/">
            Get in contact
          </Link>
          <Link className="hero-CTA hero-CTA--secondary" to="/">
            Learn more
          </Link>
        </div>
        <div className="hero-image"></div>
      </section>
    )
  }
}

export default HeroSugg
