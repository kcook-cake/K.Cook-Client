import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/Date_Calendar.scss';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Props {
    date: any,
}

function Date_Calendar({date}: Props) {
    useEffect(()=>{
        var today = new Date();
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        var dateString = year + '-' + month  + '-' + day;

        $(".fc-daygrid-day .fc-daygrid-day-number").css("color", "#000");
        $(".fc-daygrid-day .fc-daygrid-day-number").css("background", "none");

        $(".fc-daygrid-day[data-date='"+dateString+"'] .fc-daygrid-day-number").css("color", "#fff");
        $(".fc-daygrid-day[data-date='"+dateString+"'] .fc-daygrid-day-number").css("background", "#ea5450");
    },[]);

    return (
        <>
            <div className="cake-detail-date-calendar">
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
                    eventColor="red"
                    nowIndicator
                    dateClick={(e: any) => {
                        $(".fc-daygrid-day .fc-daygrid-day-number").css("color", "#000");
                        $(".fc-daygrid-day .fc-daygrid-day-number").css("background", "none");
                        $(".fc-day-today .fc-daygrid-day-number").css("background", "#F07F7C");

                        date = e.dateStr;

                        $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("color", "#fff");
                        $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("background", "#ea5450");

                        //파라미터로 함수 받아오고 실행시킴
                    }}
                />
            </div>
        </>
    );
}

export default Date_Calendar;