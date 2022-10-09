import React, { useState, useEffect } from "react";

const SSH_Fc_TestData = () => {
    // get /api/store/past_calendar?storeId=0
    return ([
        {
            date: '2022-10-05', //필수
            todayTitle: 0, //필수
            todayDescribe: 10,
            title: 0, //필수
            describe: 10, //필수
            allPrice: 0, //필수
        },
        {
            date: '2022-10-04',
            todayTitle: 0,
            todayDescribe: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
        {
            date: '2022-10-03',
            todayTitle: 0,
            todayDescribe: 0,
            title: 2,
            describe: 10,
            allPrice: 1000, 
        },
        {
            date: '2022-10-02',
            todayTitle: 0,
            todayDescribe: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
        {
            date: '2022-10-01',
            todayTitle: 0,
            todayDescribe: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
    ]);
}

export default SSH_Fc_TestData;