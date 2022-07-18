import React, { useEffect, useState } from 'react';
import '../../styles/main/MainCake.scss'
import '../../styles/main/MainRecommend.scss'

import axios from 'axios';
import {environment} from '../../enviroment/enviroment';

import SectionTitle from '../../components/SectionTitle';
import WidthwiseCard from '../../components/WidthwiseCard';

function MainCake (){
    let [data, setData] =useState([]);
    // console.log(environment.apiUrl);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);

    return(
        <div className="main-cake-flex">
            <div className="main-cake">
                <div className="recommend-header">
                    <SectionTitle title="케이크" link="/Cake" />
                </div>
                <div className="cake-contents">
                    <WidthwiseCard getData={data}/>
                </div>
            </div>
        </div>
    )
}


export default MainCake;