import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import MainCrousel from '../components/main/Crousel';
import MainRecommend from './main/MainRecommend';
import MainCake from './main/MainCake';
import MainAd from '../components/main/MainAd';
import MainUpdate from './main/MainUpdate';



function Home (){
    return(
    <Router>
        <MainCrousel/>
        <MainRecommend/>
        <MainCake/>
        <MainAd/>
        <MainUpdate/>
    </Router>   
    )
}



export default Home;