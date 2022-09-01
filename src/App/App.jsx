import React from "react"
import LoadingState from "./LoadingState/LoadingState"
import Layout from "./Layout/Layout"
import { getWinHwMetrics } from "./util"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isLoading: true
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
          const data = await getWinHwMetrics()
          if (!data && Object.keys(data).length === 0) {
            throw new Error(`WinHwMetrics data was empty! data=${data}`)
          }

          this.setState({ data, isLoading: false })
        } catch (e) {
          this.setState(() => { throw new Error(`Something went wrong while trying to fetch getWinHwMetrics. ${e}`) })
        }
      },
      polling_rate
    )
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingState />
    }

    return <Layout data={this.state.data} />
  }
}

export default App
