import React, { Component } from 'react';

export default class NavBar extends Component {

  render() {
    return (
      <div className="nav">
        <a className="active" href="home">Profile</a>
        <a href="appointments">Appointments</a>
        <a className="logout" href="logout">Logout</a>
      </div>
    )
  }
}
