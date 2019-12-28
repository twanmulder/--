import React from "react"

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="hero">
          <div className="hero-textwrapper">
            <div className="hero-text">
              <h6>Featured Project</h6>
              <h1>Featured Project Title</h1>
              <a href="#exploremore">Explore more</a>
            </div>
          </div>
          <div className="hero-image"></div>
        </section>
      </main>
    )
  }
}

export default Main
