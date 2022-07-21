import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';
import '../../styles/mypage/OrderHistory.scss';
import '../../styles/seller/SellerOrder.scss';
import '../../styles/FullCalendarApp.scss';

import isSession from 'src/utils/isSession';

function FullCalendarApp (){
  //모달창
  const [modalFail, setModalFail] = useState(false);
  const [date, setDate] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setting = () => {
    console.log("setting")
  }

  //달력 판매자 정보
  const e = [
    {
      id: 1,
      title: '1',
      describe: '10',
      start: '2022-07-22',
    },
    {
      id: 2,
      title: '2',
      describe: '10',
      start: '2022-07-23',
    },
    { 
      id: 3, 
      title: '2', 
      describe: '10',
      start: '2022-07-25',
    },
    { 
      id: 4, 
      title: '0', 
      describe: '0',
      start: '2022-07-28',
    },
  ];

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
  const [events, setEvents] = useState([{}]);

  useEffect(()=> {
    // $(".fc-day-future").click(()=>{
    //   // $(this).css("background", "red");
    // });
    isSession(
      (s:any)=>{
        if (s) setSession(s);
      },
      (a:any)=>{
        setAuth(a);
      },
    );
    
    for(var i = 0; i < e.length; i++) {
      e[i].title = "주문: " + e[i].title + "/" + e[i].describe;
    }
    setEvents(e); //사용자의 달력값 가져와서 적어줌
  }, []);

  // /SellerOrder/{id}
  return(
    <div className="mp-top seller-order">
      {modalFail ? 
        <div id="calendar-modal" style={{ left: (x)+"px", top: (y)+"px", }}>
          <div style={{ width: "5px", height: "35px", }}></div>
          <div className="calendar-modal-box">{date}</div>
          <br/>
          <div style={{ width: "5px", height: "20px", }}></div>
          <div className="calendar-modal-box">
            <Link to="/SellerOrder">
              <button className="calendar-button">예약 확인</button> 
            </Link>
            <button 
              className="calendar-button"
              onClick={setting}
            >주문 건수 설정</button> {/* 휴일해제 */}
          </div>
        </div>
        :<></>
      }
      <div className="mypage-top seller-order-top">
        {/* {session ? <div>{auth.accountId}</div> : <></>} */}
        <h3>주문확인</h3>
        <div className='order-view-type'>
          <Link to='/FullCalendarApp' className='order-view view-calander' style={{ color: "#ea5450", }}>달력보기</Link>
          |
          <Link to='/SellerOrder' className='order-view view-list'>목록보기</Link>
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
            setModalFail(false);
          }}
          eventClick={(e) => {
            setX(e.jsEvent.x); setY(e.jsEvent.y);

            let d = e.event._instance?.range.start.toString().split(" ")[0]
            if(d=='Mon') d="월요일"; 
            else if(d=='Tue') d="화요일"; 
            else if(d=='Wed') d="수요일"; 
            else if(d=='Thu') d="목요일"; 
            else if(d=='Fri') d="금요일"; 
            else if(d=='Sat') d="토요일"; 
            else d="일요일";

            setDate(e.event.startStr.split("-")[1]+"월 "+e.event.startStr.split("-")[2]+"일 "+d);

            if (modalFail)
              setModalFail(false);
            else
              setModalFail(true);
          }}
        />
      </div>
  </div>

  )
}

export default FullCalendarApp;