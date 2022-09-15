import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/seller/sso-ssh/modal/SSR_AddModal.scss';

import cake6 from 'src/assets/cake6.png';
import addImage from 'src/assets/seller/sso-ssh/image-add.png'
import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import BaseUrl from 'src/utils/BaseUrl';
import OptionList from 'src/components/detail/cake/OptionList';

interface Props {
    NumF: any,
    resize: any,

    addModalShow: any,
    setAddModalShowF: any,
}

const SSR_AddModal = ({
        NumF, resize, 
        addModalShow, setAddModalShowF,
    }: Props) => {

        const [oriData, setOriData] = useState({
            name: '케이크1',
            image: '',
            price: 1000,
            list: [
              {
                optionId: 1,
                optionName: '크기',
                optionList: [
                  {
                    optionListId: 1,
                    optionListName: '1호',
                    optionListPrice: 1000,
                  },
                  {
                    optionListId: 2,
                    optionListName: '2호',
                    optionListPrice: 1000,
                  },
                  {
                    optionListId: 3,
                    optionListName: '3호',
                    optionListPrice: 1000,
                  },
                  {
                    optionListId: 4,
                    optionListName: '텍스트&아',
                    optionListPrice: 0,
                  },
                  {
                    optionListId: 5,
                    optionListName: '텍스트&',
                    optionListPrice: 0,
                  },
                ],
                optionImage: false,
                optionImageText: '',
              },
              {
                optionId: 2,
                optionName: '맛',
                optionList: [
                  {
                    optionListId: 1,
                    optionListName: '딸기',
                    optionListPrice: 1000,
                  },
                ],
                optionImage: false,
                optionImageText: '',
              },
            ],
        });

    useEffect(()=>{

    },[]);


    return (
        <>
        <div className="sfc-order-modal">
            {addModalShow ? (
            <>
                <div
                    className="spm-modal-background"
                    style={{ top: window.pageYOffset }}>
                </div>

                <div
                    className="spm-modal-box ssr-add-modal-box"
                    style={{
                        top:
                            resize <= 767 ? 
                            window.innerHeight - 530 < 0 ? window.pageYOffset : window.pageYOffset + 20 : 
                            window.innerHeight - 775 < 0 ? window.pageYOffset : window.pageYOffset + (window.innerHeight - 775) / 2,
                        left: resize <= 767? 20: (resize-568)/2,
                }}>
                    <div className='ssr-add-module-title'>판매 내역 추가</div>
                    <div className='cake-detail-optionlist-select' style={{ marginBottom: "17px", }}>
                        <select>
                            <option disabled>케이크 선택</option>
                            <option >케이크1</option>
                            <option >케이크2</option>
                            {/* {data.optionList.map(( option:{optionListId: any, optionListName: any, optionListPrice: any,} )=>{
                                return (
                                    <option>
                                        {option.optionListName}
                                    </option>
                                );
                            })} 케이크*/}
                        </select>
                    </div>
                    <OptionList getData={oriData.list} />

                    <div className="spmdetail-content-btn-box">
                        <button
                            className="spmdetail-content-btn spm-modal-btn-box"
                            onClick={() => {
                                setAddModalShowF(false);
                                NumF();
                            }}>
                            등록
                        </button>
                        <button
                            className="spmdetail-content-btn spmdetail-content-btn-left spm-modal-btn-box"
                            onClick={() => {
                                setAddModalShowF(false);
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

export default SSR_AddModal;