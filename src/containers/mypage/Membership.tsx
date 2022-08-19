import React, { useState, useEffect } from 'react';
import '../../styles/mypage/Membership.scss';

import getAxios from 'src/utils/getAxios';

import MMSCard from 'src/components/mypage/card/MMSCard';
import LinkClick from 'src/utils/LinkClick';
import mypageLinkClick from 'src/utils/mypageLinkClick';

function Membership (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        LinkClick("Membership");
        mypageLinkClick("Membership");
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <> 
        <div className="mmo seller-mypage-top-flex">
            <div className="ms-all-box">
                <div className="seller-mypage-top">
                    <div className="seller-mypage-front-title">적립금</div>
                    <div className="pc seller-mypage-middle-title">구매 및 후기 작성으로 현금처럼 쓸 수 있는 포인트를 받으세요</div>
                    <div className="mms-top-right">
                        합계&nbsp;:&nbsp;&nbsp; 
                        <span className="mms-top-price">11,600원</span>
                    </div>
                </div>
                <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="mms-table">
                    <div className="pc mms-table-all mms-table-head">
                        <div></div>
                        <div>상품명</div>
                        <div>판매자</div>
                        <div>날짜</div>
                        <div>가격</div>
                        <div>적립금</div>
                    </div>

                    <div className="mypage-content">
                        <MMSCard getData={data} />
                    </div>
                </div>

            </div>
        </div>
        </>
    )
   
}


export default Membership;