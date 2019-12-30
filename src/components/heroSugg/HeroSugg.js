import React from "react"
import { Link } from "react-router-dom"

function HeroSugg() {
  return (
    <section className="hero">
      <article className="hero-text">
        <h1>Unique Value Proposition</h1>
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

export default HeroSugg
