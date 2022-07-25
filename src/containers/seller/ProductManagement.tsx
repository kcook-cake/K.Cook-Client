import React from 'react';
import '../../styles/mypage/OrderHistory.scss';
import '../../styles/seller/ProductManagement.scss';
import cake6 from   '../../assets/cake6.png';
import { ReactComponent as AddIcon } from '../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../assets/seller/drag-column-btn.svg';

import { Link } from 'react-router-dom';
import ProductManagementPC from 'src/components/seller/pc/ProductManagementPC';
import ProductManagementMobile from 'src/components/seller/mobile/ProductManagementMobile';

function ProductManagement (){
    return(
        <>
            <ProductManagementPC/>
            <ProductManagementMobile/>
        </>
    )
}


export default ProductManagement;