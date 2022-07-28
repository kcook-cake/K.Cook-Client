import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.scss";
import "../../styles/HMMobile.scss";

import $ from 'jquery';

import HMCard from "../../components/header/card/HMCard";
import HMSCard from "src/components/header/card/HMSCard";
import HMMCard from "src/components/header/card/HMMCard";

function HMMobile ({ numLeftMobile, setNumLeftMobileF }) {
    useEffect(()=> {
    }, []);
    return (
        <div className="hm-mobile">
            {numLeftMobile == 1? <HMCard setNumLeftMobileF={setNumLeftMobileF}/> : <></>}
            {numLeftMobile == 2? <HMSCard setNumLeftMobileF={setNumLeftMobileF}/> : <></>}
            {numLeftMobile == 3? <HMMCard setNumLeftMobileF={setNumLeftMobileF}/> : <></>}
            <div
                className="hm-mobile-background"
                onClick={()=>{
                    $(".hm-mobile").hide();
                }}
            ></div>
        </div>
    );
}

export default HMMobile;
