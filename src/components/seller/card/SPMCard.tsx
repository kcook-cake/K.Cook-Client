import React from 'react';
import '../../../styles/card/seller/SPMCard.scss';

import cake6 from   '../../../assets/cake6.png';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

interface Props {
    getData: any
}

function SPMCard({getData}: Props) {
    return (
        <>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="spm-pc-card">
                        <div className="spm-pc-add-section">
                            <div className="move-tap"><DragBtn/></div>
                            <div className="spm-pc-add-content">
                                
                                <div className="pc ss-all-order-img">
                                    <img src={cake6}/>
                                </div>    
                                <div className="ssr-content">
                                    <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                                    <div className="order-cake-shop">호수 : 1호, 2호, 3호, 4호</div>
                                    <div className="order-cake-shop">맛 : 생크림, 스트로베리, 고구마</div>
                                    {/* <div className="order-cake-shop">기타</div> */}
                                </div>
                                <div className="mobile ss-all-order-img">
                                    <img src={cake6}/>
                                </div>    
                            </div>
                        </div>
                        <div className="pc management-tap">
                            <button className="delete-btn"><CloseBtn/></button>
                            <button className="copy-btn"><CopyBtn/></button>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default SPMCard;