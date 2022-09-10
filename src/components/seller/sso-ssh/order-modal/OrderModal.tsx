import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/seller/sss/image-modal/ImageModal.scss';
import 'src/styles/main/home/image-modal/ImageModal.scss';
import 'src/styles/seller/sso-ssh/order-modal/OrderModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

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
                    left: resize <= 767 ? 20 : (resize - 452) / 2,
                }}>
                    <div className="spm-modal-title">주문 건수</div>
                    <div className="spm-modal-subtitle">
                      <div style={{ display: "flex", }}>
                        <div className='left'>시간 옵션</div>
                        <div>건수</div>
                      </div>
                      {["시간 입력", 2, 3].map((data: any, idx: any,)=>{
                        return (
                          <>
                            <div style={{ display: "flex", }}>
                              <div>
                                <div className='left sfc-order-modal-left'>{data}</div>
                                <div className='left sfc-order-modal-left'>{data}</div>
                                <div className='left sfc-order-modal-left'>{data}</div>
                              </div>
                              
                              <div>
                                <div className='left sfc-order-modal-right'>{idx}</div>
                                <div className='left sfc-order-modal-right'>{idx}</div>
                                <div className='left sfc-order-modal-right'>{idx}</div>
                              </div>

                            </div>
                            <hr/>
                          </>
                        );
                      })}
                    </div>
                    <div className='sfc-order-modal-add'>
                      <AddIcon />
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
