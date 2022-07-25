import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.scss";
import "../../styles/HeaderMobile.scss";

import isSession from "../../utils/isSession";
import designClick from "../../utils/designClick";
import axios from "axios";
import $ from 'jquery';

import HMCard from "../../components/header/card/HMCard";
import HSMCard from "src/components/header/card/HSMCard";
import HMMCard from "src/components/header/card/HMMCard";

import Xbutton from "../../assets/2477.svg"
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import search from "../../assets/search.svg";

function HeaderMobile ({ numLeftMobile, setNumLeftMobileF }) {
    useEffect(()=> {
    }, []);
    return (
        <div className="hm">
            {numLeftMobile == 1? <HMCard setNumLeftMobileF={setNumLeftMobileF}/> : <></>}
            {numLeftMobile == 2? <HSMCard setNumLeftMobileF={setNumLeftMobileF}/> : <></>}
            {numLeftMobile == 3? <HMMCard setNumLeftMobileF={setNumLeftMobileF}/> : <></>}
            <div
                className="hm-background"
                onClick={()=>{
                    $(".hm").hide();
                }}
            ></div>
        </div>
    );
}

export default HeaderMobile;
