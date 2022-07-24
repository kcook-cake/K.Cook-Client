import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../../styles/mypage/ProductReview.scss';
import '../../../styles/mypage/Membership.scss';

import MMMCard from '../card/MMMCard';

function MembershipMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mp-top mmm mypage-mobile">
            <div className="mmm-box mprm-box">
                <div className="title">
                    적립금
                    <div className="mmm-title-right">
                        <div style={{ paddingTop: "5px" }}>합계:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div style={{ fontSize: "16px", }}>2,000원</div>
                    </div>
                </div>
                <div className="content">
                    <MMMCard getData={data} box={true}/>
                </div>
            </div>
        </div>
                
        
    )
   
}


export default MembershipMobile;