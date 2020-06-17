import React, {useState} from 'react';
import { WiredButton, WiredCard, WiredTextArea } from "wired-elements";
import './MyWord.css';
import  axios from 'axios';


const localUrl = "http://localhost:8080";
const prodUrl = "http://123.207.114.30:8081";
let originUrl = window.location.href.split(":")[1];

axios.defaults.baseURL = originUrl !== "//localhost" ? prodUrl : localUrl;

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
    console.log(event.target.value);
    this.setState({content: event.target.value});
  }

  saveLetter(event){
    let self = this;
    axios.post('/letter', {
      letter: this.state.content
    })
    .then(function (response) {
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
              <wired-textarea levation="3" rows="6" value={this.state.content} onInput={this.changeHandle}/>
            </div>

            <div className="send"><wired-button onClick={this.saveLetter}> Send Me </wired-button></div>
      </div>
    );
  }
}


export default MyWord;
