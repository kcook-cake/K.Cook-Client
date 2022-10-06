import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import 'src/styles/seller/Seller.scss';
import 'src/styles/seller/AllSeller.scss';

import SellerSection from '../../components/seller/SellerSection';
import SellerOrder from './SellerOrder';
import SalesHistory from './SalesHistory';
import ProductManagement from './ProductManagement';
import SellerReview from './SellerReview';
import SellerStore from '../../components/seller/sss/SellerStore';

import SPMDetail from '../detail/SPMDetail';
import SSO_FullCalendar from './SSO_FullCalendar';
import SSH_FullCalendar from './SSH_FullCalendar';

interface Props {
    session: boolean,
    auth: {
        accountId: number,
        address: string,
        dateOfBirth: string,
        email: string,
        nickname: string,
        phoneNumber: string,
    },
}

const Seller = ({ session, auth, }: Props) =>{
    useEffect(()=>{
    },[]);
    
    return(
        <div className="seller-flex ">
            <div className="seller">
                <>
                    <SellerSection/>
                    <Route exact path="/SSOCalendar" component={()=>SSO_FullCalendar(session, auth)} />
                    <Route exact path="/SSHCalendar" component={()=>SSH_FullCalendar (session, auth)} />
                    <Route exact path="/SellerOrder" component={SellerOrder} />
                    <Route exact path="/SellerOrder/:date" component={SellerOrder} />
                    <Route exact path="/Saleshistory" component={SalesHistory}/>
                    <Route exact path="/Saleshistory/:date" component={SalesHistory}/>
                    <Route exact path="/ProductManagement" component={()=>ProductManagement(session, auth)}/>
                    <Route exact path="/ProductManagement/:id" component={SPMDetail}/>
                    <Route exact path="/SellerReview" component={SellerReview} />
                    <Route exact path="/SellerStore" component={()=>SellerStore(session, auth)} />
                </> 
            </div>
        </div>
    )
}


export default Seller;