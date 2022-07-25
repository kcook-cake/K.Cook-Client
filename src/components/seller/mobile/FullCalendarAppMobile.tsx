import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';
import '../../../styles/mypage/OrderHistory.scss';
import '../../../styles/seller/SellerOrder.scss';
import '../../../styles/FullCalendarApp.scss';

import FullCalendarSeller from 'src/utils/FullCalendarSeller';
import isSession from 'src/utils/isSession';

function FullCalendarAppMobile (){
  return(
    <div className="fcam">
      Hi
    </div>

  )
}

export default FullCalendarAppMobile;