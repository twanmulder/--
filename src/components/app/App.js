import React from "react"

import Navigation from "../navigation/Navigation"
import Main from "../main/Main"
import Footer from "../footer/Footer"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Main></Main>
        <Footer></Footer>
      </React.Fragment>
    )
  }
}

export default App
