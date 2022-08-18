import React, { useState, useEffect} from 'react';
import '../../styles/mypage/MMO_MPR.scss';

import cake6 from   '../../assets/cake6.png';
import getAxios from 'src/utils/getAxios';
import LengthwiseCard from 'src/components/LengthwiseCard';
import PickCard from 'src/components/main/PickCard';
import MMOCard from 'src/components/mypage/card/MMOCard';

function MypageOrder (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
        <div className="seller-mypage-top-flex">
            <div className="ms-all-box">
                <div className="seller-mypage-top">
                    <div className="seller-mypage-front-title">주문내역</div>
                    <div className="seller-mypage-middle-title">이전에 주문하신 내역입니다</div>
                </div>
                <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="mypage-content mmo-content">
                    <MMOCard getData={data} />
                </div>
                <div className="mobile">
                    <PickCard />
                </div>
            </div>
        </div>
        </>
    )
}


export default MypageOrder;