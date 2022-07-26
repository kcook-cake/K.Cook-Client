import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../../styles/seller/SellerReview.scss';
import '../../../styles/card/SSRMCard.scss';
import '../../../styles/card/SSOMCard.scss';

import cake6 from   '../../assets/cake6.png';
import SSRMCard from '../card/SSRMCard';

function SellerReviewMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mp-top ssrm mypage-mobile">
            <div className="ssrm-box mprm-box">
                <div className="title">
                    <div className="ssom-front-title">상품후기</div>
                    <div className="ssom-middle-title">고객분들이 남겨주신 후기입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SSRMCard getData={data} box={false}/>
                </div>
            </div>
        </div>
    )
}


export default SellerReviewMobile;