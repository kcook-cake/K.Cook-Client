import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

const getAxios = (fn, fnPage, link, list, num, page, pageAdd) => {
  var listLink = "";
  for (var i = 0; i < list.length; i++) listLink += "/" + list[i];

  axios
    .get(`https://prod.kcook-cake.com/app/` + link + listLink)
    .then((res) => {
      const data = res.data.result.content;
      fnPage(data.length);

      var num1 = page * num + pageAdd;
      var num2 = data.length;
      var num3 = (page + 1) * num + pageAdd;
      if (num2 > num3) num2 = num3;

      var changeData = [];
      for (var i = num1; i < num2; i++) {
        changeData[i] = res.data.result.content[i];
      }
      for (var i = num2; i < num3; i++) {
        changeData[i] = {
          image: null,
          isCake: true,
          name: "~준비중 입니다~",
          price: 0,
          productId: 0,
          raiting: ".00",
          resultPrice: 0,
          reviewCount: 0,
          salePrice: 0,
          status: "VALID",
          storeName: "~준비중 입니다~",
        };
      }
      fn(changeData);
    })
    .catch((error) => {
      fnPage((page + 1) * num + pageAdd);
      var changeData = [];
      for (var i = 0; i < (page + 1) * num + pageAdd; i++) {
        changeData[i] = {
          image: null,
          isCake: true,
          name: "~준비중 입니다~",
          price: 0,
          productId: 0,
          raiting: ".00",
          resultPrice: 0,
          reviewCount: 0,
          salePrice: 0,
          status: "VALID",
          storeName: "~준비중 입니다~",
        };
      }
      fn(changeData);
    });
};

export default getAxios;
