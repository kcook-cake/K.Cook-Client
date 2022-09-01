import React,  { useEffect, useState }from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss'

import axios from 'axios';

import getAxios from 'src/utils/getAxios';
import SectionTitle from 'src/components/main/card/SectionTitle';
import StoreCard from 'src/components/main/card/StoreCard';

function StoreMenu (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        getAxios(setData, setDataLength, "stores/representative", [], 3, 0, 0);
    },[]);

    return(
        <div className="">
            <div className="cake-store-menu storemenu home">
                <div className="title">
                    <SectionTitle title="스토어" link="Store"/>
                </div>
                <div className="contents">
                    <StoreCard getData={data} cakeDetail={false}/>
                </div>
            </div>
        </div>
    )
}


export default StoreMenu;