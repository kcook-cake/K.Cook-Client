import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

const storeCakeGetAxios = (fn, fnLength, link, page, num) => {
    var p = "";
    if (page != 0) p = "?page="+page;

    axios
        .get(`/app/` + link + p)
        .then((res) => {
            var n = 0;
            const data = res.data.result.content;
            if (data.length > num) n = num;
            else n = data.length;

            var changeData = [];
            for (var i = 0; i < n; i++) {
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
            for (var i=0; i<31/8; i++) //data.length
                len[i] = { num: i+1 }
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
            fnLength([{num: 1}]);
            fn(changeData);
        });
};

export default storeCakeGetAxios;
