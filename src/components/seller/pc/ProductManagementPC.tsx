import React, { useState, useEffect } from 'react';
import axios from 'axios';

import cake6 from   '../../../assets/cake6.png';
import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import { Link } from 'react-router-dom';
import SPM_PcCard from '../card/pc/SPM_PcCard';

interface Props {
    getData: any,
}

function ProductManagementPC ({getData}:Props){
    return(
        <div className="seller-mypage-top-flex spm-pc">
            <div className="seller-mypage-top">
                <h3>상품관리</h3>
                <span>현재 판매 중인 상품입니다.</span>
            </div>

            <SPM_PcCard getData={getData} />

                <div className="spm-pc-add">
                    <div className="spm-pc-add-section">
                        <div className="move-tap"><DragBtn/></div>
                        <div className="spm-pc-add-content">
                            <div className="add-img order-img">
                                <AddIcon/>
                            </div>    
                            <div className="move-column-tap"><DragCBtn/></div>
                            <div className="order-content seller-order-content">
                                <input className="add-cake-name" placeholder="옵션 이름"></input>
                                <div className="add-option">
                                    <button className="add-option-btn">+ 옵션 추가</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="management-tap">
                        <button className="delete-btn"><CloseBtn/></button>
                        <button className="copy-btn"><CopyBtn/></button>
                    </div>
                </div>

            <div className="option-add-btn">
                <AddIcon/>
            </div>
            
        </div>
    )
}


export default ProductManagementPC;