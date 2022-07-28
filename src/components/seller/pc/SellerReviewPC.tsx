import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SSR_PcCard from '../card/pc/SSR_PcCard';

function SellerReviewPC (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="seller-mypage-top-flex seller-review ssr-pc">
            <div className="seller-mypage-top">
                <h3>상품후기</h3>
                <span>고객분들이 남겨주신 후기입니다.</span>
            </div>
            <SSR_PcCard getData={data} />
        </div>
    )
}


export default SellerReviewPC;