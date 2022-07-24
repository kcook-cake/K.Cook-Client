import React from 'react';
import '../../../styles/mypage/OrderHistory.scss';
import cake6 from   '../../../assets/cake6.png';

function OrderHistoryPC (){
    return(
        <div className="mp-top mohp">
            <div className="mypage-top">
                <h3>주문내역</h3>
                <span>이전에 주문하신 내역입니다.</span>
            </div>
            <div className="history-contents">
                <div className="history-content">
                    <div className="order-img">
                        <img src={cake6}/>
                    </div>    
                    <div className="order-content">
                        <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                        <div className="order-cake-shop">원모먼트</div>
                        <div className="order-option">
                            옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                            <div className="order-time">21.02.15 17:00</div>
                        </div>
                        <div className="order-price">17,000원</div>
                    </div>
                </div>

                <div className="history-content">
                    <div className="order-img">
                        <img src={cake6}/>
                    </div>    
                    <div className="order-content">
                        <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                        <div className="order-cake-shop">원모먼트</div>
                        <div className="order-option">
                            옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                            <div className="order-time">21.02.15 17:00</div>
                        </div>
                        <div className="order-price">17,000원</div>
                    </div>
                </div>
                <div className="history-content">
                    <div className="order-img">
                        <img src={cake6}/>
                    </div>    
                    <div className="order-content">
                        <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                        <div className="order-cake-shop">원모먼트</div>
                        <div className="order-option">
                            옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                            <div className="order-time">21.02.15 17:00</div>
                        </div>
                        <div className="order-price">17,000원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OrderHistoryPC;