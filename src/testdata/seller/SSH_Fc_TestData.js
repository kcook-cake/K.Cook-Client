import React, { useState, useEffect } from "react";

const SSH_Fc_TestData = () => {
    // get /api/store/past_calendar?storeId=0
    return ([
        {
            date: '2022-11-04', //필수
            todayTitle: 0, //필수
            todayDescribe: 10,
            title: 0, //필수
            describe: 10, //필수
            allPrice: 0, //필수
        },
        {
            date: '2022-11-03',
            todayTitle: 0,
            todayDescribe: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
        {
            date: '2022-11-02',
            todayTitle: 0,
            todayDescribe: 0,
            title: 2,
            describe: 10,
            allPrice: 1000, 
        },
        {
            date: '2022-11-01',
            todayTitle: 0,
            todayDescribe: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
        {
            date: '2022-10-31',
            todayTitle: 0,
            todayDescribe: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
    ]);
}

export default SSH_Fc_TestData;