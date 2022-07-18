import React, { useState, useEffect } from "react";
import axios from "axios";

const isSession = (fn) => {
    // sessionStorage.removeItem('jwToken')
    axios
        .get(`/app/accounts/auth`, {
            headers: {
                'X-ACCESS-TOKEN': sessionStorage.jwToken,
            }
        })
        .then((res) => {
            // console.log(res.data.isSuccess)
            if(fn != null) fn(res.data.isSuccess);
        })
        .catch((error) => {
            // console.log(error.response.data.isSuccess)
            sessionStorage.removeItem("jwToken");
            if(fn != null) fn(false);
        });
}

export default isSession;