import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/dracula.css";
import LoginPage from './components/loginpage';
import Ide from './components/ide';
import HeadNavBar from './components/head-nav-bar';
import Participate from './components/participate'; 
import FootNavBar from './components/foot-nav-bar';
import Starter from './components/starter';
function App() {
  return (
    <>
      <>
        <>


    <HeadNavBar />
        </>
        <Starter/>
      </>
          <FootNavBar/>
          </>


  )
};
export default App;
