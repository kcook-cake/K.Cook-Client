import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LengthwiseCard from '../components/LengthwiseCard';
import '../../src/styles/main/MainRecommend.scss'
import '../../src/styles/TodaysRec.scss'
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

function TodaysRec (){
    const [reviewTodays, setReviewTodays] = useState([]);
    const [recommendTodays, setRecommenTdodays] = useState([]);
    const [eventTodays, setEventTodays] = useState([]);

    //0페이지부터 시작한다
    const [reviewPageTodays, setReviewPageTodays] = useState(0);
    const [recommendPageTodays, setRecommendPageTodays] = useState(0);
    const [eventPageTodays, setEventPageTodays] = useState(0);

    const [reviewLengthTodays, setReviewLengthTodays] = useState(0);
    const [recommendLengthTodays, setRecommendLengthTodays] = useState(0);
    const [eventLengthTodays, setEventLengthTodays] = useState(0);

    useEffect(()=>{
        getAxios(setReviewTodays, setReviewLengthTodays, "cakes", [], 8, reviewPageTodays, 0);
        getAxios(setRecommenTdodays, setRecommendLengthTodays, "cakes", [], 6, recommendPageTodays, 0);
        getAxios(setEventTodays, setEventLengthTodays, "cakes", [], 3, 0, eventPageTodays);
    },[]);

    return(
        <div className="todays-recommend">
            <div className="sort-by-rec">
                <div className="title">리뷰 별점순</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={reviewTodays} link="Review"/>
                </div>
                <div className="pagination">
                    <Link to="/" className="arrow prev" href="#"> &lt;Prev</Link>
                    <Link to="/" href="#" className="pagi active">1</Link>
                    <Link to="/" href="#" className="pagi" >2</Link>
                    <Link to="/" href="#" className="pagi" >3</Link>
                    <Link to="/" className="arrow next" href="#">Next &gt;</Link>
                </div>
            </div>

            <div className="pc main-cake-flex">
                <div className="main-cake">
                    <div className="title">케이쿡 추천 Pick</div>
                    <div className="cake-contents">
                        <WidthwiseCard getData={recommendTodays}/>
                    </div>
                </div>
            </div>
            <div className="mobile main-cake-flex sort-by-rec" style={{ marginBottom: "23px", }}>
                <div className="title">케이쿡 추천 Pick</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={recommendTodays} link="KCOOK"/>
                </div>
            </div>
            {/* <div className="kcook-pick">
                <div className="title">케이쿡 추천 Pick</div>
                <div className="pick-contents">
                    <WidthwiseCard getData={data}/>
                </div>
            </div> */}

            <div className="famous-event">
                <div className="todays-event-bar">
                    <button
                        className="todays-event-bar-left"
                        onClick={()=>{
                            if (0 <= eventPageTodays-1) {
                                getAxios(setEventTodays, setEventLengthTodays, "cakes", [], 3, 0, eventPageTodays-1);
                                setEventPageTodays(eventPageTodays-1)
                            }
                        }}
                    >
                        <img src={leftArrow}/>
                    </button>
                    <button
                        className="todays-event-bar-right"
                        onClick={()=>{
                            if (eventLengthTodays >= eventPageTodays+1+3) {
                                getAxios(setEventTodays, setEventLengthTodays, "cakes", [], 3, 0, eventPageTodays+1);
                                setEventPageTodays(eventPageTodays+1)
                            }
                        }}
                    >
                        <img src={rightArrow}/>
                    </button>
                </div>
                <div className="event-top">
                    <div className="pc title">이번 달 인기 이벤트</div>
                    <div
                        className="mobile title"
                        onClick={()=>{
                            LinkClick("");
                            document.location.href = "/"+"";
                        }}
                    >
                        이번 달 인기 이벤트
                        <img src={allow} />
                    </div>
                    <Link to="/"className="link"></Link>
                    <a className="view-all">전체 보기 &gt;</a>
                </div>

                <div className="event-contents">                    
                    <EventCard getData={eventTodays} link="" />
                </div>
            </div>
        </div>
    )
}



export default TodaysRec;



