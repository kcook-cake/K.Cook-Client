import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../../../styles/main/home/Home.scss';

import MainCrousel from '../../../components/main/home/Crousel';
import NewMenu from './NewMenu';
import MainAd from '../../../components/main/home/MainAd';
import CakeMenu from './CakeMenu';
import StoreMenu from './StoreMenu';
import LinkClick from 'src/utils/LinkClick';
import PopularMenu from './PopularMenu';

function Home (){
    useEffect(()=>{
        LinkClick("Home");
    },[]);
    return(
    <>
        <MainCrousel/>
        <PopularMenu/>
        <NewMenu/>
        <MainAd/>
        <CakeMenu/>
        <StoreMenu/>
    </>
    )
}



export default Home;