import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

import Home from './home/Home';
import TodaysRec from './todaysrec/TodaysRec';
import Cake from './cake/Cake';
import Store from './store/Store';
import CustomerService from './cs/CS';

const Main = () =>{
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/TodaysRec" component={TodaysRec} />
            <Route exact path="/Cake" component={Cake} />
            <Route exact path="/Store" component={Store} />
            <Route exact path="/CS" component={CustomerService} />
        </>
    )
}

export default Main;