import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import MMS_MC_MobileCard from '../card/mobile/MMS_MC_MobileCard';

function MembershipMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mms-mobile ms-all-mypage">
            <div className="mms-mobile-box ms-all-box">
                <div className="title">
                    적립금
                    <div className="mms-mobile-title-right">
                        <div style={{ paddingTop: "5px" }}>합계:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div style={{ fontSize: "16px", }}>2,000원</div>
                    </div>
                </div>
                <div className="content">
                    <MMS_MC_MobileCard getData={data} box={true}/>
                </div>
            </div>
        </div>
                
        
    )
   
}


export default MembershipMobile;