import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import 'src/styles/seller/Seller.scss';
import 'src/styles/seller/AllSeller.scss';

import SellerSection from '../../components/seller/SellerSection';
import SellerOrder from './SellerOrder';
import SalesHistory from './SalesHistory';
import ProductManagement from './ProductManagement';
import SellerReview from './SellerReview';
import SellerStore from '../../components/seller/SellerStore';

import FullCalendarApp from './FullCalendarApp';
import SPMDetail from '../detail/SPMDetail';

interface Props {
    session: any,
    auth: any,
}

const Seller = ({ session, auth, }: Props) =>{
    useEffect(()=>{
    },[]);
    
    return(
        <div className="seller-flex ">
            <div className="seller">
                <>
                    <SellerSection/>
                    <Route exact path="/SSOCalendar" component={()=>FullCalendarApp(session, auth)} />
                    <Route exact path="/SSHCalendar" component={()=>FullCalendarApp(session, auth)} />
                    <Route exact path="/SellerOrder" component={SellerOrder} />
                    <Route exact path="/Saleshistory" component={SalesHistory}/>
                    <Route exact path="/ProductManagement" component={ProductManagement}/>
                    <Route exact path="/ProductManagement/:id" component={SPMDetail}/>
                    <Route exact path="/SellerReview" component={SellerReview} />
                    <Route exact path="/SellerStore" component={()=>SellerStore(session, auth)} />
                </> 
            </div>
        </div>
    )
}


export default Seller;