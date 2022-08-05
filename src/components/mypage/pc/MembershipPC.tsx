import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MMS_PcCard from '../card/pc/MMS_PcCard';

interface Props {
    getData: any,
}

function MembershipPC ({getData}:Props){

    return(

        <div className="seller-mypage-top-flex mms-pc">
            <div className="seller-mypage-top">
                <h3>적립금</h3>
                <span>구매 및 후기 작성으로 현금처럼 쓸 수 있는 포인트를 받으세요</span>
                <div className="mms-pc-sum">합계 : 
                    <span className="mms-pc-point">11,600원</span>
                </div>
            </div>
            <div className="mms-pc-table">
                <div className="mms-pc-all mms-pc-head">
                    <div></div>
                    <div>상품명</div>
                    <div>판매자</div>
                    <div>날짜</div>
                    <div>가격</div>
                    <div>적립금</div>
                </div>

                <MMS_PcCard getData={getData} />
                {/* <div className="membership-data">

                </div>
                <div className="membership-data">

                </div>
                <div className="membership-data">

                </div> */}
            </div>

        </div>
                
        
    )
   
}


export default MembershipPC;