import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'src/styles/main/card/cake-store/CakeStoreTitle.scss'

import getAxios from 'src/utils/getAxios';

interface Props {
    detail: any,
    setDetailF: any,
}

function CakeStoreTitle ({ detail, setDetailF, }:Props){

    return(
        <>
            <div className="cake-store">
                <div
                    className={"cake-store-right cake-store-"+(!detail? "dummy": "")}
                    onClick={()=>{
                        setDetailF(false);
                    }}>
                    더보기&gt;
                </div>
            </div>
        </>
    )
}



export default CakeStoreTitle;



