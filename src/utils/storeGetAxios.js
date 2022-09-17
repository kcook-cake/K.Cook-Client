import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

const storeGetAxios = (fn, fnLength, link, page, num) => {
    var p = "";
    if (page != 0) p = "?page="+page;

    axios
        .get(`/app/` + link + p)
        .then((res) => {
            const data = res.data.result.content;

            var changeData = [];
            for (var i = 0; i < data.length; i++) {
                changeData[i] = res.data.result.content[i];
            }
            for (var i = data.length; i < num; i++) {
                changeData[i] = {
                    image: null,
                    accountName: "~준비중 입니다~",
                    address: "~준비중 입니다~",
                    area: "~준비중 입니다~",
                    contact: "~준비중 입니다~",
                    name: "~준비중 입니다~",
                    status: "BLACKLIST",
                    storeId: 0
                };
            }
            var len = [];
            for (var i=0; i<data.length/9; i++)
                len[i] = { num: i+1 }
            fnLength(len);
            fn(changeData);
        })
        .catch((error) => {
            var changeData = [];
            for (var i = 0; i < num; i++) {
                changeData[i] = {
                    image: null,
                    accountName: "~준비중 입니다~",
                    address: "~준비중 입니다~",
                    area: "~준비중 입니다~",
                    contact: "~준비중 입니다~",
                    name: "~준비중 입니다~",
                    status: "BLACKLIST",
                    storeId: 0
                };
            }
            fnLength([{num: 1}]);
            fn(changeData);
        });
};

export default storeGetAxios;
