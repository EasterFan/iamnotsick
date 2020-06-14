import React, {useState} from 'react';
// import { WiredButton, WiredCard } from "wired-elements";
import { WiredButton, WiredCard, WiredTextArea } from "react-wired";
import './MyWord.css';
import  axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

class MyWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "啊，我想：\n",
      isClicked: false
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.saveLetter = this.saveLetter.bind(this);
  }

  changeHandle(event) {
    this.setState({content: event.target.value});
  }

  saveLetter(event){
    let self = this;
    axios.post('/letter', {
      letter: this.state.content
    })
    .then(function (response) {
      console.log(self,"=======",this);
      self.setState({isClicked: true});
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="myword flex" style={{display: this.state.isClicked ? "none" : "block"}}>
            <div className="letter">
              <WiredTextArea className="wired-textarea" levation="3" rows="6" value={this.state.content} onChange={this.changeHandle}/>
            </div>

            <div className="send"><wired-button onClick={this.saveLetter}> Send Me </wired-button></div>
      </div>
    );
  }
}


export default MyWord;
