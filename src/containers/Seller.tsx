import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '../../src/styles/seller/Seller.scss';
import '../styles/seller/AllSeller.scss';

import SellerSection from '../components/seller/SellerSection';
import SellerOrder from '../containers/seller/SellerOrder';
import SalesHistory from '../containers/seller/SalesHistory';
import ProductManagement from '../containers/seller/ProductManagement';
import SellerReview from '../containers/seller/SellerReview';
import SellerStore from '../components/seller/SellerStore';

import FullCalendarApp from './seller/FullCalendarApp';
import MPRDetail from './detail/SPMDetail';

const Seller = () =>{
    const [pathname, setPathname] = useState("");
    useEffect(()=>{
        var pathname = window.location.pathname;
        if (pathname == "/") pathname = "/Home";
        pathname = pathname.split("/")[1];
        setPathname(pathname);
    },[]);
    
    return(
        <div className="seller-flex ">
            <div className="seller">
                <>
                    <SellerSection/>
                    <Route exact path="/SSOCalendar" component={FullCalendarApp} />
                    <Route exact path="/SSHCalendar" component={FullCalendarApp} />
                    <Route exact path="/SellerOrder" component={SellerOrder} />
                    <Route exact path="/Saleshistory" component={SalesHistory}/>
                    <Route exact path="/ProductManagement" component={ProductManagement}/>
                    <Route exact path="/ProductManagement/:id" component={MPRDetail}/>
                    <Route exact path="/SellerReview" component={SellerReview} />
                    <Route exact path="/SellerStore" component={SellerStore} />
                </> 
            </div>
        </div>
    )
}


export default Seller;