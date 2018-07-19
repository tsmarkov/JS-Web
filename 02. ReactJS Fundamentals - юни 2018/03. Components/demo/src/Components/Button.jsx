import React, {Component} from 'react'

class Button extends Component {
  constructor (props) {
    super(props)

    this.click = this.click.bind(this)
    this.state = {
      clicksCount: 0
    }
  }

  click () {
    this.setState((prevState) => ({
      clicksCount: prevState.clicksCount + 1
    }))

    console.log('in click')
    console.log(this.state.clicksCount)
  }

  render () {
    return (
      <div>
        <h1>Clicked {this.state.clicksCount} times</h1>
        <button onClick={this.click}>Click</button>
      </div>
    )
  }
}

export default Button
