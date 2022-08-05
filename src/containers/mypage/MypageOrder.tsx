import React, { useState, useEffect} from 'react';
import '../../styles/mypage/MMO_MPR.scss';

import MypageOrderPc from 'src/components/mypage/pc/MypageOrderPc';
import MypageOrderMobile from 'src/components/mypage/mobile/MypageOrderMobile';

import cake6 from   '../../assets/cake6.png';
import getAxios from 'src/utils/getAxios';

function MypageOrder (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
            <MypageOrderPc getData={data}/>
            <MypageOrderMobile getData={data}/>
        </>
    )
}


export default MypageOrder;