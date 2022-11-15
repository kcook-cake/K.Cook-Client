import React, { useState, useEffect } from "react";

const SSO_Fc_TestData = () => {
    return ([
        //오늘로부터 60일까지, 데이터 60개
        {
            date: '2022-11-23',
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
            date: '2022-11-24',
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
            date: '2022-11-25',
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
            date: '2022-11-26',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-11-27',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-12-12',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-12-13',
            title: 0,
            describe: 10,
            groupsList: [],
        },
        {
            date: '2022-12-14',
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