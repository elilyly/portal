import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//the NavBar contains the links to each menu item

export default class NavBar extends Component {

  render() {
    return (
      <div className="nav">
        <Link to='/profile'>Profile</Link>
        <Link to='/appointments'>Appointments</Link>
        <Link to='/' className="logout">Logout</Link>
      </div>
    )
  }
}
