import React,  { useEffect, useState }from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Url } from 'url';
import '../../../src/styles/main/MainRecommend.scss'
import VerticalCard from '../../components/LengthwiseCard';
import SectionTitle from '../../components/SectionTitle';

import axios from 'axios';
import {environment} from '../../enviroment/enviroment';


let [data, setData] =useState([]);
const Recommend = ()=>{
        console.log(environment.apiUrl);
        useEffect(()=>{
            axios.get(`https://www.kcook-cake.com/app/cakes`)
                .then(res =>{
                    console.log(res);
                    setData(res.data);
                });
        },[]);
    return(
        <div className="recommend">
            <div className="recommend-header">
                <SectionTitle title="오늘의 추천"/>
            </div>
            <div className="recommend-contents">
                <VerticalCard getData={data}/>
                {/* <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/> */}
            </div>
        </div>
    )
}


export default Recommend;