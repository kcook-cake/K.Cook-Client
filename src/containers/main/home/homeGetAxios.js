import React, { useState, useEffect } from "react";
import axios from "axios";

const homeGetAxios = (setData, changeData, link, page) => {
    axios
        .get(`https://prod.kcook-cake.com/app/` + link + "?page=" + page)
        .then((res) => {
            var d = res.data.result.content;
            var j = 0;
            for (var i = (page-1)*4; i < (page-1)*4+d.length; i++) {
                changeData[i] = (res.data.result.content[j]);
                j++;
            }
            for (var i = ((page-1)*4+(d.length)); i < page*4; i++) {
                changeData[i] = ({
                    image: null,
                    name: "~준비중 입니다~",
                    price: 0,
                    storeName: "~준비중 입니다~",

                    productId: 0,
                    popularRank: 0,

                    status: null,
                    isCake: null,

                    raiting: null,
                    salePrice: null,
                    resultPrice: null,
                    reviewCount: null,
                });
            }
            if (page == 5)
                setData(changeData);
            else 
                homeGetAxios(setData, changeData, link, page+1);
        })
        .catch((err) => {
            for (var i = (page-1)*4; i < page*4; i++) {
                changeData[i] = ({
                    image: null,
                    name: "~준비중 입니다~",
                    price: 0,
                    storeName: "~준비중 입니다~",

                    productId: 0,
                    popularRank: 0,

                    status: null,
                    isCake: null,

                    raiting: null,
                    salePrice: null,
                    resultPrice: null,
                    reviewCount: null,
                });
            }
            if (page == 5)
                setData(changeData);
            else 
                homeGetAxios(setData, changeData, link, page+1);
        });
};

export default homeGetAxios;
