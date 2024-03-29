import React, { useState, useEffect} from 'react';
import 'src/styles/mypage/MMO_MPR.scss';

import cake6 from   'src/assets/cake6.png';
import getAxios from 'src/utils/getAxios';
import PickCard from 'src/components/main/common/PickCard';
import MMOCard from 'src/components/mypage/mmo-mpr/MMOCard';
import mypageLinkClick from 'src/utils/mypageLinkClick';
import LinkClick from 'src/utils/LinkClick';
import MMO_TestData from 'src/testdata/mypage/MMO_TestData';
import List2Option from 'src/utils/List2Option';

function MypageOrder (){
    let [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        LinkClick("MypageOrder");
        mypageLinkClick("MypageOrder");

        data = MMO_TestData();
        for (let i = 0; i < MMO_TestData().length; i++) {
            data[i].optionsList = List2Option(MMO_TestData()[i].optionsList);
        }
        setData(data);
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