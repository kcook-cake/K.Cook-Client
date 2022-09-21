import React, { useState, useEffect } from "react";
import axios from "axios";
import $, { get } from "jquery";

const List2Option = (fn, getData) => {
    console.log(getData);
    var option = [];
    var optionTF = [];
    for (var i=0; i<6; i++) optionTF[i] = false;
    var j = -1;
    // {
    //     optionId: 2,
    //     optionName: '맛',
    //     optionList: [
    //       {
    //         optionListId: 1,
    //         optionListName: '딸기',
    //         optionListPrice: 1000,
    //       },
    //     ],
    //     optionImage: false,
    //     optionImageText: '',
    // },
    for (var i=0; i<getData.length; i++) {
        var c = ''; var oid = 0;
        if (getData[i].category === 'SIZE') { c = '크기'; oid = 1; }
        else if (getData[i].category === 'TASTE') { c = '맛'; oid = 2; }
        else if (getData[i].category === 'COLOR') { c = '색상'; oid = 3; }
        else if (getData[i].category === 'CANDLE') { c = '초'; oid = 4; }
        else if (getData[i].category === 'LOWER_LETTERING') { c = '레터링'; oid = 5; }
        else { c = '기타'; oid = 6; optionTF[5] = true; }

        if (optionTF[oid-1]) {
            option[j].optionList.push({
                optionListId: option[j].optionList.length+1,
                optionListName: getData[i].contents,
                optionListPrice: getData[i].additionalCost,
            })
        } 
        else {
            option.push({
                optionId: option.length+1,
                optionName: c,
                optionList: [{
                    optionListId: 1,
                    optionListName: getData[i].contents,
                    optionListPrice: getData[i].additionalCost,
                }],
                optionImage: false,
                optionImageText: '',
            });
            optionTF[oid-1] = true;
            j++;
        }

        // if ()
    }
    fn(option);
};

export default List2Option;
