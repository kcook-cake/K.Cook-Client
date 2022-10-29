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
    resize: number[];

    getData: any;

    orderModalShow: boolean;
    setOrderModalShowF: Function;
}

function OrderModal({
    NumF,
    resize,

    getData,

    orderModalShow,
    setOrderModalShowF,
}: Props) {
  const handleDescribe = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseInt(e.target.value))) {
      getData.describe = 0;
      NumF();
      return;
    }
    getData.describe = parseInt(e.target.value);
    NumF();
  }
  const handleGroupCount = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    if (isNaN(parseInt(e.target.value))) {
      getData.describe = 0;
      NumF();
      return;
    }
    getData.groupsList[idx].count = parseInt(e.target.value);
    NumF();
  }
  const handleTime = (e: React.ChangeEvent<HTMLInputElement>, idx: number, idx2: number) => {
    getData.groupsList[idx].timesList[idx2] = e.target.value;
    NumF();
  }

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
                  top: resize[0] <=767? 
                    window.pageYOffset+20 : 
                    resize[1] < 409?
                      window.pageYOffset:
                      window.pageYOffset + (resize[1] - 409) / 2,
                  left: resize[0] <= 767 ? 20 : (resize[0] - 472) / 2,
              }}>
                <div className='sfc-second-modal-box'>
                  <div className='sfc-second-modal-inner'>
                    <div className="spm-modal-title">주문/픽업 설정</div>
                    <div 
                      className="sfc-second-modal-add-group"
                      onClick={()=>{
                        getData.groupsList[getData.groupsList.length] = {
                          count: 0,
                          groupNumber: getData.groupsList.length+1,
                          timesList: [ "", ],
                        };
                        NumF();
                      }}>
                        + 그룹 추가
                    </div>
                    <div style={{ height: "22px"}}></div>
                    {getData.groupsList.map((data: { groupNumber: number, count: number, timesList: any[], }, idx: number)=>{
                      return (
                        <div key={idx}>
                          <div className='sfc-second-modal-content-top'>
                            <div 
                              className='sfc-second-modal-content-group'
                              onClick={()=>{
                                for (let i = data.groupNumber; i < getData.groupsList.length-1; i++) {
                                  getData.groupsList[i] = getData.groupsList[i+1];
                                  getData.groupsList[i].groupNumber = i;
                                }
                                getData.groupsList.pop();
                                NumF();
                              }}>
                              그룹{idx+1}.
                            </div>
                            <div>
                              <input type='number' value={data.count} onChange={(e)=>handleGroupCount(e, idx)}/>
                              건
                            </div>
                          </div>
                          <div className='sfc-second-modal-content-middle-flex'>
                            <div className='sfc-second-modal-content-middle'>
                              {data.timesList.map((data2: string, idx2: number, )=>{
                                return (
                                    <input
                                      key={idx2} 
                                      className='sfc-second-modal-content-time'
                                      type='text'
                                      value={data2}
                                      onChange={(e)=>handleTime(e, idx, idx2)}
                                    />
                                );
                              })}
                              <div 
                                className='sfc-second-modal-add'
                                onClick={()=>{
                                  getData.groupsList[idx].timesList[getData.groupsList[idx].timesList.length] = "";
                                  NumF();
                                }}>
                                  <img src={add} />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <hr className='sfc-second-modal-hr' />
                    <div className='sfc-second-modal-all-cnt' >
                      하루 총 주문 가능 개수&nbsp;&nbsp;
                      <div>
                        <input type='number' value={getData.describe} onChange={handleDescribe}/>
                        건
                      </div>
                    </div>
                    <div style={{ height: "97px", }}></div>

                    <div className="sfc-second-modal-btn">
                        <button
                          style={{ color: "#fff", }}
                          onClick={() => {
                              //patch /api/store/future-calendar/group?storeId=0&date=2002-10-10
                              /*
                                axios({
                                    url: '',
                                    method: 'PATCH',
                                    data: {
                                      describe: getData.describe,
                                      groupsList: getData.groupsList,
                                    },
                                    headers: {},
                                  })
                                  .then((res)=>{

                                  })
                                  .catch((err)=>{

                                  })
                              */
                              console.log(getData);
                              KCOOKScroll(false);
                              setOrderModalShowF(false);
                              NumF();
                          }}>
                          등록
                        </button>
                        {/* <button
                          style={{ marginRight: "12px", color: "#ea5450", backgroundColor: "#fff", }}
                          onClick={() => {
                              getData = oriData;
                              KCOOKScroll(false);
                              setOrderModalShowF(false);
                              NumF();
                          }}>
                          취소
                        </button> */}
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
