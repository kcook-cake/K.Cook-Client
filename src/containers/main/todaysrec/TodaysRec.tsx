import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../../../../src/styles/main/todaysrec/TodaysRec.scss'

import axios from "axios";

import LengthwiseCard from '../../../components/main/LengthwiseCard';
import WidthwiseCard from '../../../components/main/WidthwiseCard';
import EventCard from 'src/components/main/todaysrec/EventCard';
import PickCard from 'src/components/main/PickCard';
import getAxios from 'src/utils/getAxios';
import LinkClick from '../../../utils/LinkClick';

import allow from '../../../assets/right-arrow.svg';
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';

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
        LinkClick("TodaysRec");
        getAxios(setReviewTodays, setReviewLengthTodays, "cakes", [], 8, reviewPageTodays, 0);
        getAxios(setRecommenTdodays, setRecommendLengthTodays, "cakes", [], 6, recommendPageTodays, 0);
        getAxios(setEventTodays, setEventLengthTodays, "cakes", [], 3, 0, eventPageTodays);
    },[]);

    return(
        <div className="todaysrec-flex">
            <div className="todaysrec-review">
                <div className="title">최근 구매</div>
                <div className="contents">
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

            <div className="pc todaysrec-pick">
                <div>
                    <div className="title">케이쿡 추천 Pick</div>
                    <div className="contents">
                        <WidthwiseCard getData={recommendTodays}/>
                    </div>
                </div>
            </div>
            <div className="todaysrec-pick-mobile">
                <PickCard />
            </div>

            <div className="todaysrec-event">
                <div className="todaysrec-event-bar">
                    <button
                        className="todaysrec-event-bar-left"
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
                        className="todaysrec-event-bar-right"
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
                
                <div className="todaysrec-event-top">
                    <div className="pc title">이번 달 인기 이벤트</div>
                    <div
                        className="mobile title"
                        onClick={()=>{
                            LinkClick("");
                            document.location.href = "/"+"";
                        }}>
                        이번 달 인기 이벤트
                        <img src={allow} />
                    </div>
                    {/* <Link to="/"className="link"></Link> */}
                    <a className="view-all">전체 보기 &gt;</a>
                </div>

                <div className="contents">                    
                    <EventCard getData={eventTodays} link="" />
                </div>
            </div>
        </div>
    )
}



export default TodaysRec;



