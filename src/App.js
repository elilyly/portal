import React, { Component } from 'react';
import NavBar from './NavBar'
import Profile from './Profile'
import { BrowserRouter as  Switch, Route } from 'react-router-dom';

var data = [
  {
    "id": 695,
    "patient_id": 16,
    "physician_id": 14,
    "patient_name": "Mike Ross",
    "physician_name": "Jennifer Collins"
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div>
        <NavBar  />
        <Profile />

      </div>
    )
  }
}

export default App;
