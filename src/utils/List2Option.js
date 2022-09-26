import React, { useState, useEffect } from "react";
import axios from "axios";
import $, { get } from "jquery";

const List2Option = (getData) => {
    const category = {
        "SIZE": "크기&0",
        "TASTE": "맛&1",
        "COLOR": "색상&2",
        "DESIGN": "디자인&3",
        "SIDE_DECO": "사이드데코&4",
        "DECO": "데코&5",
        "LOWER_LETTERING": "레터링&6",
        "FONT": "글씨체&7",
        "WRITE_SIZE": "글씨크기&8",
        "PHOTO": "사진&9",
        "PACKAGE": "포장&10",
        "CANDLE": "초&11",
        "ETC": "기타&12",
    };

    var chOptionList = [];
    var chOptionListTF = []; //
    for (var i=0; i<13; i++) chOptionListTF[i] = true; //
    
    var j = -1;
    for (var i=0; i<getData.length; i++) {
        var c = category[getData[i].category];
        // var c = category[getData[i].category].split("&")[0];
        var oid = category[getData[i].category].split("&")[1]; //

        // if (getData[i].itemNumber === 0) {
        if (chOptionListTF[oid]) { //
            chOptionList.push({
                optionId: true,
                optionNumber: chOptionList.length,
                optionName: c+getData[i].categoryTitle,
                itemList: [{
                    itemId: getData[i].optionsId,
                    itemNumber: 0,
                    itemType: "normal", //
                    // itemType: getData[i].itemType,
                    itemName: getData[i].contents,
                    itemPrice: getData[i].additionalCost,
                    itemChild: getData[i].childOptionsList,
                }],
            });
            chOptionListTF[oid] = false; //
            j++;
        }
        else {
            chOptionList[j].itemList.push({
                itemId: getData[i].optionsId,
                itemNumber: 1, //
                // itemNumber: chOptionList[j].itemList.length,
                // itemType: getData[i].itemType,
                itemType: "normal", //
                itemName: getData[i].contents,
                itemPrice: getData[i].additionalCost,
                itemChild: getData[i].child,
            })
        }
    }
    return chOptionList;
};

export default List2Option;
