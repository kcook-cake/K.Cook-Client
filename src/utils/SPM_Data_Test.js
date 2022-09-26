import React, { useState, useEffect } from "react";
import axios from "axios";
import $, { get } from "jquery";

const SPM_Data_Test = () => {
    return ([
        {
            "image": ["", "", "", "", ""],
            "isTodayCake": true,
            "name": "케이크1",
            "optionsList": [
                {
                    "additionalCost": 1000,
                    "category": "SIZE",
                    "categoryTitle": "",
                    "childOptionsList": [
                        {
                            "childOptionId": 100,
                            "array": [0],
                            "type": "TASTE"
                        }
                    ],
                    "contents": "1호",
                    "optionsId": 200,
                    "itemType": "normal",
                    "itemNumber": 0,
                },
                {
                    "additionalCost": 1000,
                    "category": "SIZE",
                    "categoryTitle": "",
                    "childOptionsList": [],
                    "contents": "2호",
                    "optionsId": 201,
                    "itemType": "Text",
                    "itemNumber": 1,
                },
                {
                    "additionalCost": 0,
                    "category": "TASTE",
                    "categoryTitle": "",
                    "childOptionsList": [],
                    "contents": "딸기",
                    "optionsId": 202,
                    "itemType": "normal",
                    "itemNumber": 0,
                },
                {
                    "additionalCost": 0,
                    "category": "TASTE",
                    "categoryTitle": "(시트+크림)",
                    "childOptionsList": [],
                    "contents": "딸기",
                    "optionsId": 203,
                    "itemType": "normal",
                    "itemNumber": 0,
                },
                {
                    "additionalCost": 0,
                    "category": "TASTE",
                    "categoryTitle": "(시트+크림)",
                    "childOptionsList": [],
                    "contents": "초코",
                    "optionsId": 204,
                    "itemType": "Image",
                    "itemNumber": 1,
                },
            ],
            "price": 25000,
            "productId": 300,
            "isOriginShow": true, //
            "isTodayShow": true, //
            // "show": false, //
            "maxOfToday": 0, //
            "salePrice": 0, //
            "status": "BLACKLIST", //
            "storeId": 0, //
            "storeName": "string", //
            "todaySaleNumber": 0 //
        },
        {
            "image": ["", "", "", "", ""],
            "isTodayCake": true,
            "name": "케이크1",
            "optionsList": [
                {
                    "additionalCost": 1000,
                    "category": "SIZE",
                    "categoryTitle": "",
                    "childOptionsList": [],
                    "contents": "string",
                    "optionsId": 200,
                    "itemType": "normal",
                    "itemNumber": 0,
                }
            ],
            "price": 25000,
            "productId": 300,
            "isOriginShow": true, //
            "isTodayShow": true, //
            // "show": false, //
            "maxOfToday": 0, //
            "salePrice": 0, //
            "status": "BLACKLIST", //
            "storeId": 0, //
            "storeName": "string", //
            "todaySaleNumber": 0 //
        },
    ]);
};

export default SPM_Data_Test;
