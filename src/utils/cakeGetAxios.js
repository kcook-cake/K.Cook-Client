import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

const cakeGetAxios = (fn, fnLength, link, page, num) => {

  axios
    .get(`https://prod.kcook-cake.com/app/` + link + "?page=" + page)
    .then((res) => {
        console.log(res);
        const data = res.data.result.content;
        fnLength(data.length);

        var changeData = [];
        for (var i = 0; i < data.length; i++) {
            changeData[i] = res.data.result.content[i];
        }
        for (var i = data.length; i < 24; i++) {
            changeData[i] = {
                image: null,
                name: "~준비중 입니다~",
                price: 0,
                storeName: "~준비중 입니다~",

                productId: 0,
                popularRank: 0,
            };
        }
        fn(changeData);
    })
    .catch((error) => {
        fnLength(24);
        var changeData = [];
        for (var i = 0; i < 24; i++) {
            changeData[i] = {
                image: null,
                name: "~준비중 입니다~",
                price: 0,
                storeName: "~준비중 입니다~",

                productId: 0,
                popularRank: 0,
            };
        }
        fn(changeData);
    });
};

export default cakeGetAxios;
