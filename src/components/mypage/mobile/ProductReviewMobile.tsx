import React, { useState, useEffect } from 'react';
import axios from "axios";

import MPR_MobileCard from '../card/mobile/MPR_MobileCard';

function ProductReviewMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="product-review mprm mypage-mobile">
            <div className="mprm-box">
                <div className="title">상품후기</div>
                <div className="content">
                    <MPR_MobileCard getData={data}/>
                </div>
            </div>
        </div>
        
    )
}


export default ProductReviewMobile;