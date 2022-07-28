import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';

import SSO_SSH_PcCard from '../card/pc/SSO_SSH_PcCard';

function SellerOrderPC (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="seller-mypage-top-flex sso-pc">
            <div className="seller-mypage-top sso-ssh-top">
                <h3>주문확인</h3>
                <span>처리할 예약 주문입니다.</span>
                <div className='ss-fc-link-flex'>
                    <Link
                        to='/FullCalendarApp'
                        className='ss-fc-link'
                        onClick={()=>{
                            LinkClick("FullCalendarApp");
                            sellerLinkClick("FullCalendarApp");
                        }}
                    >달력보기</Link>
                    |
                    <Link
                        to='/SellerOrder'
                        className='ss-fc-link'
                        style={{ color: "#ea5450", }}
                        onClick={()=>{
                            LinkClick("SellerOrder");
                            sellerLinkClick("SellerOrder");
                        }}
                    >목록보기</Link>
                </div>
            </div>

            <SSO_SSH_PcCard getData={data}/>
            {/* <div className="history-contents">
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
            </div> */}
        </div>
    )
}


export default SellerOrderPC;