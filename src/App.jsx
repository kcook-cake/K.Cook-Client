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
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({
      accountId: 0,
      address: '경기도 광명시 오리로994번길10, 파란대문집',
      dateOfBirth: '2001-10-19',
      email: 'yeju1019@gmail.com',
      nickname: 'yeju',
      phoneNumber: '010-2235-9031',
  });

  // let jwToken = undefined;
  // if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  // else jwToken = sessionStorage.jwToken;
  // useEffect(() => {
  //     isSession(
  //     jwToken,
  //     (s) => {
  //         if (s) setSession(s);
  //     },
  //     (a) => {
  //         setAuth(a);
  //     }
  //     );
  // }, [jwToken]);

  //Pages만 사용하면 지도가 보임
	return (
    <div id='main'>
      {/* <PC> */}
      {/* <LandingPage/> */}
      {session?
        <Pages session={session} auth={auth} />:
        <LandingPage setSession={setSession} />
      }
      {/* <Pages/> */}
      {/* </PC>
      <Mobile>
      </Mobile> */}
    </div>
  )
};




export default App;

