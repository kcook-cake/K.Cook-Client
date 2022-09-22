import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';
import '../../styles/seller/FullCalendarApp.scss';

import FullCalendarSeller from '../../utils/FullCalendarSeller';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import FcSecondModal from '../../components/seller/sso-ssh/modal/FcSecondModal';
import KCOOKScroll from 'src/utils/KCOOKScroll';

function FullCalendarApp (session: any, auth: any,){
    const [num, setNum] = useState(0);

    //모달창
    const [orderModalShow, setOrderModalShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [date, setDate] = useState("");
    const [dateT, setDateT] = useState("");
    const [title, setTitle] = useState("");
    const [updateNum, setUpdateNum] = useState(0);
    const [modalHeight, setModalHeight] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    //판매자 정보
    const [events, setEvents] = useState([{}]);

    const [pathname, setPathname] = useState("");
    const [resize, setResize] = useState(0);

    const handleResize = () => {
        setResize(window.innerWidth);
    };

    let [secondModalHeight, setSecondModalHeight] = useState(0); //리스트를 받고 주문 개수에 따라 넘겨줌
    useEffect(() => {
        // $(".fc-daygrid-day").css("background", "none");
        const height1 = document.getElementById('header-flex-id') as Element;
        const height2 = document.getElementById('sfc') as Element;
        setModalHeight(height1.clientHeight+height2.clientHeight);

        setResize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        var pathname = window.location.pathname;
        pathname = pathname.split("/")[1];
        setPathname(pathname);

        if (pathname === "SSOCalendar") {
            LinkClick("SellerOrder");
            sellerLinkClick("SellerOrder");
        } else {
            LinkClick("SalesHistory");
            sellerLinkClick("SalesHistory");
        }

        FullCalendarSeller((seller: any)=>{
            setEvents(seller);
        }, false);
    }, []);

  // /SellerOrder/{id}
  return(
    <>
        {/* FcSecondModal */}
        <FcSecondModal
            NumF={()=>setNum(num+1)} resize={resize} height={272.26+50*3}
            orderModalShow={orderModalShow} setOrderModalShowF={setOrderModalShow} 
        />

        {/* FcFirstModal */}
        {modalShow&&
            <div className="fcap calendar-modal-flex fcap-back" style={{ left: (x+window.pageXOffset+8)+"px", top: (y+window.pageYOffset+37)+"px", }}>
                <div className="calendar-modal-top"></div>
                <div id="calendar-modal">
                    <div style={{ width: "5px", height: "35px", }}></div>
                    <div className="calendar-modal-box">{date}</div>
                    <br/>
                    <div style={{ width: "5px", height: "20px", }}></div>
                    <div className="calendar-modal-box">
                        <Link to={pathname==="SSOCalendar"? '/SellerOrder': '/SalesHistory'}>
                            <button className="calendar-button">예약 확인</button> 
                        </Link>
                        <button 
                            className="calendar-button"
                            onClick={()=>{
                                KCOOKScroll(true);
                                setOrderModalShow(true);
                            }}>
                            주문 건수 설정
                        </button> {/* 휴일해제 */}
                    </div>
                </div>
            </div>
        }

        <div id="sfc" className={"sfc "+pathname}>
            {/* FcFirstModal */}
            {modalShow&&
                <div className="calendar-modal-flex fcam">
                    <div id="calendar-modal" style={{ top: (modalHeight-270)+"px", }}> {/* modalHeight */}
                        <div style={{ width: "5px", height: "35px", }}></div>
                        <div className="calendar-modal-box">{date}</div>
                        <div style={{ width: "5px", height: "10px", }}></div>
                        <div className="calendar-modal-box-title">{title}</div>
                        <br/>
                        <div className="calendar-modal-blank"></div>
                        <div className="calendar-modal-box">
                            <Link to={pathname==="SSOCalendar"? '/SellerOrder': '/SalesHistory'}>
                                <button className="calendar-button">예약 확인</button> 
                            </Link>
                            <button 
                                className="calendar-button"
                                onClick={()=>setOrderModalShow(true)}>
                                주문 건수 설정
                            </button> {/* 휴일해제 */}
                        </div>
                    </div>
                </div>
            }
            <div className="seller-mypage-top sso-ssh-top">
                <div className="seller-mypage-front-title">{pathname==="SSOCalendar"? '주문확인': '판매내역'}</div>
                <div className='ss-fc-link-flex'>
                    <Link
                        to={pathname==="SSOCalendar"? '/SellerOrder': '/SalesHistory'}
                        className='pc ss-fc-link'
                        style={{ color: "#ea5450", }}>
                        달력보기
                    </Link>
                    <div
                        className="pc ss-fc-link-bar"
                        style={{ display: "inline-block"}}>|
                    </div>
                    <Link
                        to={pathname==="SSOCalendar"? '/SellerOrder': '/SalesHistory'}
                        className='ss-fc-link ss-fc-link-right'>
                        목록보기
                    </Link>
                </div>
            </div>
            <div className="seller-calendar">
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
                        $(".fc-daygrid-day[data-date='"+date+"']").css("pointer-events", "none");
                        $(".fc-daygrid-day[data-date='"+date+"']").css("background", "#ea5450");
                        $(".fc-daygrid-day[data-date='"+date+"'] .fc-event-main-frame").css("background", "#ea5450");

                        const xy = document.querySelector(".fc-daygrid-day[data-date='"+date+"']") as Element;
                        setX(xy.getBoundingClientRect().left); setY(xy.getBoundingClientRect().top);
                        setModalShow(true);
                    }}
                />
            </div>
        </div>
        {/* <div className="fcap-back" style={{ width: "5px", height: "1160px", }}></div> */}
        {/* <FullCalendarAppMobile /> */}
    </>
  )
}

export default FullCalendarApp;