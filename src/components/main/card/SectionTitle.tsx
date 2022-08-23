import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'src/styles/main/card/SectionTitle.scss'

import LinkClick from '../../../utils/LinkClick';

import allow from '../../../assets/right-arrow.svg';

interface Props {
    title : string,
    link? : string
}

function SectionTitle({ title, link }: Props) {
    return (
        <div className="section-title-flex">
            <div className="pc section-title">
                {title}
            </div>
            <Link
                to={"/"+link}>
                <div className="mobile section-title">
                    {title}
                    <img src={allow} />
                </div>
            </Link>
            <Link
                to={"/"+link}
                className="link">
                더보기 &gt;
            </Link>
        </div>
    );
}


export default SectionTitle;