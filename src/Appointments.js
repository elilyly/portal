import React, { Component } from 'react'
import SideNav, {MenuIcon} from 'react-simple-sidenav';

export default class Appointments extends Component {
  constructor(){
    super()
    this.state = {
      showNav: false
    }
  }

  render() {
    return (
      <div>
        <MenuIcon onClick={() => this.setState({showNav: true})}/>

        <SideNav
          showNav = {this.state.showNav}
          onHideNav = {() => this.setState({showNav: false})}
          title="Past Appointment Notes"
          items={['Last Appointment: 6/2/17', 'Symptoms: Allergy to dogs', 'Doctor Notes: Take medicine 2x a day']}
        />
      </div>
    )
  }
}
