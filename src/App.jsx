import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import './styles/reset.scss';
// import { PC,Mobile } from './MediaQuery';
import axios from "axios";

import Pages from './containers/index';
import LandingPage from './containers/LandingPage';

function App() {

	return (
    <div id='main'>
      {/* <PC> */}
      {/* <LandingPage/> */}
      <Pages/>
      {/* </PC>
      <Mobile>
      </Mobile> */}
    </div>
  )
};




export default App;

