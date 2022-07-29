import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MMS_MC_MobileCard from '../card/mobile/MMS_MC_MobileCard';

function CouponsMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);

    return(
        <div className="mc-mobile ms-all-mypage">
            <div className="mcm-box ms-all-box">
                <div className="title">
                    쿠폰
                    <div className="mcm-title-right">
                        <button className="mcm-title-button">등록하기</button>
                    </div>
                </div>
                <div className="content">
                    <MMS_MC_MobileCard getData={data} box={false}/>
                </div>
            </div>
        </div>
            
    
    )
}


export default CouponsMobile;