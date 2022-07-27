import React from 'react';
import { Link } from 'react-router-dom';

import designClick from 'src/utils/designClick';
import sellerDesignClick from 'src/utils/sellerDesignClick';

import '../../../styles/mypage/OrderHistory.scss';
import '../../../styles/seller/SellerOrder.scss';
import cake6 from   '../../../assets/cake6.png';

interface Props {
    setNumLeftMobileF: any,
}

function SalesHistoryPC (){
    return(
        <div className="mp-top seller-order sshp">
            <div className="mypage-top seller-order-top">
                <h3>판매내역</h3>
                <span>이전에 판매된 내역입니다.</span>
                <div className='order-view-type'>
                    <Link
                        to='/FullCalendarApp'
                        className='order-view view-calander'
                        onClick={()=>{
                            designClick("FullCalendarApp");
                            sellerDesignClick("FullCalendarApp");
                        }}
                    >달력보기</Link>
                    |
                    <Link
                        to='/SellerOrder'
                        className='order-view view-list' 
                        onClick={()=>{
                            designClick("SalesHistory");
                            sellerDesignClick("SalesHistory");
                        }}
                        style={{ color: "#ea5450", }}
                    >목록보기</Link>
                </div>
            </div>
            <div className="history-contents">
                <div className="seller-order-card">
                    <div className="order-time">오늘 15:00</div>
                    <div className="seller-bottom">
                        <div className="order-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="order-content seller-order-content">
                            <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                            <div className="order-cake-shop customer">정예빈 | 추가문의없음</div>
                            <div className="order-option">
                                옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                                <div className="pickup-time">주문시간 21.08.09 17:00  픽업 예정시간 21.08.11 15:00</div>
                            </div>
                            <div className="order-price">17,000원
                                <span className="pay">카드결제 완료</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history-contents">
                <div className="seller-order-card">
                    <div className="order-time">오늘 15:00</div>
                    <div className="seller-bottom">
                        <div className="order-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="order-content seller-order-content">
                            <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                            <div className="order-cake-shop customer">정예빈 | 추가문의없음</div>
                            <div className="order-option">
                                옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                                <div className="pickup-time">주문시간 21.08.09 17:00  픽업 예정시간 21.08.11 15:00</div>
                            </div>
                            <div className="order-price">17,000원
                                <span className="pay">카드결제 완료</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history-contents">
                <div className="seller-order-card">
                    <div className="order-time">오늘 15:00</div>
                    <div className="seller-bottom">
                        <div className="order-img">
                            <img src={cake6}/>
                        </div>    
                        <div className="order-content seller-order-content">
                            <div className="order-cake">하트볼터치 곰돌이 케이크</div>
                            <div className="order-cake-shop customer">정예빈 | 추가문의없음</div>
                            <div className="order-option">
                                옵션1. 사이즈 : 1호    옵션2. 맛 : 생크림    옵션3. 맛 : 인절미    옵션4. 하판레터링 : 선택안함    옵션5. 초 : 꼬불꼬불초 
                                <div className="pickup-time">주문시간 21.08.09 17:00  픽업 예정시간 21.08.11 15:00</div>
                            </div>
                            <div className="order-price">17,000원
                                <span className="pay">카드결제 완료</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SalesHistoryPC;