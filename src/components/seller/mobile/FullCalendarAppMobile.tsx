import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';
import '../../../styles/FullCalendarApp.scss';

import FullCalendarSeller from '../../../utils/FullCalendarSeller';
import isSession from '../../../utils/isSession';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

function FullCalendarAppMobile (){
  //모달창
  const [modalFail, setModalFail] = useState(false);
  const [modalFuture, setModalFuture] = useState(false);
  const [date, setDate] = useState("");
  const [dateT, setDateT] = useState("");
  const [title, setTitle] = useState("");
  const [modalHeight, setModalHeight] = useState(0);
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
    const height1 = document.getElementById('header-flex-id') as Element;
    const height2 = document.getElementById('fcam') as Element;
    setModalHeight(height1.clientHeight+height2.clientHeight);

    // $(".seller").css("display", "block");
    // $(".seller-section").hide();
    $(".sso-pc").css("margin", "auto");
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
    }, true);
  }, []);

  // /SellerOrder/{id}
  // style={{ top: (modalHeight-window.pageYOffset-209)+"px", }}
  return(
    <div id="fcam" className="seller-order-calendar fcam">
      {modalFail ? 
      <div className="calendar-modal-flex fcam">
        <div id="calendar-modal" style={{ top: (modalHeight-270)+"px", }}>
          <div style={{ width: "5px", height: "35px", }}></div>
          <div className="calendar-modal-box">{date}</div>
          <div style={{ width: "5px", height: "10px", }}></div>
          <div className="calendar-modal-box-title">{title}</div>
          <br/>
          <div className="calendar-modal-blank"></div>
          <div className="calendar-modal-box">
            <Link
              to="/SellerOrder"
              onClick={()=>{
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
      <div className="seller-order-top-calendar"> {/* mypage-top */}
        {/* {session ? <div>{auth.accountId}</div> : <></>} */}
        <Link
          to="/SellerOrder"
          onClick={()=>{
            LinkClick("SellerOrder");
            sellerLinkClick("SellerOrder");
          }}
        >
          <button className='calendar-mypage'>&lt;&nbsp;마이페이지</button>
        </Link>
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
            weekday: 'short',
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
            const height1 = document.getElementById('header-flex-id') as Element;
            const height2 = document.getElementById('fcam') as Element;
            setModalHeight(height1.clientHeight+height2.clientHeight);

            if (modalFail || e.dayEl.className.split(" ")[3] == "fc-day-past" || e.dayEl.className.split(" ")[3] == "fc-day-today") {
              $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-number").css("color", "#fff");
              $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-top").css("background", "rgba(234, 84, 80, 0.0)");
              setModalFail(false);
              return;
            }
            // setModalFail(true);

            // const date = e.dateStr;
            // let d = e.date.toString().split(" ")[0]
            // if(d=='Mon') d="월요일"; 
            // else if(d=='Tue') d="화요일";
            // else if(d=='Wed') d="수요일";
            // else if(d=='Thu') d="목요일";
            // else if(d=='Fri') d="금요일";
            // else if(d=='Sat') d="토요일";
            // else d="일요일";
            // setDate(date.split("-")[1]+"월 "+date.split("-")[2]+"일 "+d);
            // setDateT(date);

            // // setTitle(e.event._def.title);
            // setTitle("");

            // $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-number").css("color", "#fff");
            // $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-top").css("background", "rgba(234, 84, 80, 0.0)");
            // $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("color", "#ea5450");
            // $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-top").css("background", "#fff");
          }}
          eventClick={(e) => {
            const height1 = document.getElementById('header-flex-id') as Element;
            const height2 = document.getElementById('fcam') as Element;
            setModalHeight(height1.clientHeight+height2.clientHeight);

            if (modalFail) {
              $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-number").css("color", "#fff");
              $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-top").css("background", "rgba(234, 84, 80, 0.0)");
              setModalFail(false);
              return;
            }
            setModalFail(true);

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
            setDateT(date);
            
            setTitle(e.event._def.title);

            $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-number").css("color", "#fff");
            $(".fc-daygrid-day[data-date='"+dateT+"'] .fc-daygrid-day-top").css("background", "rgba(234, 84, 80, 0.0)");
            $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("color", "#ea5450");
            $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-top").css("background", "#fff");
            setModalFail(true);
          }}
        />
      </div>
      <div style={{ width: "100%", height: "200px", background: "#ea5450", }}></div>
  </div>

  )
}

export default FullCalendarAppMobile;