import React from 'react';
import '../styles/Footer.scss';

interface FooterProps {
    email : string,
    tel : string,
    address : string 
}


function Footer({ email, tel, address}: FooterProps) { 
    return (
        <div className="footer-flex">
        <div className="footer">
            <dl>
                <dt id="footer-kcook" className="footer-title">케이쿡</dt>
                <dt className="footer-context">
                    <dd>{email}</dd>
                    <dd>{tel}</dd>
                </dt>
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
        </div>
        </div>
    );
}


export default Footer;