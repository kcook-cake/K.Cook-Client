import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../../styles/mypage/OrderHistory.scss';
import '../../../styles/seller/ProductManagement.scss';

import SSRMCard from '../card/SSRMCard';

import cake6 from   '../../../assets/cake6.png';
import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

function ProductManagementMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mp-top spmm mypage-mobile">
            <div className="ssrm-box mprm-box">
                <div className="title">
                    <div className="ssom-front-title">상품관리</div>
                    <div className="ssom-middle-title">고객분들이 남겨주신 후기입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SSRMCard getData={data}/>
                </div>
            </div>
            <div className="spmm-bottom"></div>
        </div>
    )
}


export default ProductManagementMobile;