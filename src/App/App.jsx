import React from "react"
import LoadingState from "./LoadingState/LoadingState"
import Layout from "./Layout/Layout"
import { getWinHwMetrics } from "./util"

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      lastUpdated: null,
      now: Date.now()
    }
  }

  componentDidMount() {
    const polling_rate = process.env.REACT_APP_WIN_HW_METRICS_POLLING_RATE_MS
    if (!polling_rate) {
      throw new Error(`REACT_APP_WIN_HW_METRICS_POLLING_RATE_MS is undefined! REACT_APP_WIN_HW_METRICS_POLLING_RATE_MS="${polling_rate}"`)
    }
    setInterval(
      async () => {
        try {
          this.setState((state) => ({ ...state, now: Date.now() }))

          if (this.state.now - this.state.lastUpdated > polling_rate) {
            const data = await getWinHwMetrics()
            if (!data && Object.keys(data).length === 0) {
              throw new Error(`WinHwMetrics data was empty! data=${data}`)
            }

            this.setState((state) => ({ ...state, data, lastUpdated: this.state.now }))
          }
        } catch (e) {
          this.setState(() => { throw new Error(`Something went wrong while trying to fetch getWinHwMetrics. ${e}`) })
        }
      },
      1000
    )
  }

  render() {
    if (this.state.lastUpdated === null) {
      return <LoadingState />
    }

    return <Layout data={this.state.data} now={this.state.now} />
  }
}

export default App
