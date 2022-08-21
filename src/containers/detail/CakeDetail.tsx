import React, { useState, useEffect } from 'react';
import '../../styles/detail/StoreDetail.scss';

import DetailAd from "../../assets/detail-ad.png";
import TestImg from "../../assets/searchIcon.png";

import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';

const CakeDetail = () =>{
    const [height, setHeight] = useState(0);

    const [data, setData] = useState([]);
    //0페이지부터 시작한다
    const [pageTodays, setPageTodays] = useState(0);
    const [lengthTodays, setLengthTodays] = useState(0);
    useEffect(()=>{
        $(".hm-pc-flex").show();
        LinkClick("Cake");
        // if ($(".mypage-flex").height() != null) setHeight(Number($(".mypage-flex").height()));

        // getAxios(setData, setLengthTodays, "cakes", [], 8, pageTodays, 0);
    },[]);

    return(
        <>
        <div>CakeDetail</div>
        </>
    )
}


export default CakeDetail;