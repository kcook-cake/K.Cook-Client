import React, { useState, useEffect } from 'react';
import MembershipMobile from 'src/components/mypage/mobile/MembershipMobile';
import MembershipPC from 'src/components/mypage/pc/MembershipPC';
import getAxios from 'src/utils/getAxios';
import '../../styles/mypage/Membership.scss';

function Membership (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <> 
            <MembershipPC getData={data}/>
            <MembershipMobile getData={data}/>
        </>
    )
   
}


export default Membership;