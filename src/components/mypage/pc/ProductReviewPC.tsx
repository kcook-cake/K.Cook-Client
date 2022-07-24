import React from 'react';
import '../../../styles/mypage/ProductReview.scss';
import cake6 from   '../../../assets/cake6.png';

function ProductReviewPC (){
    return(
        <div className="mp-top product-review mprp">
            <div className="mypage-top">
                <h3>상품후기</h3>
                <span>후기를 작성하고 포인트를 받으세요</span>
            </div>
            <div className="review-contents">
                <div className="review-content">
                    <div className="review-img">
                        <img src={cake6}/>
                    </div>    
                    <div className="review-info">
                        <div className="review-cake">하트볼터치 곰돌이 케이크</div>
                        <div className="review-option">
                        2021. 03. 11  14:00  1호  29,000원
                        </div>
                        <button className="review-button">후기 작성하기 <span>( +적립금 500원)</span></button>
                    </div>
                </div>
                <div className="review-content">
                    <div className="review-img">
                        <img src={cake6}/>
                    </div>    
                    <div className="review-info">
                        <div className="review-cake">하트볼터치 곰돌이 케이크</div>
                        <div className="review-option">
                        2021. 03. 11  14:00  1호  29,000원
                        </div>
                        <button className="review-button">후기 작성하기 <span>( +적립금 500원)</span></button>
                    </div>
                </div>
                <div className="review-content">
                    <div className="review-img">
                        <img src={cake6}/>
                    </div>    
                    <div className="review-info">
                        <div className="review-cake">하트볼터치 곰돌이 케이크</div>
                        <div className="review-option">
                        2021. 03. 11  14:00  1호  29,000원
                        </div>
                        <button className="review-button">후기 작성하기 <span>( +적립금 500원)</span></button>
                    </div>
                </div>
                <div className="review-content">
                    <div className="review-img">
                        <img src={cake6}/>
                    </div>    
                    <div className="review-info">
                        <div className="review-cake">하트볼터치 곰돌이 케이크</div>
                        <div className="review-option">
                        2021. 03. 11  14:00  1호  29,000원
                        </div>
                        <button className="review-button">후기 작성하기 <span>( +적립금 500원)</span></button>
                    </div>
                </div>
                

            </div>
        </div>
        
    )
}


export default ProductReviewPC;