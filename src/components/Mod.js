import React from 'react';
import { WiredButton, WiredCard, WiredIconButton } from "wired-elements"
import './Mod.css';

function Mod() {
  return (
    <div class="mod">
      <wired-card>
        <wired-button> Read A Message </wired-button>

        <wired-icon-button class="red">
          <mwc-icon>favorite</mwc-icon>
        </wired-icon-button>

        <wired-button> Feeling Down? </wired-button>
      </wired-card>
      
    </div>

  );
}

export default Mod;
