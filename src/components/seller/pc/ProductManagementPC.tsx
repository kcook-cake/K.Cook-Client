import React from 'react';
import '../../../styles/mypage/OrderHistory.scss';
import '../../../styles/seller/ProductManagement.scss';
import cake6 from   '../../../assets/cake6.png';
import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import { Link } from 'react-router-dom';

function ProductManagementPC (){
    return(
        <div className="mp-top product-management spmp">
            <div className="mypage-top">
                <h3>상품관리</h3>
                <span>현재 판매 중인 상품입니다.</span>
            </div>
            <div className="management-card-list">
                <div className="management-card">
                    <div className="management-section">
                        <div className="move-tap"><DragBtn/></div>
                        <div className="management-content">
                            
                            <div className="order-img">
                                <img src={cake6}/>
                            </div>    
                            <div className="order-content seller-order-content">
                                <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                                <div className="order-cake-shop">호수 : 1호, 2호, 3호, 4호</div>
                                <div className="order-cake-shop">맛 : 생크림, 스트로베리, 고구마</div>
                                <div className="order-cake-shop">기타</div>
                            </div>
                        </div>
                    </div>
                    <div className="management-tap">
                        <button className="delete-btn"><CloseBtn/></button>
                        <button className="copy-btn"><CopyBtn/></button>
                    </div>
                </div>
                <div className="add management-card">
                    <div className="management-section">
                        <div className="move-tap"><DragBtn/></div>
                        <div className="management-content">
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
            </div>
            <div className="option-add-btn">
                <AddIcon/>
            </div>
            
        </div>
    )
}


export default ProductManagementPC;