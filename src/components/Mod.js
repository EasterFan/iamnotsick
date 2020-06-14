import React from 'react';
import { WiredButton, WiredCard, WiredFab } from "wired-elements"
import './Mod.css';

function Mod() {
  return (
    <div className="mod">
      <wired-card elevation="3">
        <wired-button> Read A Message </wired-button>

        <wired-fab className="red">
          <mwc-icon></mwc-icon>
        </wired-fab>

        <wired-button> Feeling Down? </wired-button>
      </wired-card>

    </div>

  );
}

export default Mod;
