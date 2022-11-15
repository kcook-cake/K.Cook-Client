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
import kcook from 'src/utils/kcook';

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
                    <Route exact path={kcook() + "/SSOCalendar"} component={()=>SSO_FullCalendar(session, auth)} />
                    <Route exact path={kcook() + "/SSHCalendar"} component={()=>SSH_FullCalendar (session, auth)} />
                    <Route exact path={kcook() + "/SellerOrder"} component={SellerOrder} />
                    <Route exact path={kcook() + "/SellerOrder/:date"} component={SellerOrder} />
                    <Route exact path={kcook() + "/Saleshistory"} component={SalesHistory}/>
                    <Route exact path={kcook() + "/Saleshistory/:date"} component={SalesHistory}/>
                    <Route exact path={kcook() + "/ProductManagement"} component={()=>ProductManagement(session, auth)}/>
                    <Route exact path={kcook() + "/ProductManagement/:id"} component={SPMDetail}/>
                    <Route exact path={kcook() + "/SellerReview"} component={SellerReview} />
                    <Route exact path={kcook() + "/SellerStore"} component={()=>SellerStore(session, auth)} />
                </> 
            </div>
        </div>
    )
}


export default Seller;