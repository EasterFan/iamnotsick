import React from 'react';
import { WiredButton, WiredCard, WiredTextarea } from "wired-elements"
import './MyWord.css';

function MyWord() {
  return (
    <div class="myword flex">
          <div class="letter">
            <wired-textarea elevation="3" rows="6" value="亲爱的,&#13;"></wired-textarea>
          </div>

          <div class="send"><wired-button> Send Me </wired-button></div>
    </div>
  );
}

export default MyWord;
