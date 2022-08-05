import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MC_PcCard from '../card/pc/MC_PcCard';

interface Props {
    getData: any,
}

function CouponsPC ({getData}:Props) {

    return(
        <div className="seller-mypage-top-flex mc-pc">
        <div className="seller-mypage-top mc-pc-top">
            <h3>내 쿠폰 : {getData.length}장</h3>
            <div className="mc-pc-code">
                <input placeholder="할인 쿠폰 번호를 입력하세요"></input>
                <button>등록하기</button>
            </div>
        </div>
        <div className="mc-pc-list">
            <MC_PcCard getData={getData} />
            
        </div>

        </div>
            
    
    )
}


export default CouponsPC;