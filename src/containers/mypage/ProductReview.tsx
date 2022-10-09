import React, { useState, useEffect } from 'react';
import '../../styles/mypage/MMO_MPR.scss';

import cake6 from   '../../assets/cake6.png';
import getAxios from 'src/utils/getAxios';
import MPRCard from 'src/components/mypage/mmo-mpr/MPRCard';
import LinkClick from 'src/utils/LinkClick';
import mypageLinkClick from 'src/utils/mypageLinkClick';
import MPR_TestData from 'src/testdata/mypage/MPR_TestData';

function ProductReview (){
    let [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        LinkClick("ProductReview");
        mypageLinkClick("ProductReview");

        data = MPR_TestData();
        setData(data);
    },[]);

    return(
        <>
        <div className="seller-mypage-top-flex">
            <div className="ms-all-box">
                <div className="seller-mypage-top">
                    <div className="seller-mypage-front-title">상품후기</div>
                    <div className="seller-mypage-middle-title">후기를 작성하고 포인트를 받으세요</div>
                </div>
                <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="mypage-content">
                    <MPRCard getData={data} />
                </div>
            </div>
        </div>
        </>
    )
}


export default ProductReview;