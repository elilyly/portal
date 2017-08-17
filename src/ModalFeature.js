import React, { Component } from 'react';
import Modal, {closeStyle} from 'simple-react-modal'

export default class ModalFeature extends Component {
  constructor(){
    super()
    this.state = {}
  }
  show(){
    this.setState({show: true})
  }
  close(){
    this.setState({show:false})
  }

  render() {
    return (
      <div>
        <p onMouseOver={this.show.bind(this)}>Dr. Jennifer Collins, MD</p>
          <Modal
            closeOnOuterClick={true}
            show={this.state.show}
            onClose={this.close.bind(this)}
            transitionSpeed={1000}>
            <a style={closeStyle} onClick={this.close.bind(this)}>x</a>
            <div className="doctorCard"><img src="https://www.doctorinsta.com/images/medical.png" />
              <h3>Doctor Jennifer Collins, MD</h3>
              <p>Specialties<br></br> Asthma <br></br>  Allergy</p>
              <p>Education<br></br> Medical School - Virginia Commonwealth University, Doctor of Medicine <br></br>
                 Beth Israel Medical Center (Residency)<br></br>
                 Montefiore Medical Center (Fellowship)</p>
              <p>Professional Statement<br></br> It's my pleasure to provide comprehensive care in all areas of allergy and immunology for children and adults. I believe that listening carefully to the patient and working collaboratively with the patient’s primary doctor is the key to finding a successful treatment plan.</p>
              <p>Languages Spoken<br></br>
                English<br></br>
                Spanish</p>
            </div>
          </Modal>
      </div>

    )
  }
}
