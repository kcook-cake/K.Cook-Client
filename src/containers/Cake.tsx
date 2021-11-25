import React from 'react';
import VerticalCard from '../components/LengthwiseCard';
import '../styles/Cake.scss';

function Cake (){
    return(
        <div className="cake">
            <div className="item-sort-bar">
                <select className="dropdown-bar">
                    <option selected>정렬</option>
                    <option>별점 인기순</option>
                    <option>최신순</option>
                    <option>판매량순</option>
                    <option>리뷰 많은 순</option>
                </select>
                <select className="dropdown-bar">
                    <option selected>맛</option>
                    <option>생크림</option>
                    <option>크림치즈</option>
                    <option>초코</option>
                    <option>과일</option>
                </select>
                <select className="dropdown-bar">
                    <option selected>지역</option>
                    <option>서울</option>
                    <option>경기</option>
                    <option>인천</option>
                    <option>강릉</option>
                    <option>부산</option>
                </select>
                <select className="dropdown-bar">
                    <option selected>이벤트</option>
                    <option>생일</option>
                    <option>커플 기념일</option>
                    <option>어버이날</option>
                    <option>돌잔치</option>
                    <option>크리스마스</option>
                </select>
                <select className="dropdown-bar">
                    <option selected>가격대</option>
                    <option>~3만 원</option>
                    <option>3~5만 원</option>
                    <option>5~7만 원</option>
                    <option>7~10만 원</option>
                    <option>10만 원~</option>
                </select>
            </div>
            <div className="sorted-item">
                {/* <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/> */}

            </div>

        </div>
    )
}



export default Cake;