import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '../../../src/styles/mypage/MypageSection.scss'

import MypageSectionPC from 'src/components/mypage/pc/MypageSectionPC';
import MypageSectionMobile from 'src/components/mypage/mobile/MypageSectionMobile';
import designClick from 'src/utils/designClick';

import { ReactComponent as Menu } from '../../assets/mypage/menu.svg';
import { ReactComponent as Coin } from '../../assets/seller/coin.svg';
import { ReactComponent as SpeechBubble } from '../../assets/mypage/speech-bubble.svg';
import { ReactComponent as CPicon } from '../../assets/coupon.svg';
import { ReactComponent as SettingIcon } from '../../assets/seller/setting.svg';

import { ReactComponent as Question } from '../../assets/seller/question.svg';


function MypageSection (){

    return(
        <>
            <MypageSectionPC/>
            <MypageSectionMobile/>
        </>
    )
}


export default MypageSection;