import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';
import '../../styles/FullCalendarApp.scss';

import FullCalendarSeller from 'src/utils/FullCalendarSeller';
import isSession from 'src/utils/isSession';
import FullCalendarAppPC from 'src/components/seller/pc/FullCalendarAppPC';
import FullCalendarAppMobile from 'src/components/seller/mobile/FullCalendarAppMobile';

function FullCalendarApp (){
  return(
    <>
        <FullCalendarAppPC/>
        <FullCalendarAppMobile/>
    </>

  )
}

export default FullCalendarApp;