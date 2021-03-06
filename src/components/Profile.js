import React, { Component } from 'react';
import UpcomingAppts from './UpcomingAppts';
import { BrowserRouter as  Switch, Route } from 'react-router-dom';
//Profile Card contains the info for the patient, and it connects to the UpcomingAppts Component

export default class Profile extends Component {

  render() {
    return (
      <div className="container">
        <div className="profileCard">
          <h2>Welcome back, Kit Kat</h2>
          <img src="https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg"
          alt=""
          width="300"
          height="250"
        />
        {/* In the future, the profile image could be uploaded with Cloudinary */}
          <div className="container">
            <h1>Kit Kat</h1>
            <h3>Age: 32 </h3>
            <p className="info">CEO & Founder, Musicats</p>
            <p><button>Edit Profile</button></p>
          </div>
        </div>
        <UpcomingAppts />
      </div>
    )
  }
}
