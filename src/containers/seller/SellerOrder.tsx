import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/SSO_SSH.scss';

import cake6 from   '../../assets/cake6.png';
import SellerOrderPC from 'src/components/seller/pc/SellerOrderPC';
import SellerOrderMobile from 'src/components/seller/mobile/SellerOrderMobile';

function SellerOrder (){
    return(
        <>
            <SellerOrderPC/>
            <SellerOrderMobile/>
        </>
    )
}

export default SellerOrder;