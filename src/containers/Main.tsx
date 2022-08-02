import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

import Home from './Home';
import TodaysRec from './main/todaysrec/TodaysRec';
import Cake from './Cake';
import MoreItem from './MoreItem';
import CustomerService from './CS';

const Main = () =>{
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/TodaysRec" component={TodaysRec} />
            <Route exact path="/Cake" component={Cake} />
            <Route exact path="/MoreItem" component={MoreItem} />
            <Route exact path="/CS" component={CustomerService} />
        </>
    )
}

export default Main;