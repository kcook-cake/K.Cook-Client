import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

import Home from './home/Home';
import TodaysRec from './TodaysRec';
import Cake from './Cake';
import Store from './Store';
import CustomerService from './CS';

interface Props {
    session: any,
    auth: any,
}

const Main = ({session, auth}: Props) =>{
    
    return(
        <>
            <Route exact path="/" component={()=>Home(session, auth)} />
            <Route exact path="/TodaysRec" component={TodaysRec} />
            <Route exact path="/Cake" component={Cake} />
            <Route exact path="/Store" component={Store} />
            <Route exact path="/CS" component={CustomerService} />
        </>
    )
}

export default Main;