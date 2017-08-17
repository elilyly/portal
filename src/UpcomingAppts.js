import React, { Component } from 'react';
import Modal, {closeStyle} from 'simple-react-modal'
import ModalFeature from './ModalFeature'

export default class UpcomingAppts extends Component {

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
          <td><a href="http://localhost:3000/appt">Follow-Up</a></td>
          <td>8/28/17</td>
          <td>10:30 am</td>
          <td><ModalFeature /></td>
          <td>205 E 22nd St, New York, NY 10010</td>
        </tr>

        <tr>
          <td>Follow-Up</td>
          <td>9/17/17</td>
          <td>10:00 am</td>
          <td><ModalFeature /></td>
          <td>205 E 22nd St, New York, NY 10010</td>
        </tr>
    </div>

    )
  }
}
