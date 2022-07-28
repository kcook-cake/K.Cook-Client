import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/ProductManagement.scss';

import ProductManagementPC from 'src/components/seller/pc/ProductManagementPC';
import ProductManagementMobile from 'src/components/seller/mobile/ProductManagementMobile';

function ProductManagement (){
    useEffect(()=>{
    },[]);
    return(
        <>
            <ProductManagementPC/>
            <ProductManagementMobile/>
        </>
    )
}


export default ProductManagement;