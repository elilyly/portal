import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import { BrowserRouter as  Switch, Route } from 'react-router-dom';

// var data = [
//   {
//     "id": 695,
//     "patient_id": 16,
//     "physician_id": 14,
//     "patient_name": "Mike Ross",
//     "physician_name": "Jennifer Collins"
//   }
// ]

//I think that if I had some extra time, I would be able to incorporate the JSON data, and I would've added a state for it

class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     data: data
  //   }
  // }

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
