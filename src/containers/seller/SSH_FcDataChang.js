import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const SSH_FcDataChange = (fn, list) => {
    //달력 판매자 정보 list
    for(var i = 0; i < list.length; i++) {
        // e[i].id = i+1;
        if (list[i].title === 0)
            list[i].borderColor = "rgba(255, 255, 255, 0.0)";
        else
            list[i].borderColor = "white";
        list[i].title = `당일: ${list[i].todayTitle}\n
                주문: ${list[i].title}/${list[i].describe}`;
    }

    // if (TF) fn(em);
    // else fn(e);
    fn(list);
}

export default SSH_FcDataChange;