import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/seller/sso-ssh/SSO_SSH.scss';

import getAxios from 'src/utils/getAxios';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';
import SSO_SSH_Card from 'src/components/seller/sso-ssh/SSO_SSH_Card';
import SSR_AddModal from 'src/components/seller/sso-ssh/modal/SSR_AddModal';

import addIcon from 'src/assets/seller/spm-ssr/ssr-add.png';

function SalesHistory (){
    const [num, setNum] = useState(0);

    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState([]);
    // const [data, setData] = useState([]);
    // const [dataLength, setDataLength] = useState(0);

    const [addModalShow, setAddModalShow] = useState(false);

    const [resize, setResize] = useState(0);
    const handleResize = () => {
      setResize(window.innerWidth);
    };
  
    useEffect(() => {
        setResize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        LinkClick("SalesHistory");
        sellerLinkClick("SalesHistory");
        getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
        <SSR_AddModal
            NumF={()=>setNum(num+1)} resize={resize} 
            addModalShow={addModalShow} setAddModalShowF={setAddModalShow}/>
        <div className="seller-mypage-top-flex">
            <div className="sso-ssh-mobile-box">
                <div className="seller-mypage-top sso-ssh-top">
                        <div className="seller-mypage-front-title">판매내역</div>
                        <div className="seller-mypage-middle-title">처리할 예약 주문입니다</div>
                    <div className='ss-fc-link-flex'>
                        <Link
                            to='/SSHCalendar'
                            className='ss-fc-link'>
                            달력보기
                        </Link>
                        <div
                            className="pc ss-fc-link-bar"
                            style={{ display: "inline-block"}}>|
                        </div>
                        <Link
                            to='/SellerOrder'
                            className='pc ss-fc-link'
                            style={{ color: "#ea5450", }}>
                            목록보기
                        </Link>
                    </div>
                </div>
                <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="sso-ssh-content">
                    <SSO_SSH_Card getData={data}/>
                </div>

                <div className='ssr-bottom'>
                    <button
                        className="spm-bottom-inner spm-bottom-middle ssr-bottom-inner"
                        onClick={() => {
                            setAddModalShow(true);
                        }}>
                            <img src={addIcon}/>
                    </button>
                </div>

            </div>
        </div>
        </>
    )
}


export default SalesHistory;