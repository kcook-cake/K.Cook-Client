import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Footer.scss';

import LinkClick from "../utils/LinkClick";

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
            <div id="footer-flex-id" className="footer">
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
                            $(".hm-pc-flex").show();
                            LinkClick("Home");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>홈</dt></Link>
                    <Link
                        to="/TodaysRec"
                        className="footer-right"
                        onClick={()=>{
                            $(".hm-pc-flex").show();
                            LinkClick("TodaysRec");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>오늘의 추천</dt></Link>
                    <Link
                        to="/Cake"
                        className="footer-right"
                        onClick={()=>{
                            $(".hm-pc-flex").show();
                            LinkClick("Cake");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>케이크</dt></Link>
                    <Link
                        to="/Store"
                        className="footer-right"
                        onClick={()=>{
                            $(".hm-pc-flex").show();
                            LinkClick("Store");
                            setNumLeftMobileF(1);
                        }}
                    ><dt>스토어</dt></Link>
                    <Link
                        to="/CS"
                        className="footer-right"
                        onClick={()=>{
                            $(".hm-pc-flex").show();
                            LinkClick("CS");
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
                케이쿡  |  대표 정예빈  |  서울특별시 동작구 상도로 369, 창신관 313호
                cakeorder.kcook@gmail.com  |  사업자등록번호 : 175-07-01452  |  통신판매업신고
            </div>
        </div>
        </>
    );
}


export default Footer;