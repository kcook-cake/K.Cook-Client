import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../../../styles/main/home/Home.scss';

import MainCrousel from '../../../components/main/home/Crousel';
import MainRecommend from './MainRecommend';
import MainCake from './MainCake';
import MainAd from '../../../components/main/home/MainAd';
import MainUpdate from './MainUpdate';

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