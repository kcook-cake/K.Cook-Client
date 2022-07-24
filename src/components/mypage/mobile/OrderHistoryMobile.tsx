import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/mypage/OrderHistory.scss';
import '../../../styles/TodaysRec.scss'

import WidthwiseCard from 'src/components/WidthwiseCard';
import LengthwiseCard from 'src/components/LengthwiseCard';

import cake6 from   '../../assets/cake6.png';

function OrderHistoryMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mp-top mohm">
            <div className="sort-by-rec">
                <div className="title">주문내역</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={data}/>
                </div>
            </div>

            <div className="sort-by-rec" style={{ marginBottom: "23px", }}>
                <div className="title">케이쿡 추천 Pick</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={data}/>
                </div>
            </div>
        </div>
    )
}


export default OrderHistoryMobile;