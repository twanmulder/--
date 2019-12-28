import React from "react"

import Navigation from "../navigation/Navigation"
import Main from "../main/Main"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Main></Main>
      </React.Fragment>
    )
  }
}

export default App
