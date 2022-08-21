import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LengthwiseCard from '../main/LengthwiseCard';
import '../../../src/styles/main/PickCard.scss'
// import '../../../src/styles/main/MainRecommend.scss'
// import '../../../src/styles/TodaysRec.scss'
// import '../../../src/styles/Cake.scss'
import getAxios from 'src/utils/getAxios';

function PickCard (){
    const [recommendTodays, setRecommenTdodays] = useState([]);
    //0페이지부터 시작한다
    const [recommendPageTodays, setRecommendPageTodays] = useState(0);
    const [recommendLengthTodays, setRecommendLengthTodays] = useState(0);

    useEffect(()=>{
        getAxios(setRecommenTdodays, setRecommendLengthTodays, "cakes", [], 6, recommendPageTodays, 0);
    },[]);

    return(
        <>
            <div className="mobile pick-card">
                <div className="title-card">케이쿡 추천 Pick</div>
                <div className="contents-card">
                    <LengthwiseCard getData={recommendTodays} link="KCOOK"/>
                </div>
            </div>
        </>
    )
}



export default PickCard;



