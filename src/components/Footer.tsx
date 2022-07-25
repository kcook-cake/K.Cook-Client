import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Footer.scss';

import designClick from "../utils/designClick";

interface FooterProps {
    setNumLeftMobileF: any,
    email : string,
    tel : string,
    address : string 
}

function Footer({ setNumLeftMobileF, email, tel, address }: FooterProps) { 
    return (
        <>
        <hr className="footer-hr"/>
        <div className="footer-flex">
            <div className="footer">
                <dl>
                    <dt id="footer-kcook" className="footer-title">케이쿡</dt>
                    <dt className="footer-context">
                        <dd>{email}</dd>
                        <dd>{tel}</dd>
                    </dt>
                </dl>
                <dl className="footer-mobile">
                    <Link
                        to="/"
                        className="footer-right"
                        onClick={()=>{
                            designClick("Home");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>홈</dt></Link>
                    <Link
                        to="/TodaysRec"
                        className="footer-right"
                        onClick={()=>{
                            designClick("TodaysRec");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>오늘의 추천</dt></Link>
                    <Link
                        to="/Cake"
                        className="footer-right"
                        onClick={()=>{
                            designClick("Cake");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>케이크</dt></Link>
                    <Link
                        to="/MoreItem"
                        className="footer-right"
                        onClick={()=>{
                            designClick("MoreItem");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>추가 상품</dt></Link>
                    <Link
                        to="/CS"
                        className="footer-right"
                        onClick={()=>{
                            designClick("CS");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>고객지원</dt></Link>
                </dl>
                <dl>
                    <dt className="footer-title">Services</dt>
                    <dt className="footer-context">
                        <dd>Development & Strategy</dd>
                        <dd>Design & Management</dd>
                        <dd>Website Development</dd>
                        <dd>Quick Launch</dd>
                    </dt>
                </dl>
                <dl>
                    <dt className="footer-title">About Us</dt>
                    <dt className="footer-context">
                        <dd>Milestone</dd>
                        <dd>Check Our Pricing Plan</dd>
                        <dd>Expert Team</dd>
                        <dd>Our Exciting News</dd>
                    </dt>
                </dl>
                <dl>
                    <dt className="footer-title">Address</dt>
                    <dt className="footer-context">
                        <dd>{address}</dd>
                    </dt>
                </dl>
                {/* <dl>
                    <dt id="footer-kcook" className="footer-mobile">케이쿡</dt>
                </dl>
                <dl>
                    <dt id="footer-kcook" className="footer-mobile">케이쿡</dt>
                </dl>
                <dl>
                    <dt id="footer-kcook" className="footer-mobile">케이쿡</dt>
                </dl>
                <dl>
                    <dt id="footer-kcook" className="footer-mobile">케이쿡</dt>
                </dl> */}
            </div>
            <div className="footer-bottom">
                케이쿡  |  대표 000  |  서울특별시 성동구 뚝섬로13길 38 상상플래닛
                kcook@gmail.com  |  사업자등록번호 : 175-07-01452  |  통신판매업신고
            </div>
        </div>
        </>
    );
}


export default Footer;