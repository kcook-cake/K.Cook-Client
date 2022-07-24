import React from 'react';
import '../../../styles/mypage/Membership.scss';

function MembershipPC (){
    return(

        <div className="mp-top membership mmp">
            <div className="mypage-top">
                <h3>적립금</h3>
                <span>구매 및 후기 작성으로 현금처럼 쓸 수 있는 포인트를 받으세요</span>
                <div className="membership-sum">합계 : 
                    <span className="membership-point">11,600원</span>
                </div>
            </div>
            <div className="membership-table">
                <div className="membership-head">
                    <div>상품명</div>
                    <div>판매자</div>
                    <div>날짜</div>
                    <div>가격</div>
                    <div>적립금</div>
                </div>
                <div className="membership-data">
                    <div>하트볼터치 곰돌이 케이크</div>
                    <div>원모먼트</div>
                    <div>2021. 03. 11</div>
                    <div>29,000</div>
                    <div>2,900원</div>
                </div>
                <div className="membership-data">
                    <div>하트볼터치 곰돌이 케이크</div>
                    <div>원모먼트</div>
                    <div>2021. 03. 11</div>
                    <div>29,000</div>
                    <div>2,900원</div>
                </div>
                <div className="membership-data">
                    <div>하트볼터치 곰돌이 케이크</div>
                    <div>원모먼트</div>
                    <div>2021. 03. 11</div>
                    <div>29,000</div>
                    <div>2,900원</div>
                </div>
                <div className="membership-data">

                </div>
                <div className="membership-data">

                </div>
                <div className="membership-data">

                </div>
            </div>

        </div>
                
        
    )
   
}


export default MembershipPC;