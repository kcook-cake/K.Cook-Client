import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../../styles/mypage/ProductReview.scss';

import MPRMCard from '../../../components/mypage/card/MPRMCard';

function ProductReviewMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mp-top product-review mprm mypage-mobile">
            <div className="mprm-box">
                <div className="title">상품후기</div>
                <div className="content">
                    <MPRMCard getData={data}/>
                </div>
            </div>
        </div>
        
    )
}


export default ProductReviewMobile;