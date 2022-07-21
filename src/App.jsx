import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import './styles/reset.scss';
// import { PC,Mobile } from './MediaQuery';

import Pages from './containers/index';

import axios from "axios";

import LandingPage from './containers/LandingPage';
import Header from './components/Header';
import isSession from './utils/isSession';

function App() {
  // useEffect(()=> {
  //   isSession((props)=>{
  //     if (props) Header()
  //   })
  // }, []);

  // function loginCallBack(login){
  //   setIsLogin(login);
  // }

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

