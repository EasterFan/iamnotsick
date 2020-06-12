import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Notice from './components/Notice.js';
import Mod from './components/Mod.js';
import MyWord from './components/MyWord.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Notice></Notice>
      <Mod></Mod>
      <MyWord></MyWord>
      <Footer></Footer>
    </div>
  );
}

export default App;
