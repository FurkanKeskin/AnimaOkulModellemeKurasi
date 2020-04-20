import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import logo from './AnimaOkul.png';
import './App.css';
import Kavram from './Components/Kavram';
import Obje from './Components/Obje';
import Tarz from './Components/Tarz';


const App = (props) => {

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Obje></Obje>
      <Kavram></Kavram>
      <Tarz></Tarz>
      </header>
    </div>
  );
}


export default App;
