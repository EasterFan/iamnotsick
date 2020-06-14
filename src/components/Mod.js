import React from 'react';
import { WiredButton, WiredCard, WiredFab } from "wired-elements"
import './Mod.css';
import  axios from 'axios';

class Mod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      isClicked: false
    };
    this.readLetter = this.readLetter.bind(this);
  }

readLetter(event){

let self = this;
axios.get('/letter')
  .then(function (response) {
    self.setState({message:response.data.message});
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });

}

  render() {
    return (
      <div className="mod">
        <wired-card id="read" elevation="3">
          {this.state.message}
        </wired-card>

        <wired-card elevation="3">
          <wired-button onClick={this.readLetter}> Read A Message </wired-button>

          <wired-fab className="red">
            <mwc-icon></mwc-icon>
          </wired-fab>

          <wired-button> Feeling Down? </wired-button>
        </wired-card>

      </div>
    );
  }
}

export default Mod;
