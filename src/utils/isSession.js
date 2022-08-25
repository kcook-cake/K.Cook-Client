import React, { useState, useEffect } from "react";
import axios from "axios";
// import $ from 'jquery';
// window.$ = $;
const isSession = (jwToken, fn, fn2) => {
    // sessionStorage.removeItem('jwToken')
    axios
        .get(`https://prod.kcook-cake.com/app/accounts/auth`, {
            headers: {
                'X-ACCESS-TOKEN': jwToken,
            }
        })
        .then((res) => {
            if(fn != null) fn(res.data.isSuccess);
            if(fn2 != null) fn2(res.data.result);
        })
        .catch((error) => {
            localStorage.removeItem("jwToken");
            sessionStorage.removeItem("jwToken");
            if(fn != null) fn(false);
        });
}

export default isSession;