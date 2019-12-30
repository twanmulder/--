import React from "react"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-textwrapper">
        <div className="hero-text">
          <h6>Featured Project</h6>
          <h1>Featured Project Title</h1>
          <a href="#exploremore">Explore more</a>
        </div>
        <div className="hero-slider-controls">
          <div className="slider-timer"></div>
          <div className="slider-pagination"></div>
          <div className="slider-controls"></div>
        </div>
      </div>
      <div className="hero-image"></div>
    </section>
  )
}

export default Hero
