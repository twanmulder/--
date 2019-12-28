import React from "react"

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="header">
          <div className="header-textwrapper">
            <div className="header-text">
              <h4>Featured Project</h4>
              <h1>Featured Project Title</h1>
              <a href="#exploremore">Explore more</a>
            </div>
          </div>
          <div className="header-image"></div>
        </section>
      </main>
    )
  }
}

export default Main
