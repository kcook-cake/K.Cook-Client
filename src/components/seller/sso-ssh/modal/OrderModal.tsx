import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/seller/sss/image-modal/ImageModal.scss';
import 'src/styles/main/home/image-modal/ImageModal.scss';
import 'src/styles/seller/sso-ssh/modal/OrderModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import add from 'src/assets/seller/sso-ssh/add.png';
import subtract from 'src/assets/seller/sso-ssh/subtract.png';

interface Props {
    NumF: any;
    resize: any;

    orderModalShow: any;
    setOrderModalShowF: any;
}

function OrderModal({
    NumF,
    resize,
    orderModalShow,
    setOrderModalShowF,
}: Props) {
  
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const UpdateImageF = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
      if (!e.target.files) return;

      const formData = new FormData();
      formData.append('image', e.target.files[0]);

    //   axios({
    //     baseURL: 'https://prod.kcook-cake.com/',
    //     url: '/app/banner/carousel',
    //     method: 'POST',
    //     data: {
    //       'bannerListReq[0].connectedUrl': 'https://www.kcook-cake.com/',
    //       'bannerListReq[0].mobileImage': formData,
    //       'bannerListReq[0].orders': idx + 1,
    //       'bannerListReq[0].webImage': formData,
    //       //"이미지url" : 인풋창에 적은값
    //     },
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'X-ACCESS-TOKEN': jwToken,
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
        NumF();
    },[]);
  
    useEffect(() => {
    },[]);

  return (
    <>
      <div className="sfc-order-modal">
        {orderModalShow ? (
          <>
            <div
                className="spm-modal-background"
                style={{ top: window.pageYOffset }}>
            </div>

            <div
            className="spm-modal-box sfc-order-modal-box"
            style={{
                top:
                    resize <= 767 ? 
                    window.innerHeight - 530 < 0 ? window.pageYOffset : window.pageYOffset + 20 : 
                    window.innerHeight - 775 < 0 ? window.pageYOffset : window.pageYOffset + (window.innerHeight - 775) / 2,
                left: resize <= 767 ? 0 : (resize - 472) / 2,
            }}>
                <div className="spm-modal-title">주문 건수</div>
                <div className="spm-modal-subtitle">
                  <div style={{ display: "flex" }}>
                    <div className='left'>시간 옵션</div>
                    <div className='left-sub'>건수</div>
                  </div>
                  {["시간 입력", 2, 3].map((data: any, idx: any,)=>{
                    return (
                      <>
                        {/* <div style={{ display: (resize > 767? "flex": "block"), }}> */}
                        <div style={{ display: "flex" }}>
                          <div className='left sfc-order-modal-left'>
                            <input value={data} />
                          </div>
                          
                          <div className='sfc-order-modal-center-flex'>
                            <div className='cake-detail-optionlist-btn sfc-order-modal-center'>
                                <div className='sfc-order-modal-center-inner'>
                                    <div style={{ color: "#ea5450", border: "1px solid #ea5450", }}>-</div>
                                    <div style={{ fontSize: "16px", border: "1px solid #e0e0e0" }}>1</div>
                                    <div style={{ color: "#fff", background: "#ea5450", }}>+</div>
                                </div>
                            </div>

                            <div className='sfc-order-modal-right'>
                              <img src={subtract} />
                            </div>
                          </div>
                          {/* <div style={{ height: "40px", }}></div> */}

                        </div>
                      </>
                    );
                  })}
                </div>
                <div className='sfc-order-modal-add'>
                  <img src={add} />
                </div>

                <div className="spmdetail-content-btn-box spm-modal-btn-box">
                    <button
                      className="spmdetail-content-btn"
                      onClick={() => {
                          setOrderModalShowF(false);
                          NumF();
                      }}>
                      등록
                    </button>
                    <button
                      className="spmdetail-content-btn"
                      style={{ color: "#ea5450", background: "#fff", }}
                      onClick={() => {
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
