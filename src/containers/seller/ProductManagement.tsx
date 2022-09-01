import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import cake6 from '../../assets/cake6.png';
import { ReactComponent as AddSmalllIcon } from '../../assets/seller/add-small.svg';
import { ReactComponent as AddIcon } from '../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../assets/seller/copybtn.svg';
import { ReactComponent as DragBtn } from '../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../assets/seller/drag-column-btn.svg';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import addIcon from '../../assets/seller/spm-add.png';

import getAxios from 'src/utils/getAxios';
import SPMCard from 'src/components/seller/card/SPMCard';
import SPMCard_Add from 'src/components/seller/card/SPM_Add';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';
import ImageModal from 'src/components/seller/card/image-modal/ImageModal';
import SPM_Update from 'src/components/seller/card/SRM_Update';

function ProductManagement() {
  const [num, setNum] = useState(0);

  const [oriShow, setOriShow] = useState<any>([]);
  const [oriImage, setOriImage] = useState([
    [
      'https://www.codingfactory.net/wp-content/uploads/abc.jpg',
      '',
      '',
      '',
      '',
    ],
    ['', '', '', '', ''],
  ]);
  const [oriData, setOriData] = useState([
    {
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
              optionListName: '',
              optionListPrice: 0,
            },
          ],
          optionDirect: true,
          optionDirectText: '',
          optionImage: true,
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
          optionDirect: false,
          optionDirectText: '',
          optionImage: false,
        },
      ],
    },
    {
      name: '케이크2',
      image: '',
      price: 0,
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
          ],
          optionDirect: false,
          optionDirectText: '',
          optionImage: false,
        },
      ],
    },
  ]);

  const [addShow, setAddShow] = useState(false);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    LinkClick('ProductManagement');
    sellerLinkClick('ProductManagement');

    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    for (var i = 0; i < oriData.length; i++) {
      oriShow[i] = true;
    }

    if (resize > 767) {
      $('.spm-modal').on('scroll touchmove mousewheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  }, []);

  return (
    <>
      <div className="seller-mypage-top-flex">
        <div className="spm-ssr-mobile-box">
          {/* title */}
          <div className="seller-mypage-top spm-ssr-title">
            <div className="seller-mypage-front-title">상품관리</div>
            <div className="seller-mypage-middle-title">
              현재 판매 중인 상품입니다
            </div>
          </div>
          <div className="mobile" style={{ width: '5px', height: '25px' }}></div>

          <div className="seller-content">
            {oriData.map((data: any, idx: any) => {
              return (
                <>
                  {oriShow[idx] ? (
                    <SPMCard
                      idx={idx}
                      num={num}
                      setNum={setNum}
                      oriShow={oriShow}
                      oriData={oriData}
                      oriImage={oriImage}
                    />
                  ) : (
                    <SPM_Update
                      idx={idx}
                      num={num}
                      setNum={setNum}
                      resize={resize}
                      oriShow={oriShow}
                      getUpdateData={oriData[idx]}
                      getUpdateImage={oriImage[idx]}
                    />
                  )}
                </>
              );
            })}
            {addShow?
              <SPMCard_Add
                num={num} setNum={setNum} resize={resize}
                addShow={addShow} setAddShowF={setAddShow}
              />
            :null}

          </div>
        </div>

        {/* addButton */}
        <div className="spm-bottom">
          <button className="mobile spm-bottom-inner spm-bottom-left">
            <CopyBtn />
          </button>
          <button
            className="spm-bottom-inner spm-bottom-middle"
            onClick={() => {
              setAddShow(true);
            }}>
            {/* <AddSmalllIcon/> */}
            {resize>767? 
              <AddIcon />:
              <img src={addIcon}/>
            }
          </button>
          <button
            className="mobile spm-bottom-inner spm-bottom-right"
            onClick={() => {
              setAddShow(false);
              // for (var i=0; i< update.length; i++) update[i] = false;
            }}>
            <CloseBtn />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductManagement;
