import React, { useState, useEffect } from "react";

const SSH_TestData = () => {
    // get /api/store/past_calendar?storeId=0
    return ([
        {
            date: '2022-10-05',
            todayTitle: 0,
            title: 0,
            describe: 10,
            allPrice: 0, 
        },
        {
            date: '2022-10-04',
            todayTitle: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
        {
            date: '2022-10-03',
            todayTitle: 0,
            title: 2,
            describe: 10,
            allPrice: 1000, 
        },
        {
            date: '2022-10-02',
            todayTitle: 0,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
        {
            date: '2022-10-01',
            todayTitle: 1,
            title: 0,
            describe: 0,
            allPrice: 0, 
        },
    ]);
}

export default SSH_TestData;