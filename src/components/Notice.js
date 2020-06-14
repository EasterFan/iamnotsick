import React from 'react';
import { WiredButton, WiredInput, WiredCard } from "wired-elements"
import './Notice.css';

function Notice() {
  return (
    <div className="notice">
      <wired-card elevation="4">
        <h4 className="title">啊！人类：</h4>
        <p>
        我是你眼前的网站，在你看到这行字的时候，我可能就要死了<br/>
        我的记忆力开始衰退，记不起我从哪里来，到哪里去，对了，我想说什么来着？<br/>
        你可以给我写信，有生之年想要做的事或者别的东西<br/>
        这样就够了<br/>
        祝你好运啊！<br/>
        </p>
      </wired-card>
    </div>
  );
}

export default Notice;
