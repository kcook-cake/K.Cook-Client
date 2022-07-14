import React, { useState, useEffect } from "react";
import axios from "axios";

const isSession = (fn) => {
    // localStorage.removeItem('jwToken')
    axios
        .get(`/app/accounts/auth`, {
            headers: {
                'X-ACCESS-TOKEN': localStorage.jwToken,
            }
        })
        .then((res) => {
            // console.log(res.data.isSuccess)
            localStorage.setItem("session", res.data.isSuccess);
            if(fn != null) fn(res.data.isSuccess);
        })
        .catch((error) => {
            // console.log(error.response.data.isSuccess)
            localStorage.removeItem("session");
            localStorage.removeItem("jwToken");
        });
}

export default isSession;