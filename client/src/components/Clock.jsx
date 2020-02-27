import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class Clock extends React.Component {
    constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <Wrapper>
        <h1>Hello, Jacob 'Ruby' Pochron</h1>
        <h3>The Enrichment Center reminds you the time is currently {this.state.date.toLocaleTimeString('en-GB')}. Have a nice day!</h3>
      </Wrapper>
    );
  }
}

export default Clock
