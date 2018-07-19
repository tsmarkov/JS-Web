import React, {Component} from 'react'
import ContactsData from '../contacts.json'
import Contact from './Contact'

class Contacts extends Component {
  constructor (props) {
    super(props)
    this.select = this.select.bind(this)
  }

  select (index) {
    let newIndex = index
    this.props.selectedDetails(newIndex)
  }

  loadContacts () {
    let con = []

    let index = 0
    for (const contact of ContactsData) {
      con.push(<Contact {...contact} key={index} index={index} onClick={this.select}/>)
      index++
    }

    // console.log(con)
    return con
  }

  render () {
    return (
      <div>
        {this.loadContacts()}
      </div>
    )
  }
}

export default Contacts
