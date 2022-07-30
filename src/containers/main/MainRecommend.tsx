import React,  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Url } from 'url';
import '../../../src/styles/main/MainRecommend.scss'

import axios from 'axios';

import {environment} from '../../enviroment/enviroment';
import LengthwiseCard from '../../components/LengthwiseCard';
import SectionTitle from '../../components/SectionTitle';

const Recommend = ()=>{
    const [data, setData] = useState([]);
    // console.log(environment.apiUrl);
    useEffect(()=>{
        // axios.get(`https://www.kcook-cake.com/app/cakes`)
        axios.get(`https://prod.kcook-cake.com/app/cakes`)
            .then(res =>{
                var num = 4;
                if (res.data.result.content.length < 4) num = res.data.result.content.length;

                var changeData: any = [];
                for (var i = 0; i < num; i++) {
                    changeData[i] = res.data.result.content[i];
                }
                for (var i = num; i < 4; i++) {
                    changeData[i] = {
                        isCake: true,
                        name: "~준비중 입니다~",
                        price: 0,
                        productId: 0,
                        raiting: ".00",
                        resultPrice: 0,
                        reviewCount: 0,
                        salePrice: 0,
                        status: "VALID",
                        storeName: "~준비중 입니다~",
                        thumbnail: "",
                    }
                }
                setData(res.data.result.content);
            });

        // axios.get(`/app/stores/account/auth`)
        //     .then(res =>{
        //         console.log(res);
        //     });
    },[]);

    return(
        <div className="recommend-flex">
            <div className="recommend">
                <div className="recommend-header">
                    <SectionTitle title="오늘의 추천" link="TodaysRec"/>
                </div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={data} link="TodaysRec"/>
                </div>
            </div>
        </div>
    )
}


export default Recommend;