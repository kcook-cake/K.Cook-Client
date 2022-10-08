import React, { useState, useEffect } from "react";

const Cake_Detail_Static_TestData = () => {
    //get /api/cake/{cakeId}
    return (
        {
            cakeId: 34,
            image: "", //필수
            name: "케이크1", //필수
            price: 2000, //필수
            storeName: "유니아케이크",
            isTodayCake: false,
            deadline: [3, 3, 3, 3, 3, 1, 1],
            optionsList: [
                {
                    price: 2000,
                    category: "SIZE",
                    categoryTitle: "",
                    contents: "1호",
                    childsList: [
                        {
                            type: 1,
                            array: [0],
                        },
                        {
                            type: 2,
                            array: [0, 1],
                        },
                    ],
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
                {
                    price: 2000,
                    category: "TASTE",
                    categoryTitle: "",
                    contents: "딸기",
                    childsList: [],
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
                {
                    price: 1000,
                    category: "TASTE",
                    categoryTitle: "",
                    contents: "바나나",
                    childsList: [],
                    optionsId: 0,
                    itemType: "text",
                    itemNumber: 1,
                },
                {
                    price: 0,
                    category: "TASTE",
                    categoryTitle: "(시트+크림)",
                    contents: "초코",
                    childsList: [],
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 0,
                },
                {
                    price: 0,
                    category: "TASTE",
                    categoryTitle: "(시트+크림)",
                    contents: "초코",
                    childsList: [],
                    optionsId: 0,
                    itemType: "normal",
                    itemNumber: 1,
                },
                {
                    price: 0,
                    category: "TASTE",
                    categoryTitle: "(시트+크림)",
                    contents: "초코",
                    childsList: [],
                    optionsId: 0,
                    itemType: "image",
                    itemNumber: 2,
                },
            ],
            productImage1: "",
            productImage2: "",
            productImage3: "",
            productImage4: "",
            productImage5: "",
        }
    );
}

export default Cake_Detail_Static_TestData;