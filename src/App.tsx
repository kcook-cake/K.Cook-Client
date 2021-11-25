import React, { Component } from 'react';
import { PC,Mobile } from './MediaQuery';
import Pages from './containers/index';
import LandingPage from './containers/LandingPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import './styles/reset.scss';


function App() {

	return (
    <div>
        <LandingPage/>
      {/* <PC>
        <Pages/>
      </PC>
      <Mobile>
      </Mobile> */}
    </div>
  )};




export default App;

