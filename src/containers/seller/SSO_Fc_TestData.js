import React, { useState, useEffect } from "react";

const SSO_Fc_TestData = () => {
    // get /api/store/future_calendar?storeId=0
    return ([
        //오늘로부터 60일까지, 데이터 60개
        {
            date: '2022-10-06', //필수
            todayTitle: 0, //table:cake, calumn:today_sale_number //오늘 날짜일 경우 필수
            title: 0, //필수
            describe: 10, //필수
        },
        {
            date: '2022-10-07',
            title: 0,
            describe: 10,
        },
        {
            date: '2022-10-08',
            title: 0,
            describe: 10,
        },
        {
            date: '2022-10-09',
            title: 0,
            describe: 10,
        },
        {
            date: '2022-10-10',
            title: 0,
            describe: 10,
        },
    ]);
}

export default SSO_Fc_TestData;