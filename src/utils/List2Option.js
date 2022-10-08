import React, { useState, useEffect } from "react";
import axios from "axios";
import $, { get } from "jquery";

const List2Option = (getData) => {
    const category = {
        "SIZE": "사이즈",
        "TASTE": "맛",
        "COLOR": "색상",
        "DESIGN": "디자인",
        "SIDE_DECO": "사이드데코",
        "DECO": "데코",
        "LOWER_LETTERING": "레터링",
        "FONT": "글씨체",
        "WRITE_SIZE": "글씨크기",
        "PHOTO": "사진",
        "PACKAGE": "포장",
        "CANDLE": "초",
        "ETC": "기타",
    };

    var chOptionList = [];
    
    var j = -1;
    for (var i=0; i<getData.length; i++) {
        var c = category[getData[i].category];

        if (getData[i].itemNumber === 0) {
            chOptionList.push({
                optionId: true,
                optionNumber: chOptionList.length,
                optionName: c+getData[i].categoryTitle,
                itemList: [{
                    itemId: getData[i].optionsId,
                    itemNumber: 0,
                    itemType: getData[i].itemType,
                    itemName: getData[i].contents,
                    itemPrice: getData[i].price,
                    itemChild: getData[i].childsList,
                }],
            });
            j++;
        }
        else {
            chOptionList[j].itemList.push({
                itemId: getData[i].optionsId,
                itemNumber: chOptionList[j].itemList.length,
                itemType: getData[i].itemType,
                itemName: getData[i].contents,
                itemPrice: getData[i].price,
                itemChild: getData[i].childsList,
            })
        }
    }
    return chOptionList;
};

export default List2Option;
