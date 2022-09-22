import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/seller/sss/image-modal/ImageModal.scss';
import 'src/styles/main/home/image-modal/ImageModal.scss';
import 'src/styles/seller/sso-ssh/modal/FcSecondModal.scss';

import add from 'src/assets/seller/sso-ssh/add.png';
import subtract from 'src/assets/seller/sso-ssh/subtract.png';
import sub_add from 'src/assets/detail/cake/add.png';
import sub_subtract from 'src/assets/detail/cake/subtrack.png';
import KCOOKScroll from 'src/utils/KCOOKScroll';


interface Props {
    NumF: any;
    resize: any;
    height: any;

    orderModalShow: any;
    setOrderModalShowF: any;
}

function OrderModal({
    NumF,
    resize,
    height,

    orderModalShow,
    setOrderModalShowF,
}: Props) {
  
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  useEffect(() => {
  },[]);

  return (
    <>
      <div className="sfc-second-modal">
        {orderModalShow ? (
          <>
            <div
                className="spm-modal-background"
                style={{ top: window.pageYOffset }}>
            </div>

            <div
              id='sfc-second-modal-height'
              className="spm-modal-box sfc-second-modal-box"
              style={{
                  top:
                      resize <= 767 ? 
                      window.pageYOffset + 20 : 
                      window.innerHeight - height < 0 ? window.pageYOffset : window.pageYOffset + (window.innerHeight - height) / 2,
                  left: resize <= 767 ? 20 : (resize - 472) / 2,
              }}>
                <div className="spm-modal-title">주문 건수</div>
                <div className="spm-modal-subtitle">
                  <div className='sfc-second-modal-grid'>
                    <div className='left'>시간 옵션</div>
                    <div className='left-sub'>건수</div>
                  </div>
                  {["시간 입력", 2, 3].map((data: any, idx: any,)=>{
                    return (
                      <>
                        {/* <div style={{ display: (resize > 767? "flex": "block"), }}> */}
                        <div className='sfc-second-modal-grid sfc-second-modal-content'>
                            <div className='sfc-second-modal-time'>
                              <input value={data} />
                            </div>
                          
                            <div className='cake-detail-optionlist-btn'>
                                <div className=''>
                                    <div style={{ color: "#ea5450", border: "1px solid #ea5450", }}>
                                        <img src={sub_subtract} style={{ marginRight: "5px", }}/>
                                    </div>
                                    <div style={{ fontSize: "16px", border: "1px solid #e0e0e0" }}>
                                        1
                                    </div>
                                    <div style={{ color: "#fff", background: "#ea5450", }}>
                                        <img src={sub_add} style={{ marginRight: "5px", }} />
                                    </div>
                                </div>
                            </div>

                            <div className='sfc-second-modal-subtract'>
                              <img src={subtract} />
                            </div>

                        </div>
                      </>
                    );
                  })}
                </div>
                <div className='sfc-second-modal-add'>
                  <img src={add} />
                </div>

                <div className="spmdetail-content-btn-box spm-modal-btn-box">
                    <button
                      className="spmdetail-content-btn"
                      onClick={() => {
                          KCOOKScroll(false);
                          setOrderModalShowF(false);
                          NumF();
                      }}>
                      등록
                    </button>
                    <button
                      className="spmdetail-content-btn"
                      style={{ color: "#ea5450", background: "#fff", }}
                      onClick={() => {
                          KCOOKScroll(false);
                          setOrderModalShowF(false);
                          NumF();
                      }}>
                      취소
                    </button>
                </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderModal;
