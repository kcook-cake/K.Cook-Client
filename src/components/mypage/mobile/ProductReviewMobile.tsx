import React, { useState, useEffect } from 'react';
import axios from "axios";

import MPR_MobileCard from '../card/mobile/MPR_MobileCard';

interface Props {
    getData: any,
}

function ProductReviewMobile ({getData}:Props){

    return(
        <div className="mpr-mobile ms-all-mypage">
            <div className="ms-all-box">
                <div className="title">
                    <div className="mmo-mobile-front-title">상품후기</div>
                    <div className="seller-mypage-middle-title">후기를 작성하고 포인트를 받으세요.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <MPR_MobileCard getData={getData}/>
                </div>
            </div>
        </div>
        
    )
}


export default ProductReviewMobile;