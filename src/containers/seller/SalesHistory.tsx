import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'src/styles/seller/sso-ssh/SSO_SSH.scss';

import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';
import SSO_SSH_Card from 'src/components/seller/sso-ssh/SSO_SSH_Card';
import SSH_AddModal from 'src/components/seller/sso-ssh/modal/SSH_AddModal';

import addIcon from 'src/assets/seller/spm-ssr/ssr-add.png';
import SSH_TestData from '../../testdata/SSH_TestData';
import List2Option from 'src/utils/List2Option';

type userType = {
    [key: string]: any;
}

function SalesHistory (){
    const [num, setNum] = useState(0);

    let [oriData, setOriData] = useState([]);
    const [data, setData] = useState<userType>({});

    const [addModalShow, setAddModalShow] = useState(false);

    var pathname = window.location.pathname.split("/");
    const [resize, setResize] = useState(0);
    const handleResize = () => {
      setResize(window.innerWidth);
    };
    useEffect(() => {
        LinkClick("SalesHistory");
        sellerLinkClick("SalesHistory");

        let isComponentMounted = true;
        if (pathname.length === 3) {
            //get /api/store/sales-history?storeId=0&date=2020-10-19
            oriData = SSH_TestData();
            setOriData(oriData);
            var updateData: userType = {};
            for (var i = 0; i < oriData.length; i++) {
                oriData[i].optionsList = List2Option(oriData[i].optionsList);
                updateData[oriData[i].saleDate] = [];
            }
            oriData.forEach((data: any, ) => {
                updateData[data.saleDate][updateData[data.saleDate].length] = data;
                setData(updateData);
            })
        } else {
            //get /api/store/sales-history?storeId=0
            oriData = SSH_TestData();
            setOriData(oriData);
            var updateData: userType = {};
            for (var i = 0; i < oriData.length; i++) {
                oriData[i].optionsList = List2Option(oriData[i].optionsList);
                updateData[oriData[i].saleDate] = [];
            }
            oriData.forEach((data: any, ) => {
                updateData[data.saleDate][updateData[data.saleDate].length] = data;
                setData(updateData);
            })
        }
        
        setResize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            isComponentMounted = false;
            window.removeEventListener("resize", handleResize);
        }
    },[]);

    return(
        <>
        <SSH_AddModal
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
                            to='/SalesHistory'
                            className='pc ss-fc-link'
                            style={{ color: "#ea5450", }}>
                            목록보기
                        </Link>
                    </div>
                </div>
                <div className="mobile" style={{ width: "5px", height: "25px", }}></div>
                <div className="sso-ssh-content">
                    <SSO_SSH_Card getData={data} dateTF={pathname.length === 3? true: false} />
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