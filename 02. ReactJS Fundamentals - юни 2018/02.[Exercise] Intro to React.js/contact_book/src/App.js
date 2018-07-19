import React, { Component } from 'react'
import './App.css'
import Contacts from './Components/Contacts'
import ContactDetails from './Components/ContactDetails'
import ContactsData from './contacts.json'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedId: null,
      selected: null
    }

    this.selectedDetails = this.selectedDetails.bind(this)
    this.getContactDetails = this.getContactDetails.bind(this)
  }

  selectedDetails (id) {
    let selected = this.getContactDetails(id)

    this.setState({
      selectedId: id,
      selected: selected
    })
  }

  getContactDetails (id) {
    return ContactsData[id]
  }

  render () {
    return (
      <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
          <div id="list">
            <h1>Contacts</h1>
            <div className="content">
              <Contacts selectedDetails={this.selectedDetails} />
            </div>
          </div>
          <div id="details">
            <h1>Details</h1>
            {this.state.selected
              ? (<ContactDetails {...this.state.selected}/>)
              : (<h2>No selected contact</h2>)
            }
          </div>
        </div>
        <footer>Contact Book SPA &copy; 2017</footer>
      </div>
    )
  }
}

export default App
