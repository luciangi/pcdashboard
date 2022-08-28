import React from "react"
import Dashboard from "../Dashboard/Dashboard.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }

  componentDidMount() {
    setInterval(
      async () => {
        // TODO: set url in config
        const result = await fetch("http://localhost:60000/", { mode: "cors" })
        const data = await result.json()
        this.setState({ data })
      },
      // TODO: set timeout in config
      1000
    )
  }

  //TODO: add error boundry
  render() {
    console.log(this.state.data)
    if (this.state.data && Object.keys(this.state.data).length === 0) {
      return <div className="no-data">No data!</div>
    }

    return <Dashboard data={this.state.data} />
  }
}

export default App
