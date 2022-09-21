import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import 'src/styles/seller/Seller.scss';
import 'src/styles/seller/AllSeller.scss';
import SellerSection from '../../components/seller/SellerSection';
import SellerStore from '../../components/seller/sss/SellerStore';

import SPMDetail from '../detail/SPMDetail';
import KCOOKProductManagement from './kpm/KCOOKProductManagement';
import KCOOKSection from 'src/components/kcook/KCOOKSection';
import KCOOKSellerStore from 'src/components/kcook/kss/KCOOKSellerStore';
import KCOOKDetail from '../detail/KCOOKDetail';

interface Props {
    session: any,
    auth: any,
}

const KCOOK = ({ session, auth, }: Props) =>{
    useEffect(()=>{
    },[]);
    
    return(
        <div className="seller-flex ">
            <div className="seller">
                <>
                    <KCOOKSection/>
                    <Route exact path="/KCOOKProductManagement/:id" component={KCOOKDetail}/>
                    <Route exact path="/KCOOKProductManagement" component={KCOOKProductManagement}/>
                    <Route exact path="/KCOOKSellerStore" component={()=>KCOOKSellerStore(session, auth)} />
                </> 
            </div>
        </div>
    )
}


export default KCOOK;