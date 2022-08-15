import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LengthwiseCard from '../../components/LengthwiseCard';
import '../../../src/styles/card/main/Cake_Store_TitleCard.scss'

import getAxios from 'src/utils/getAxios';

interface Props {
    detail: any,
    setDetailF: any,
}

function Cake_Store_TitleCard ({ detail, setDetailF, }:Props){

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



export default Cake_Store_TitleCard;



