import React from 'react';
import { WiredButton, WiredCard, WiredFab } from "wired-elements"
import './Mod.css';

function Mod() {
  return (
    <div class="mod">
      <wired-card elevation="3">
        <wired-button> Read A Message </wired-button>

        <wired-fab class="red">
          <mwc-icon></mwc-icon>
        </wired-fab>

        <wired-button> Feeling Down? </wired-button>
      </wired-card>

    </div>

  );
}

export default Mod;
