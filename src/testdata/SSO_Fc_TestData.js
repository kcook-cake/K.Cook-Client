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
            groupsList: [ //필수
                {
                    groupId: 1, //필수
                    count: 10, //필수
                    groupNumber: 0, //필수
                    timesList: [ //필수
                        {
                            timeId: 1, //필수
                            time: "10:00", //필수
                            timeNumber: 0, //필수
                        },
                    ]
                },
            ],
        },
        {
            date: '2022-10-07',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-10-08',
            title: 0,
            describe: 20,
            groupsList: [
                {
                    groupId: 2,
                    count: 8,
                    groupNumber: 0,
                    timesList: [
                        {
                            timeId: 2,
                            time: "10:00",
                            timeNumber: 0,
                        },
                        {
                            timeId: 3,
                            time: "11:00",
                            timeNumber: 1,
                        },
                    ]
                },
                {
                    groupId: 3,
                    count: 9,
                    groupNumber: 1,
                    timesList: [
                        {
                            timeId: 4,
                            time: "12:00",
                            timeNumber: 0,
                        },
                        {
                            timeId: 5,
                            time: "13:00",
                            timeNumber: 1,
                        },
                        {
                            timeId: 6,
                            time: "14:00",
                            timeNumber: 2,
                        },
                        {
                            timeId: 7,
                            time: "15:00",
                            timeNumber: 3,
                        },
                    ]
                },
            ],
        },
        {
            date: '2022-10-09',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-10-10',
            title: 0,
            describe: 10,
            groupsList: [],
        },
    ]);
}

export default SSO_Fc_TestData;