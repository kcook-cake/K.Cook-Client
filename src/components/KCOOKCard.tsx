import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LengthwiseCard from '../components/LengthwiseCard';
import '../../src/styles/main/MainRecommend.scss'
import '../../src/styles/TodaysRec.scss'
import '../../src/styles/Cake.scss'
import WidthwiseCard from '../components/WidthwiseCard';
import SectionTitle from 'src/components/SectionTitle';

import axios from "axios";

import LinkClick from '../utils/LinkClick';

import allow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';
import EventCard from 'src/components/EventCard';
import getAxios from 'src/utils/getAxios';

function KCOOKCard (){
    const [recommendTodays, setRecommenTdodays] = useState([]);

    //0페이지부터 시작한다
    const [recommendPageTodays, setRecommendPageTodays] = useState(0);

    const [recommendLengthTodays, setRecommendLengthTodays] = useState(0);

    useEffect(()=>{
        getAxios(setRecommenTdodays, setRecommendLengthTodays, "cakes", [], 6, recommendPageTodays, 0);
    },[]);

    return(
        <>
            <div className="mobile main-cake-flex sort-by-rec" style={{ marginBottom: "23px", }}>
                <div className="title">케이쿡 추천 Pick</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={recommendTodays} link="KCOOK"/>
                </div>
            </div>
        </>
    )
}



export default KCOOKCard;



