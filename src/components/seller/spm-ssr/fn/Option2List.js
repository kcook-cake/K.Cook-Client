import React, { useState, useEffect } from "react";
import axios from "axios";
import $, { get } from "jquery";

const Option2List = (getData) => {
    const category = {
        "사이즈": "SIZE",
        "맛": "TASTE",
        "색상": "COLOR",
        "디자인": "DESIGN",
        "사이드데코": "SIDE_DECO",
        "데코": "DECO",
        "레터링": "LOWER_LETTERING",
        "글씨체": "FONT",
        "글씨크기": "WRITE_SIZE",
        "사진": "PHOTO",
        "포장": "PACKAGE",
        "초": "CANDLE",
    };

    var chList = [];

    for (var i=0; i<getData.length; i++) {
        var c = getData[i].optionName.split("(")[0];
        var cTitle = getData[i].optionName.split("(")[1];
        
        if (category[c] === undefined) c = "ETC";
        else c = category[c];

        if (cTitle === undefined) cTitle = "";
        else cTitle = "("+cTitle;

        for (var j=0; j<getData[i].itemList.length; j++) {
            chList.push({
                additionalCost: getData[i].itemList[j].itemPrice,
                category: c,
                categoryTitle: cTitle,
                child: getData[i].itemList[j].itemChild,
                contents: getData[i].itemList[j].itemName,
                imageUrl: "",
                itemNumber: getData[i].itemList[j].itemNumber,
                itemType: getData[i].itemList[j].itemType
            });
        }
    }

    return chList;
};

export default Option2List;
