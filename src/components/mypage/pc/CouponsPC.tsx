import React from 'react';
import '../../../styles/mypage/Coupon.scss';

function CouponsPC (){
    return(
        <div className="mp-top coupon mcp">
        <div className="mypage-top coupon-top">
            <h3>내 쿠폰 : 3장</h3>
            <div className="coupon-code">
                <input placeholder="할인 쿠폰 번호를 입력하세요"></input>
                <button>등록하기</button>
            </div>
        </div>
        <div className="coupon-list">
            <div className="coupon-card">
                <h3 className="coupon-price">30000원</h3>
                <p className="coupon-name">오늘만 반값, 여름 특별 할인 쿠폰</p>
                <div className="coupon-bottom">
                    <div className="coupon-duedate">D-5</div>
                    <button className="using-coupon">사용하러 가기 &gt;</button>
                </div>
            </div>
            <div className="coupon-card">
                <h3 className="coupon-price">30000원</h3>
                <p className="coupon-name">오늘만 반값, 여름 특별 할인 쿠폰</p>
                <div className="coupon-bottom">
                    <div className="coupon-duedate">D-5</div>
                    <button className="using-coupon">사용하러 가기 &gt;</button>
                </div>
            </div>
            <div className="coupon-card">
                <h3 className="coupon-price">30000원</h3>
                <p className="coupon-name">오늘만 반값, 여름 특별 할인 쿠폰</p>
                <div className="coupon-bottom">
                    <div className="coupon-duedate">D-5</div>
                    <button className="using-coupon">사용하러 가기 &gt;</button>
                </div>
            </div>
            
        </div>

        </div>
            
    
    )
}


export default CouponsPC;