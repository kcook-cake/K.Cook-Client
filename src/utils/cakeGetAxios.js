import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

const cakeGetAxios = (fn, fnLength, link, page, num) => {
    var p = "";
    if (page != 0) p = "?page="+page;

    axios
        .get(`https://prod.kcook-cake.com/app/` + link + p)
        .then((res) => {
            const data = res.data.result.content;

            var changeData = [];
            for (var i = 0; i < data.length; i++) {
                changeData[i] = res.data.result.content[i];
            }
            for (var i = data.length; i < num; i++) {
                changeData[i] = {
                    image: null,
                    name: "~준비중 입니다~",
                    price: 0,
                    storeName: "~준비중 입니다~",

                    productId: 0,
                    popularRank: 0,
                };
            }
            var len = [];
            len[0] = Math.ceil(121/12);
            fnLength(len);
            fn(changeData);
        })
        .catch((error) => {
            var changeData = [];
            for (var i = 0; i < num; i++) {
                changeData[i] = {
                    image: null,
                    name: "~준비중 입니다~",
                    price: 0,
                    storeName: "~준비중 입니다~",

                    productId: 0,
                    popularRank: 0,
                };
            }
            var len = [];
            len[0] = Math.ceil(num/12);
            fnLength(len);
            fn(changeData);
        });
};

export default cakeGetAxios;
