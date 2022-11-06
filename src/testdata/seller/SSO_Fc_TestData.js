import React, { useState, useEffect } from "react";

const SSO_Fc_TestData = () => {
    return ([
        //오늘로부터 60일까지, 데이터 60개
        {
            date: '2022-11-05',
            todayTitle: 0,
            todayDescribe: 10,
            title: 0,
            describe: 10,
            groupsList: [
                {
                    groupId: 1,
                    count: 10,
                    timesList: [
                        "10:00",
                        "11:00",
                        "12:00",
                    ]
                },
            ],
        },
        {
            date: '2022-11-06',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-11-07',
            title: 0,
            describe: 20,
            groupsList: [
                {
                    groupId: 2,
                    count: 8,
                    timesList: [
                        "10:00",
                        "11:00",
                    ]
                },
                {
                    groupId: 3,
                    count: 9,
                    timesList: [
                        "10:00",
                        "11:00",
                        "12:00",
                        "10:00",
                        "11:00",
                        "12:00",
                    ]
                },
            ],
        },
        {
            date: '2022-11-08',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-11-09',
            title: 0,
            describe: 10,
            groupsList: [],
        },

        {
            date: '2022-11-10',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-11-11',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-11-12',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-11-13',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-11-14',
            title: 0,
            describe: 10,
            groupsList: [
                {
                    groupId: 4,
                    count: 8,
                    timesList: [
                        "10:00",
                        "11:00",
                    ]
                },
            ],
        },
    ]);
}

export default SSO_Fc_TestData;