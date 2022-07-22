import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const FullCalendarSeller = (fn) => {
    // axios
    //     .get(`/app/accounts/auth`, {
    //         headers: {
    //             'X-ACCESS-TOKEN': sessionStorage.jwToken,
    //         }
    //     })
    //     .then((res) => {
    //         // console.log(res.data.isSuccess)
    //         if(fn != null) fn(res.data.isSuccess);
    //         if(fn2 != null) fn2(res.data.result);
    //     })
    //     .catch((error) => {
    //         // console.log(error.response.data.isSuccess)
    //         sessionStorage.removeItem("jwToken");
    //         if(fn != null) fn(false);
    //     });

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
            start: '2022-07-24',
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
        { 
            id: 5, 
            title: '0', 
            describe: '0',
            start: '2022-08-05',
        },
        { 
            id: 6, 
            title: '0', 
            describe: '0',
            start: '2022-08-28',
        },
    ];
    for(var i = 0; i < e.length; i++) {
        // if (e[i].title == e[i].describe) {
        //     $(".fc-daygrid-day[data-date='"+e[i].start+"']").css("pointer-events", "none");
        //     $(".fc-daygrid-day[data-date='"+e[i].start+"']").css("background", "#e6e6e6");
        //     $(".fc-daygrid-day[data-date='"+e[i].start+"'] .fc-event-main-frame").css("background", "#e6e6e6");
        // }
        e[i].title = "주문: " + e[i].title + "/" + e[i].describe;
    }
    fn(e);
}

export default FullCalendarSeller;