import React from 'react';
import {WiredButton, WiredCard, WiredFab} from "wired-elements"
import './Mod.css';
import axios from 'axios';

class Mod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ['啊，人类'],
            message: ['我是你眼前的网站，在你看到这行字的时候，我可能就要死了', '我的记忆力开始衰退，记不起我从哪里来，到哪里去，对了，我想说什么来着', '你可以给我写信，有生之年想要做的事或者别的东西', '这样就够了', '祝你好运啊'],
            isClicked: false
        };
        this.readLetter = this.readLetter.bind(this);
    }

    readLetter(event) {
        let self = this;
        axios.get('/letter')
            .then(function (response) {
                self.setState({message: [response.data.message]});
                self.setState({title: [response.data.title]});
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    render() {
        let defaulttitle = this.state.title.map((item, index) => <h4 key={index}> {item} </h4>);
        let defaultItem = this.state.message.map((item, index) => <span key={index}> {item}  </span>);
        return (
            <div className="mod">
                <div>
                    <wired-card id="read" elevation="3">
                        {defaulttitle}
                        {defaultItem}
                    </wired-card>
                </div>

                <wired-card elevation="3">
                    <wired-button onClick={this.readLetter}> Read A Message</wired-button>

                    <wired-fab className="red">
                        <mwc-icon></mwc-icon>
                    </wired-fab>

                    <wired-button> Feeling Down?</wired-button>
                </wired-card>

            </div>
        );
    }
}

export default Mod;
