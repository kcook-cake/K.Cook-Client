import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';
import '../../styles/seller/FullCalendarApp.scss';

import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import FcSecondModal from '../../components/seller/sso-ssh/modal/FcSecondModal';
import KCOOKScroll from 'src/utils/KCOOKScroll';
import DeadLineModal from 'src/components/seller/sso-ssh/modal/DeadLineModal';
import SSH_Fc_TestData from './SSH_Fc_TestData';
import SSH_FcDataChange from './SSH_FcDataChange.js';
import MakePrice from 'src/utils/MakePrice';

function SSH_FullCalendar (session: any, auth: any,){
    const [num, setNum] = useState(0);

    //모달창
    const [orderModalShow, setOrderModalShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [deadLineModal, setDeadLineModal] = useState(false);

    const [allPrice, setAllPrice] = useState(0);
    const [date, setDate] = useState("");
    const [dateT, setDateT] = useState("");
    const [title, setTitle] = useState("");
    const [updateNum, setUpdateNum] = useState(0);
    const [modalHeight, setModalHeight] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    //판매자 정보
    const [events, setEvents] = useState([{}]);

    

    //주차 계산기
    const getWeekNumber = (date: Date) => {
        const currentDate = date.getDate();
        const startOfMonth = new Date(date.setDate(1));
        const weekDay = startOfMonth.getDay();
        return Math.floor(((weekDay-2) + currentDate) / 7 + 1);
    }



    const [resize, setResize] = useState(0);
    const handleResize = () => {
        setResize(window.innerWidth);
    };
    useEffect(() => {
        // $(".fc-daygrid-day").css("background", "none");
        // const height1 = document.getElementById('header-flex-id') as Element;
        // const height2 = document.getElementById('sfc') as Element;
        // setModalHeight(height1.clientHeight+height2.clientHeight);

        let isComponentMounted = true;
        LinkClick("SalesHistory");
        sellerLinkClick("SalesHistory");

        SSH_FcDataChange ((seller: any)=>{
            setEvents(seller);
        }, SSH_Fc_TestData()); // get /api/store/past_calendar?storeId=0

        setResize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            isComponentMounted = false;
            window.removeEventListener("resize", handleResize);
        }
    }, []);

  return(
    <>
        <div id="sfc" className={"sfc SSHCalendar"}>
            <div className="seller-mypage-top sso-ssh-top">
                <div className="seller-mypage-front-title">판매내역</div>
                <div className='ss-fc-link-flex'>
                    <Link
                        to='/SalesHistory'
                        className='pc ss-fc-link'
                        style={{ color: "#ea5450", }}>
                        달력보기
                    </Link>
                    <div
                        className="pc ss-fc-link-bar"
                        style={{ display: "inline-block"}}>|
                    </div>
                    <Link
                        to='/SalesHistory'
                        className='ss-fc-link ss-fc-link-right'>
                        목록보기
                    </Link>
                </div>
            </div>
            
            <div className="seller-calendar">
                {/* FcSecondModal */}
                <FcSecondModal
                    NumF={()=>setNum(num+1)} resize={resize} height={272.26+50*3}
                    orderModalShow={orderModalShow} setOrderModalShowF={setOrderModalShow} 
                />
                {/* FcFirstModal */}
                {modalShow&&
                    <div 
                        className="calendar-modal-flex" //fcap fcap-back
                        style={{ 
                            marginLeft: (5+x*123.5)+"px",
                            marginTop: (186+(y-1)*109.5)+"px",
                        }}>
                        <div className="calendar-modal-top"></div>
                        <div id="calendar-modal">
                            <div style={{ width: "5px", height: "35px", }}></div>
                            <div className="calendar-modal-box">{date}</div>
                            <br/>
                            <div style={{ width: "5px", height: "20px", }}></div>
                            <div className="calendar-modal-box">
                                <Link to={'/SalesHistory/'+dateT}>
                                    <button className="calendar-button">판매 내역 확인</button> 
                                </Link>
                                <button className="calendar-button">
                                    {MakePrice(allPrice)}원
                                </button> {/* 휴일해제 */}
                            </div>
                        </div>
                    </div>
                }

                {/* DeadLineModal */}
                <DeadLineModal
                    NumF={()=>setNum(num+1)} 
                    deadLineModal={deadLineModal} setDeadLineModalF={setDeadLineModal} />

                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    firstDay={1}
                    headerToolbar={{
                        left: '',
                        center: 'prev title next',
                        right: ''
                    }}
                    titleFormat={{
                        year: 'numeric', 
                        month: 'numeric',
                    }}
                    dayHeaderFormat={{
                        weekday: (resize<=767? 'short': 'long'),
                    }}
                    customButtons={{
                        new: {
                            text: 'new',
                            click: () => console.log('new event'),
                        },
                    }}
                    events={events}
                    eventColor="red"
                    nowIndicator
                    dateClick={(e) => {
                        setModalShow(false);

                        if (resize <= 767) {
                            const height1 = document.getElementById('header-flex-id') as Element;
                            const height2 = document.getElementById('sfc') as Element;
                            setModalHeight(height1.clientHeight+height2.clientHeight);
                
                            $(".fc-daygrid-day-number").css("color", "#fff");
                            $(".fc-daygrid-day-top").css("background", "rgba(234, 84, 80, 0.0)");
                            return;
                        }

                        $(".fc-daygrid-day-number").css("color", "#999999");
                        $(".fc-daygrid-day").css("pointer-events", "auto");
                        $(".fc-daygrid-day").css("background", "none");
                        $(".fc-event-main-frame").css("background", "none");

                        $(".fc-daygrid-day.fc-day-today").css("background", "#FFFADF");
                    }}
                    eventClick={(e) => {
                        setAllPrice(e.event._def.extendedProps.allPrice);
                        if (resize <= 767) {
                            const height1 = document.getElementById('header-flex-id') as Element;
                            const height2 = document.getElementById('sfc') as Element;
                            setModalHeight(height1.clientHeight+height2.clientHeight);
                
                            if (modalShow) {
                              $(".fc-daygrid-day-number").css("color", "#fff");
                              $(".fc-daygrid-day-top").css("background", "rgba(234, 84, 80, 0.0)");
                              setModalShow(false);
                              return;
                            }
                            const date = e.event.startStr;

                            let d = e.event._instance?.range.start.toString().split(" ")[0]
                            if(d==='Mon') d="월요일"; 
                            else if(d==='Tue') d="화요일";
                            else if(d==='Wed') d="수요일";
                            else if(d==='Thu') d="목요일";
                            else if(d==='Fri') d="금요일";
                            else if(d==='Sat') d="토요일";
                            else d="일요일";
                            
                            setTitle(e.event._def.title);
                            setUpdateNum(parseInt(e.event._def.title.split("/")[1]));
                            setDate(date.split("-")[1]+"월 "+date.split("-")[2]+"일 "+d);
                            setDateT(date);
                
                            $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("color", "#fff");
                            $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-top").css("background", "rgba(234, 84, 80, 0.0)");
                            $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("color", "#ea5450");
                            $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-top").css("background", "#fff");
                            setModalShow(true);
                            return;
                        }

                        if (modalShow) {
                            $(".fc-daygrid-day-number").css("color", "#999999");
                            $(".fc-daygrid-day").css("pointer-events", "auto");
                            $(".fc-daygrid-day").css("background", "none");
                            $(".fc-event-main-frame").css("background", "none");

                            $(".fc-daygrid-day.fc-day-today").css("background", "#FFFADF");
                            setModalShow(false);
                            return;
                        }

                        const date = e.event.startStr;

                        let d = e.event._instance?.range.start.toString().split(" ")[0]
                        var cnt = 0;
                        if(d==='Mon') { d="월요일"; cnt=0; }
                        else if(d==='Tue') { d="화요일"; cnt=1; }
                        else if(d==='Wed') { d="수요일"; cnt=2; }
                        else if(d==='Thu') { d="목요일"; cnt=3; }
                        else if(d==='Fri') { d="금요일"; cnt=4; }
                        else if(d==='Sat') { d="토요일"; cnt=5; }
                        else { d="일요일"; cnt=6; }
                        
                        setTitle(e.event._def.title);
                        setUpdateNum(parseInt(e.event._def.title.split("/")[1]));
                        setDate(date.split("-")[1]+"월 "+date.split("-")[2]+"일 "+d);
                        setDateT(date);

                        $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("color", "#fff");
                        $(".fc-daygrid-day[data-date='"+date+"']").css("pointer-events", "none");
                        $(".fc-daygrid-day[data-date='"+date+"']").css("background", "#ea5450");
                        $(".fc-daygrid-day[data-date='"+date+"'] .fc-event-main-frame").css("background", "#ea5450");

                        setX(cnt);
                        setY(getWeekNumber(new Date(date)));
                        setModalShow(true);
                    }}
                />
            </div>
            {/* <div className='sfc-background'></div> */}

        </div>
        {/* <div className="fcap-back" style={{ width: "5px", height: "1160px", }}></div> */}
        {/* <FullCalendarAppMobile /> */}
    </>
  )
}

export default SSH_FullCalendar;