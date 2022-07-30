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
                setData(changeData);
            });
    },[]);

    return(
        <div className="main-cake-flex">
            <div className="main-cake">
                <div className="recommend-header">
                    <SectionTitle title="케이크" link="Cake" />
                </div>
                <div className="cake-contents">
                    <WidthwiseCard getData={data}/>
                </div>
            </div>
        </div>
    )
}


export default MainCake;