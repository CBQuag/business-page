import logo from './logo.svg';
import './App.css';
import WebData from './components/WebData';
import MainArea from './components/MainArea';


import { createContext, useContext, useEffect, useState } from 'react';

function App() {


  return (
    <WebData.Provider>
      <MainArea/>
    </WebData.Provider>
  );
}

export default App;
