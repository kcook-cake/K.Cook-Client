import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '../../styles/seller/FullCalendarApp.scss';

import FullCalendarAppPC from 'src/components/seller/pc/FullCalendarAppPC';
import FullCalendarAppMobile from 'src/components/seller/mobile/FullCalendarAppMobile';

function FullCalendarApp (){
  return(
    <>
        <FullCalendarAppPC/>
        <FullCalendarAppMobile/>
    </>

  )
}

export default FullCalendarApp;