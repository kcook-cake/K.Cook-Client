import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../styles/SectionTitle.scss'

import LinkClick from '../utils/LinkClick';

import allow from '../assets/right-arrow.svg';

interface SectionTitleProps {
    title : string,
    link? : string
}

function SectionTitle({ title, link }: SectionTitleProps) {
    return (
        <div className="section-title">
            <div className="pc title">
                {title}
            </div>
            <div
                className="mobile title"
                onClick={()=>{
                    LinkClick(link);
                    document.location.href = "/"+link;
                }}
            >
                {title}
                <img src={allow} />
            </div>
            <Link
                to={"/"+link}
                className="link"
                onClick={()=>{
                    LinkClick(link);
                }}
            >
                더보기 &gt;
            </Link>                
        </div>
    );
}


export default SectionTitle;