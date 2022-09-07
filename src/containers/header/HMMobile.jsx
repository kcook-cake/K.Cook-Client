import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/header/Header.scss";
import "../../styles/header/HMMobile.scss";

import $ from 'jquery';

import HMCard from "../../components/header/common/HMCard";
import HMSCard from "src/components/header/common/HMSCard";
import HMMCard from "src/components/header/common/HMMCard";

function HMMobile ({ session, auth, numLeftMobile, setNumLeftMobileF }) {
    useEffect(()=> {
    }, []);
    return (
        <div className="hm-mobile">
            {numLeftMobile == 1? <HMCard session={session} auth={auth} setNumLeftMobileF={setNumLeftMobileF}/> : <></>}
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
