import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LengthwiseCard from '../components/LengthwiseCard';
import '../../src/styles/main/MainRecommend.scss'
import '../../src/styles/TodaysRec.scss'
import WidthwiseCard from '../components/WidthwiseCard';

import axios from "axios";

import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

function TodaysRec (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);

    return(
        <div className="todays-recommend">
            <div className="sort-by-rec">
                <div className="title">리뷰 별점순</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={data}/>
                </div>
                <div className="pagination">
                    <Link to="/" className="arrow prev" href="#"> &lt;Prev</Link>
                    <Link to="/" href="#" className="pagi active">1</Link>
                    <Link to="/" href="#" className="pagi" >2</Link>
                    <Link to="/" href="#" className="pagi" >3</Link>
                    <Link to="/" className="arrow next" href="#">Next &gt;</Link>
                </div>
            </div>
            <div className="kcook-pick">
                <div className="title">케이쿡 추천 Pick</div>
                <div className="pick-contents">
                    <WidthwiseCard getData={data}/>
                </div>
            </div>

            <div className="famous-event">
                <div className="event-top">
                    <div className="title">이번 달 인기 이벤트</div>
                    <a className="view-all">전체 보기 &gt;</a>
                </div>
                <div className="event-contents">
                    <button className="event-arrow event-left">
                        <img src={leftArrow}/>
                    </button>
                    
                    <div className="event-card">
                        <div className="card-img">
                            <img src={event1}/>
                        </div>
                        <h2 className="event-card-title">오늘 종료! 케이쿡 단독 최저가!</h2>
                        <div className="event-date">
                            <span>D-2 </span>
                            07.22 (목) ~ 07.31(토)
                        </div>
                    </div>
                    
                    <div className="event-card">
                        <div className="card-img">
                            <img src={event2}/>
                        </div>
                        <h2 className="event-card-title">선착순 증정 이벤트!</h2>
                        <div className="event-date">
                            <span>D-2 </span>
                            07.22 (목) ~ 07.31(토)
                        </div>
                    </div>

                    <div className="event-card">
                        <div className="card-img">
                            <img src={event3}/>
                        </div>
                        <h2 className="event-card-title">오늘 종료! 케이쿡 단독 최저가!</h2>
                        <div className="event-date">
                            <span>D-2 </span>
                            07.22 (목) ~ 07.31(토)
                        </div>
                    </div>

                    <button className="event-arrow event-right">
                        <img src={rightArrow}/>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default TodaysRec;



