import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sensorData: {} }
  }

  componentDidMount() {
    setInterval(
      async () => {
        // TODO: set url in config
        const result = await fetch('http://localhost:60000/', { mode: 'cors' })
        const sensorData = await result.json()
        this.setState({ sensorData })
      },
      // TODO: set timeout in config
      1000
    );
  }

  render() {
    return (
      <div className="App">
        <p>C:\&gt;<nobr className="blink_me">_</nobr></p>
        <p>{this.state.sensorData["0"] && this.state.sensorData["0"]["Value0"]}</p>
      </div>
    );
  }
}

export default App
