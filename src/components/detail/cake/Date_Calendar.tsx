import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/Date_Calendar.scss';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Props {
    date: string,
    setDateF: Function,
    deadline: number[],
    ChangeGroupF: Function,
    ChangeCalendarF: Function,
    setGroupTimeIdF: Function, 
}

function Date_Calendar({ date, setDateF, deadline, ChangeGroupF, ChangeCalendarF, setGroupTimeIdF, }: Props) {
    useEffect(()=>{
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
                        // $(".fc-daygrid-day .fc-daygrid-day-number").css("color", "#000");
                        // $(".fc-daygrid-day .fc-daygrid-day-number").css("background", "none");
                        // $(".fc-day-today .fc-daygrid-day-number").css("background", "#F07F7C");

                        date = e.dateStr;
                        setDateF(date);

                        // $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("color", "#fff");
                        // $(".fc-daygrid-day[data-date='"+date+"'] .fc-daygrid-day-number").css("background", "#ea5450");

                        setGroupTimeIdF([-1, '']);
                        ChangeCalendarF(date);
                    }}
                />
            </div>
        </>
    );
}

export default Date_Calendar;