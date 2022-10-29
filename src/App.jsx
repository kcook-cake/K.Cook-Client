import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import './styles/reset.scss';
// import { PC,Mobile } from './MediaQuery';
import axios from "axios";

import Pages from './containers/index';
import LandingPage from './containers/landing/LandingPage';
import Block from './containers/Block';
import isSession from './utils/isSession';

function App() {

  //Pages만 사용하면 지도가 보임
	return (
    <div id='main'>
      {/* <PC> */}
      {/* <LandingPage/> */}
      {/* {session?
        <Pages/>:
        <LandingPage/>
      } */}
      <Pages/>
      {/* </PC>
      <Mobile>
      </Mobile> */}
    </div>
  )
};




export default App;

