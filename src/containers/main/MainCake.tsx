import React, { useEffect, useState } from 'react';
import '../../styles/main/MainCake.scss'
import '../../styles/main/MainRecommend.scss'

import axios from 'axios';
import {environment} from '../../enviroment/enviroment';

import SectionTitle from '../../components/SectionTitle';
import WidthwiseCard from '../../components/WidthwiseCard';

function MainCake (){
    let [data, setData] =useState([]);
    console.log(environment.apiUrl);
    useEffect(()=>{
        axios.get(`https://www.kcook-cake.com/app/cakes`)
            .then(res =>{
                console.log(res);
                setData(res.data);
            });
    },[]);

    return(
        <div className="main-cake-flex">
            <div className="main-cake">
                <div className="recommend-header">
                    <SectionTitle title="케이크" link="/Cake" />
                </div>
                <div className="cake-contents">
                    {/* <WidthwiseCard getData={data}/> */}
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                </div>
            </div>
        </div>
    )
}


export default MainCake;