import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SSR_PcCard from '../card/pc/SSR_PcCard';

interface Props {
    getData: any,
}

function SellerReviewPC ({getData}:Props){
    return(
        <div className="seller-mypage-top-flex seller-review ssr-pc">
            <div className="seller-mypage-top">
                <h3>상품후기</h3>
                <span>고객분들이 남겨주신 후기입니다.</span>
            </div>
            <SSR_PcCard getData={getData} />
        </div>
    )
}


export default SellerReviewPC;