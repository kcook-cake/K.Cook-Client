import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '../../../src/styles/mypage/MypageSection.scss'

import MypageSectionPC from 'src/components/mypage/pc/MypageSectionPC';

function MypageSection (){

    return(
        <>
            <MypageSectionPC/>
        </>
    )
}


export default MypageSection;