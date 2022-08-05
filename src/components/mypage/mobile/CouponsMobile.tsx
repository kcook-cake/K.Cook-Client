import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MMS_MC_MobileCard from '../card/mobile/MMS_MC_MobileCard';

interface Props {
    getData: any,
}

function CouponsMobile ({getData}:Props){

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
                    <MMS_MC_MobileCard getData={getData} box={false}/>
                </div>
            </div>
        </div>
            
    
    )
}


export default CouponsMobile;