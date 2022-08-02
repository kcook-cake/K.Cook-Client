import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../styles/main/home/Home.scss';

import MainCrousel from '../components/main/Crousel';
import MainRecommend from './main/home/MainRecommend';
import MainCake from './main/home/MainCake';
import MainAd from '../components/main/MainAd';
import MainUpdate from './main/home/MainUpdate';

function Home (){
    return(
    <>
        <MainCrousel/>
        <MainRecommend/>
        <MainCake/>
        <MainAd/>
        <MainUpdate/>
    </>
    )
}



export default Home;