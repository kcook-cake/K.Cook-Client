import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/SSO_SSH.scss';

import SalesHistoryPC from 'src/components/seller/pc/SalesHistoryPC';
import SalesHistoryMobile from 'src/components/seller/mobile/SalesHistoryMobile';

function SalesHistory (){
    return(
        <>
            <SalesHistoryPC />
            <SalesHistoryMobile/>
        </>
    )
}


export default SalesHistory;