import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const FullCalendarSeller = (fn,TF) => {
    // axios
    //     .get(`/app/accounts/auth`, {
    //         headers: {
    //             'X-ACCESS-TOKEN': sessionStorage.jwToken,
    //         }
    //     })
    //     .then((res) => {
    //         if(fn != null) fn(res.data.isSuccess);
    //         if(fn2 != null) fn2(res.data.result);
    //     })
    //     .catch((error) => {
    //         sessionStorage.removeItem("jwToken");
    //         if(fn != null) fn(false);
    //     });

    //달력 판매자 정보
    const e = [
        {
            id: 1,
            title: '1',
            describe: '10',
            start: '2022-09-01',
        },
        {
            id: 2,
            title: '2',
            describe: '10',
            start: '2022-09-02',
        },
        { 
            id: 3, 
            title: '2', 
            describe: '10',
            start: '2022-09-20',
        },
        { 
            id: 4, 
            title: '0', 
            describe: '0',
            start: '2022-09-30',
        },
        { 
            id: 5, 
            title: '1', 
            describe: '1',
            start: '2022-10-05',
        },
        { 
            id: 6, 
            title: '0', 
            describe: '0',
            start: '2022-10-28',
        },
    ];

    for(var i = 0; i < e.length; i++) {
        if (e[i].title === '0')
            e[i].borderColor = "rgba(255, 255, 255, 0.0)";
        else
            e[i].borderColor = "white";
        e[i].title = "주문: " + e[i].title + "/" + e[i].describe
    }

    // if (TF) fn(em);
    // else fn(e);
    fn(e);
}

export default FullCalendarSeller;