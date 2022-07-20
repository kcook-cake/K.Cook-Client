import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../styles/mypage/OrderHistory.scss';
import '../../styles/seller/SellerOrder.scss';
import '../../styles/FullCalendarApp.scss';

const events:object = [
  {
    id: 1,
    title: 'event 1',
    start: '2022-07-14T10:00:00',
    end: '2022-07-14T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2022-07-16T13:00:00',
    end: '2022-07-16T18:00:00',
  },
  { id: 3, title: 'event 3', start: '2022-07-17', end: '2022-07-18' },
];
  
function FullCalendarApp (){
  return(
    <div className="mp-top seller-order">
      <div className="mypage-top seller-order-top">
        <h3>주문확인</h3>
        {/* <span>처리할 예약 주문입니다.</span> */}
        <div className='order-view-type'>
        <Link to='/FullCalendarApp' className='order-view view-calander'>달력보기</Link>
                    |
                    <Link to='/SellerOrder' className='order-view view-list'>목록보기</Link>
        </div>
      </div>
      <div className="seller-calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: '',
            center: 'prev title next',
            right: ''
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
          dateClick={(e) => console.log(e.dateStr)}
          eventClick={(e) => console.log(e.event.id)}
          // style={{ background: "red", }}
        />
      </div>
  </div>

  )
}

export default FullCalendarApp;