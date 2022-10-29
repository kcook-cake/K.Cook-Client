import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'src/styles/seller/sso-ssh/SSO_SSH.scss';

import cake6 from   '../../assets/cake6.png';
import getAxios from 'src/utils/getAxios';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import SSO_SSH_Card from 'src/components/seller/sso-ssh/SSO_SSH_Card';
import SSO_TestData from 'src/testdata/seller/SSO_TestData';
import List2Option from 'src/utils/List2Option';

type userType = {
    [key: string]: Props[];
}

interface Props {
    image1: string, 
    name: string, 
    price: number, 
    saleTime: string, 
    saleDate: string, 
    optionsList: Props2[],
}

interface Props2 {
    price: number,
    category: string, 
    categoryTitle: string, 
    contents: string,
    optionsId: number,
    itemType: string,
    itemNumber: number, 
}

function SellerOrder (){
    const [num, setNum] = useState(0);

    let [oriData, setOriData] = useState([]);
    const [data, setData] = useState<userType>({});

    let pathname = window.location.pathname.split("/");
    useEffect(()=>{
        LinkClick("SellerOrder");
        sellerLinkClick("SellerOrder");

        let isComponentMounted = true;
        if (pathname.length === 3) {
            //get /api/store/sales-history?storeId=0&date=2020-10-19
            oriData = SSO_TestData();
            setOriData(oriData);
            let updateData: userType = {};
            for (let i = 0; i < oriData.length; i++) {
                oriData[i].optionsList = List2Option(oriData[i].optionsList);
                updateData[oriData[i].saleDate] = [];
            }
            oriData.forEach((data: Props, ) => {
                updateData[data.saleDate][updateData[data.saleDate].length] = data;
                setData(updateData);
            })
        } else {
            //get /api/store/sales-history?storeId=0
            oriData = SSO_TestData();
            setOriData(oriData);
            let updateData: userType = {};
            for (let i = 0; i < oriData.length; i++) {
                oriData[i].optionsList = List2Option(oriData[i].optionsList);
                updateData[oriData[i].saleDate] = [];
            }
            oriData.forEach((data: Props, ) => {
                updateData[data.saleDate][updateData[data.saleDate].length] = data;
                setData(updateData);
            })
        }
        
        return () => {
            isComponentMounted = false;
        }
    },[]);

    return(
        <>
            <div className="seller-mypage-top-flex">
                <div className="sso-ssh-mobile-box">
                    <div className="seller-mypage-top sso-ssh-top">
                        <div className="seller-mypage-front-title">주문확인</div>
                        <div className="seller-mypage-middle-title">처리할 예약 주문입니다</div>
                        <div className='ss-fc-link-flex'>
                            <Link
                                to='/SSOCalendar'
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
                        <SSO_SSH_Card getData={data} dateTF={pathname.length === 3? true: false} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerOrder;