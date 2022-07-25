import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import $ from 'jquery';
import '../../../src/styles/seller/SellerSection.scss';

import designClick from 'src/utils/designClick';

import { ReactComponent as SellerHouse } from '../../assets/3170.svg';
import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as Cube } from '../../assets/seller/cube.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';
import { ReactComponent as Question } from '../../assets/seller/question.svg';
import SellerSectionPC from 'src/components/seller/pc/SellerSectionPC';

function SellerSection (){

    return(
        <>
            <SellerSectionPC/>
        </>
    )
}


export default SellerSection;