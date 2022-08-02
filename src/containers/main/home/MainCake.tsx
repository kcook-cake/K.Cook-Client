import React, { useEffect, useState } from 'react';
import '../../../styles/main/MainCake.scss'
import '../../../styles/main/MainRecommend.scss'

import axios from 'axios';

import SectionTitle from '../../../components/SectionTitle';
import WidthwiseCard from '../../../components/WidthwiseCard';
import getAxios from 'src/utils/getAxios';

function MainCake (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <div className="home-cake-flex">
            <div className="home-cake home">
                <div className="title">
                    <SectionTitle title="케이크" link="Cake" />
                </div>
                <div className="contents">
                    <WidthwiseCard getData={data}/>
                </div>
            </div>
        </div>
    )
}


export default MainCake;