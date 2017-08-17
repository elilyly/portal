import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar  />
      <Profile />
      </div>
    );
  }
}

export default App;
