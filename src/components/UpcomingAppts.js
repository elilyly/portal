import React, { Component } from 'react'
import Appointments from './Appointments'
import ModalFeature from './ModalFeature'
import { Switch, Route, Link } from 'react-router-dom'

export default class UpcomingAppts extends Component {
//Created a table to show each Appointment

  render() {
    return (
      <div className="apptTable">
        <h2>Upcoming Appointments</h2>
        <tr>
          <th>Appointment</th>
          <th>Date</th>
          <th>Time</th>
          <th>Physician</th>
          <th>Location</th>
        </tr>
        <tr>
          <td><Appointments />View</td>
          <td>8/28/17</td>
          <td>10:30 am</td>
          <td><ModalFeature /></td>
          <td>205 E 22nd St, New York, NY 10010</td>
        </tr>
        <tr>
          <td><Appointments />View</td>
          <td>9/17/17</td>
          <td>10:00 am</td>
          <td><ModalFeature /></td>
          <td>205 E 22nd St, New York, NY 10010</td>
        </tr>
      </div>
    )
  }
}
