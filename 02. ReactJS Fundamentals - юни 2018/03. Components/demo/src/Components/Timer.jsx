import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)

    this.updateTime = this.updateTime.bind(this)
    this.state = {
      time: new Date(Date.now())
    }
  }

  updateTime () {
    this.setState({
      time: new Date()
    })
  }

  componentDidMount () {
    this.interval = setInterval(this.updateTime, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <h1>Time is: {this.state.time.toLocaleTimeString()}</h1>
    )
  }
}

export default Timer
