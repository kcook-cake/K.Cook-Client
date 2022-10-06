import React, { useState, useEffect } from "react";

const SSO_TestData = () => {
    // get /api/store/future_calendar?storeId=0
    return ([
        //오늘로부터 60일까지, 데이터 60개
        {
            date: '2022-10-06',
            todayTitle: 0, //cake.today_sale_number
            title: 0,
            describe: 10,
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

export default SSO_TestData;