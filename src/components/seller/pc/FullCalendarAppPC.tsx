import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';

import FullCalendarSeller from '../../../utils/FullCalendarSeller';
import isSession from '../../../utils/isSession';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

function FullCalendarAppPC (){
  //모달창
  const [modalFail, setModalFail] = useState(false);
  const [date, setDate] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setting = () => {
    console.log(window.pageYOffset)
  }

  //사용자
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({
    accountId: 0,
    address: "",
    dateOfBirth: "",
    email: "",
    nickname: "",
    phoneNumber: "",
    signInId: "",
  });

  //판매자 정보
  const [events, setEvents] = useState([{}]);

  useEffect(()=> {
    // $(".seller-section").hide();
    // $(".sso-pc").css("margin", "auto");
    // const yearMonth = document.querySelector(".fc-toolbar-title") as Element;
    // const yM = yearMonth.textContent;
    // yearMonth.innerHTML = `${yM?.split("/")[1]}.${yM?.split("/")[0]}`;
    // const today = document.querySelector(".fc-day-today .fc-daygrid-day-frame .fc-daygrid-day-top .fc-daygrid-day-number") as Element;
    // today.innerHTML = `Today`;
    // $(".fc-day-today .fc-daygrid-day-frame .fc-daygrid-day-top .fc-daygrid-day-number").css("font-weight", "600");

    isSession(
      (s:any)=>{
        if (s) setSession(s);
      },
      (a:any)=>{
        setAuth(a);
      },
    );

    FullCalendarSeller((seller: any)=>{
      setEvents(seller);
    }, false);
  }, []);

  // /SellerOrder/{id}
  return(
    <>
    {modalFail ? 
      <div className="calendar-modal-flex fcap-back" style={{ left: (x+window.pageXOffset+8)+"px", top: (y+window.pageYOffset+37)+"px", }}>
        <div className="calendar-modal-top"></div>
        <div id="calendar-modal">
          <div style={{ width: "5px", height: "35px", }}></div>
          <div className="calendar-modal-box">{date}</div>
          <br/>
          <div style={{ width: "5px", height: "20px", }}></div>
          <div className="calendar-modal-box">
            <Link
              to="/SellerOrder"
              onClick={()=>{
                // $(".seller").css("display", "flex");
                // $(".seller-section").show();
                LinkClick("SellerOrder");
                sellerLinkClick("SellerOrder");
              }}
            >
              <button className="calendar-button">예약 확인</button> 
            </Link>
            <button 
              className="calendar-button"
              onClick={setting}
            >주문 건수 설정</button> {/* 휴일해제 */}
          </div>
        </div>
      </div>
      :<></>
    }
    <div className="fcap">
      <div className="seller-order-top-calendar"> {/* mypage-top */}
        {/* {session ? <div>{auth.accountId}</div> : <></>} */}
        <Link
          to="/SellerOrder"
          onClick={()=>{
            // $(".seller").css("display", "flex");
            // $(".seller-section").show();
            LinkClick("SellerOrder");
            sellerLinkClick("SellerOrder");
          }}
        >
          <button className='calendar-mypage'>&lt;&nbsp;마이페이지</button>
        </Link>
        <h3 className='calendar-complete'>주문확인</h3>
        <div className='ss-fc-link-flex'>
          <Link to='/FullCalendarApp' className='ss-fc-link' style={{ color: "#ea5450", }}>달력보기</Link>
          |
          <Link
            to='/SellerOrder'
            className='ss-fc-link'
            onClick={()=>{
              // $(".seller").css("display", "flex");
              // $(".seller-section").show();
              // $(".seller-order").css("margin", "0");
              LinkClick("SellerOrder");
              sellerLinkClick("SellerOrder");
            }}
          >목록보기</Link>
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
            weekday: 'long',
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
            $(".fc-daygrid-day").css("pointer-events", "auto");
            $(".fc-daygrid-day").css("background", "none");
            $(".fc-event-main-frame").css("background", "none");
            setModalFail(false);
            // FullCalendarSeller((seller: any)=>{
            //   setEvents(seller);
            // });
          }}
          eventClick={(e) => {
            const date = e.event.startStr;
            let d = e.event._instance?.range.start.toString().split(" ")[0]
            if(d=='Mon') d="월요일"; 
            else if(d=='Tue') d="화요일";
            else if(d=='Wed') d="수요일";
            else if(d=='Thu') d="목요일";
            else if(d=='Fri') d="금요일";
            else if(d=='Sat') d="토요일";
            else d="일요일";
            setDate(date.split("-")[1]+"월 "+date.split("-")[2]+"일 "+d);
            
            $(".fc-daygrid-day").css("pointer-events", "auto");
            $(".fc-daygrid-day").css("background", "none");
            $(".fc-event-main-frame").css("background", "none");
            $(".fc-daygrid-day[data-date='"+date+"']").css("pointer-events", "none");
            $(".fc-daygrid-day[data-date='"+date+"']").css("background", "#ea5450");
            $(".fc-daygrid-day[data-date='"+date+"'] .fc-event-main-frame").css("background", "#ea5450");

            const xy = document.querySelector(".fc-daygrid-day[data-date='"+date+"']") as Element;
            setX(xy.getBoundingClientRect().left); setY(xy.getBoundingClientRect().top);
            setModalFail(true);
          }}
        />
      </div>
    </div>
    <div className="fcap-back" style={{ width: "5px", height: "1160px", }}></div>
    </>
  )
}

export default FullCalendarAppPC;