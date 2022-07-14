import React,  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Url } from 'url';
import '../../../src/styles/main/MainRecommend.scss'

import axios from 'axios';

import {environment} from '../../enviroment/enviroment';
import LengthwiseCard from '../../components/LengthwiseCard';
import SectionTitle from '../../components/SectionTitle';

const Recommend = ()=>{
    let [data, setData] =useState([]);
    // console.log(environment.apiUrl);
    useEffect(()=>{
        // axios.get(`https://www.kcook-cake.com/app/cakes`)
        axios.get(`https://prod.kcook-cake.com/app/cakes`)
            .then(res =>{
                setData(res.data);
            });
    },[]);
    return(
        <div className="recommend-flex">
            <div className="recommend">
                <div className="recommend-header">
                    <SectionTitle title="오늘의 추천"/>
                </div>
                <div className="recommend-contents">
                    {/* <LengthwiseCard getData={data}/> */}
                    <LengthwiseCard id={1} name='aaaaaaabbbaa' userName='a' price={5000}/>
                    <LengthwiseCard id={1} name='aaaaaaaaaaa' userName='a' price={5000}/>
                    <LengthwiseCard id={1} name='aaaaaaaaabba' userName='a' price={5000}/>
                    <LengthwiseCard id={1} name='aaaaaaaaaaa' userName='a' price={5000}/>
                </div>
            </div>
        </div>
    )
}


export default Recommend;