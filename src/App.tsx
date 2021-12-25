import React, { Component } from 'react';
import { PC,Mobile } from './MediaQuery';
import Pages from './containers/index';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import './styles/reset.scss';


function App() {

	return (
    <div>
      <PC>
        <Pages/>
      </PC>
      <Mobile>
      </Mobile>
    </div>
  )};




export default App;

