import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/seller/sss/modal/ImageModal.scss';
import 'src/styles/main/home/image-modal/ImageModal.scss';
import 'src/styles/seller/sso-ssh/modal/FcSecondModal.scss';

import add from 'src/assets/seller/sso-ssh/add.png';
import subtract from 'src/assets/seller/sso-ssh/subtract.png';
import sub_add from 'src/assets/detail/cake/add.png';
import sub_subtract from 'src/assets/detail/cake/subtrack.png';
import KCOOKScroll from 'src/utils/KCOOKScroll';


interface Props {
    NumF: Function;
    resize: number;
    height: number;

    orderModalShow: boolean;
    setOrderModalShowF: Function;
}

function OrderModal({
    NumF,
    resize,
    height,

    orderModalShow,
    setOrderModalShowF,
}: Props) {
  
  var jwToken: string = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;

  useEffect(() => {
  },[]);

  return (
    <>
      <div className="sfc-second-modal-flex">
        {orderModalShow && (
          <>
            <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}>
            </div>
            
            <div
              className="sfc-second-modal"
              style={{
                  top:
                      resize <= 767 ? 
                      window.pageYOffset + 20 : 
                      window.innerHeight - height < 0 ? window.pageYOffset : window.pageYOffset + (window.innerHeight - height) / 2,
                  left: resize <= 767 ? 20 : (resize - 472) / 2,
              }}>
                <div className='sfc-second-modal-box'>
                  <div className='sfc-second-modal-inner'>
                    <div className="spm-modal-title">주문/픽업 설정</div>
                    <div className="sfc-second-modal-add-group">+ 그룹 추가</div>
                    <div style={{ height: "22px"}}></div>
                    {[0, 1, 2].map((data: number,)=>{
                      return (
                        <div key={data}>
                          <div className='sfc-second-modal-content-top'>
                            <div className='sfc-second-modal-content-group'>그룹{data+1}.</div>
                            <div>
                              <input type='number' value={0} onChange={()=>{}}/>
                              건
                            </div>
                          </div>
                          <div className='sfc-second-modal-content-middle-flex'>
                            <div className='sfc-second-modal-content-middle'>
                              {[0, 1, 2, 3, 4, 5, 6, 7].map((data2: number,)=>{
                                return (
                                  <div key={data2} className='sfc-second-modal-content-time'>
                                    {data+1}
                                  </div>
                                );
                              })}
                              <div className='sfc-second-modal-add'>
                                <img src={add} />
                              </div>
                              {/* <div className='sfc-second-modal-content-middle-bar'></div> */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <hr className='sfc-second-modal-hr' />
                    <div className='sfc-second-modal-all-cnt' >
                      하루 총 주문 가능 개수&nbsp;&nbsp;
                      <div>
                        <input type='number' value={0} onChange={()=>{}}/>
                        건
                      </div>
                    </div>
                    <div style={{ height: "97px", }}></div>

                    <div className="sfc-second-modal-btn">
                        <button
                        style={{ color: "#fff", }}
                          onClick={() => {
                              KCOOKScroll(false);
                              setOrderModalShowF(false);
                              NumF();
                          }}>
                          등록
                        </button>
                        <button
                          style={{ marginRight: "12px", color: "#ea5450", backgroundColor: "#fff", }}
                          onClick={() => {
                              KCOOKScroll(false);
                              setOrderModalShowF(false);
                              NumF();
                          }}>
                          취소
                        </button>
                    </div>
                  </div>
                </div>
                {/* <div className='sfc-second-modal-box-bar'></div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default OrderModal;
