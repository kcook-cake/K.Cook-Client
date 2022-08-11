import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import cake6 from   '../../assets/cake6.png';
import SSR_MobileCard from '../card/mobile/SSR_MobileCard';

interface Props {
    getData: any,
}

function SellerReviewMobile ({getData}:Props) {

    return(
        <div className="ssr-mobile">
            <div className="spm-ssr-mobile-box">
                <div className="title">
                    <div className="spm-ssr-mobile-title-front">상품후기</div>
                    <div className="seller-mypage-middle-title">고객분들이 남겨주신 후기입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SSR_MobileCard getData={getData} />
                </div>
            </div>
        </div>
    )
}


export default SellerReviewMobile;