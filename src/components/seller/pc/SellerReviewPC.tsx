import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/seller/SellerReview.scss';
import cake6 from   '../../../assets/cake6.png';

function SellerReviewPC (){
    return(
        <div className="mp-top seller-review ssrp">
            <div className="mypage-top">
                <h3>상품후기</h3>
                <span>고객분들이 남겨주신 후기입니다.</span>
            </div>
            <div className="seller-review-list">
                <div className="seller-review-card">
                    <div className="review order-time">오늘 15:00</div>
                    <div className="seller-bottom">
                        <div className="order-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="order-content seller-order-content">
                            <h3 className="ordered-cake">상품명 : 하트볼터치 곰돌이 케이크</h3>
                            <p className="review-content">기대했던 것 이상으로 맛있어서 깜짝 놀랐습니다!!<br/>디자인도 너무 귀엽네요^^</p>
                        </div>
                    </div>
                </div>
                <div className="seller-review-card">
                    <div className="review order-time">오늘 15:00</div>
                    <div className="seller-bottom">
                        <div className="order-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="order-content seller-order-content">
                            <h3 className="ordered-cake">상품명 : 하트볼터치 곰돌이 케이크</h3>
                            <p className="review-content">기대했던 것 이상으로 맛있어서 깜짝 놀랐습니다!!<br/>디자인도 너무 귀엽네요^^</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}


export default SellerReviewPC;