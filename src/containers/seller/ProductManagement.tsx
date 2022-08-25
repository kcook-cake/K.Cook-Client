import React, { useState, useEffect } from 'react';
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

import { Link } from 'react-router-dom';
import getAxios from 'src/utils/getAxios';
import SPMCard from 'src/components/seller/card/SPMCard';
import SPMCard_Add from 'src/components/seller/card/SPMCard_Add';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';

function ProductManagement() {
  //Add
  const Add = () => {
    alert('추가');
    //addImage사용하면 이미지 넘길 수 있음
    var index = 0;
    var c = '';
    var jlength = 0;
    for (var i = 0; i < addOption.length; i++) {
      if (i - 1 < 0) index = i;
      else index = i - 1;

      if (addOption[i].optionName == '크기') c = 'SIZE';
      else if (addOption[i].optionName == '맛') c = 'TASTE';
      else if (addOption[i].optionName == '레터링') c = 'LOWER_LETTERING';
      else if (addOption[i].optionName == '색상') c = 'COLOR';
      else if (addOption[i].optionName == '초') c = 'CANDLE';
      else c = 'ETC';

      if (addOption[i].optionDirect)
        jlength = addOption[i].optionList.length - 1;
      else jlength = addOption[i].optionList.length;

      for (var j = 0; j < jlength; j++) {
        addBack[j + 1 + i * addOption[index].optionList.length - 1] = {
          additionalCost: addOption[i].optionList[j].optionListPrice,
          category: c,
          contents: addOption[i].optionList[j].optionListName,
          title: addOption[i].optionName,
        };
      }
      if (addOption[i].optionDirect) {
        addBack[jlength + 1 + i * addOption[index].optionList.length - 1] = {
          additionalCost: addOption[i].optionList[jlength].optionListPrice,
          category: c,
          contents:
            (addOption[i].optionImage ? '이미지&' : '텍스트&') +
            addOption[i].optionDirectText,
          title: addOption[i].optionName,
        };
      }
    }
    // axios
    //     .post(`https://prod.kcook-cake.com/app/products`, {
    //         isCake: true,
    //         name: addName,
    //         newOptionsList: addBack,
    //         price: addPrice,
    //         salePrice: 0,
    //     })
    //     .then((res) => {
    //         if (res.data.isSuccess) alert("추가 완료");
    //         document.location.href = "/ProductManagement";
    //     })
    //     .catch((error) => {
    //     });
  };
  const [addDiv, setAddDiv] = useState(false);
  const [addImageModal, setAddImageModal] = useState(false);
  const [addImage, setAddImage] = useState([
    'https://www.codingfactory.net/wp-content/uploads/abc.jpg',
    'https://t1.daumcdn.net/cfile/tistory/99D8553E5E09328C19',
    '',
    '',
    '',
  ]);
  const [addImageNum, setAddImageNum] = useState(0);
  const [addName, setAddName] = useState('');
  const [addPrice, setAddPrice] = useState(0);
  const [addOption, setAddOption] = useState([
    {
      optionId: 1,
      optionName: '크기',
      optionList: [
        {
          optionListId: 1,
          optionListName: '1호',
          optionListPrice: 0,
        },
      ],
      optionDirect: false,
      optionDirectText: '',
      optionImage: false,
    },
  ]);
  const [addBack, setAddBack] = useState<any>([]);
  const handleAddName = (e: any) => {
    setAddName(e.target.value);
  };
  const handleAddPrice = (e: any) => {
    setAddPrice(e.target.value);
  };

  const [update, setUpdate] = useState<any>([]);
  const [updateImageModal, setUpdateImageModal] = useState<any>([]);
  const [updateImage, setUpdateImage] = useState<any>([]);
  const [updateImageNum, setUpdateImageNum] = useState<any>([]);
  const [updateOption, setUpdateOption] = useState<any>([]);
  const [image, setImage] = useState([
    [
      'https://www.codingfactory.net/wp-content/uploads/abc.jpg',
      '',
      '',
      '',
      '',
    ],
    ['', '', '', '', ''],
  ]);
  const [data, setData] = useState([
    {
      name: '케이크1',
      image: '',
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

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  useEffect(() => {
    LinkClick('ProductManagement');
    sellerLinkClick('ProductManagement');
    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    for (var i = 0; i < data.length; i++) {
      //dataLength
      update[i] = false;
      updateImageModal[i] = false;
      updateImage[i] = ['', '', '', '', ''];
      updateImageNum[i] = 0;
      // d[i] = [];
      // for (var j=0; j< data[i].list.length; j++) {
      //     d[i][j] = data[i].list[j]
      //     setDirect();
      // }
    }
    setUpdateImage(image);
    setUpdateOption(data); //getData와 updateOption이 자꾸 연결됨

    if (resize > 767) {
      $('.spm-modal').on('scroll touchmove mousewheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  }, []);

  return (
    <>
      <div className="spm-modal">
        {addImageModal ? (
          <>
            <div
              className="spm-modal-background"
              style={{ top: window.pageYOffset }}
            ></div>
            <div
              className="spm-modal-box"
              style={{
                top:
                  resize <= 767
                    ? window.innerHeight - 530 < 0
                      ? window.pageYOffset
                      : window.pageYOffset + 20
                    : window.innerHeight - 775 < 0
                    ? window.pageYOffset
                    : window.pageYOffset + (window.innerHeight - 775) / 2,
              }}
            >
              <div className="spm-modal-title">이미지 등록</div>
              <div className="spm-modal-subtitle">대표이미지(1장)</div>
              <div
                className="spm-modal-img-inner"
                onClick={() => {
                  //addImage[0] = 사진 링크 넣기
                }}
              >
                {addImage[0] == '' ? (
                  <div className="spm-add-img">
                    <AddIcon />
                  </div>
                ) : (
                  <img src={addImage[0]} />
                )}
              </div>
              <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
              <div className="spm-modal-img-box">
                <div className="spm-modal-img-inner">
                  {addImage[1] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={addImage[1]} />
                  )}
                </div>
                <div className="spm-modal-img-inner">
                  {addImage[2] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={addImage[2]} />
                  )}
                </div>
                <div className="spm-modal-img-inner">
                  {addImage[3] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={addImage[3]} />
                  )}
                </div>
                <div className="spm-modal-img-inner">
                  {addImage[4] == '' ? (
                    <div className="spm-add-img">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={addImage[4]} />
                  )}
                </div>
              </div>
              <div className="mprdetail-content-btn-box">
                <button
                  className="mprdetail-content-btn"
                  onClick={() => setAddImageModal(false)}
                >
                  등록
                </button>
                <button
                  className="mprdetail-content-btn mprdetail-content-btn-left"
                  onClick={() => {
                    setAddImageModal(false);
                    setAddImage(['', '', '', '', '']);
                  }}
                >
                  취소
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>

      <div className="seller-mypage-top-flex">
        <div className="spm-ssr-mobile-box">
          {/* title */}
          <div className="seller-mypage-top spm-ssr-title">
            <div className="seller-mypage-front-title">상품관리</div>
            <div className="seller-mypage-middle-title">
              현재 판매 중인 상품입니다
            </div>
          </div>
          <div
            className="mobile"
            style={{ width: '5px', height: '25px' }}
          ></div>
          <div className="seller-content">
            <SPMCard
              getData={data}
              getImage={image}
              update={update}
              updateOption={updateOption}
              updateImageModal={updateImageModal}
              updateImage={updateImage}
              updateImageNum={updateImageNum}
              resize={resize}
              setDataF={setData}
              setImageF={setImage}
            />
          </div>

          {addDiv ? (
            <div className="spm-add">
              <div className="spm-add-inner">
                <button className="move-tap" onClick={Add}>
                  <DragBtn />
                </button>
                <div className="spm-add-content">
                  <div
                    className="spm-modal-img-inner"
                    onClick={() => setAddImageModal(true)}
                  >
                    {addImage[addImageNum] == '' ? (
                      <div className="spm-add-img">
                        <AddIcon />
                      </div>
                    ) : (
                      <img src={addImage[addImageNum]} />
                    )}
                  </div>
                  <div className="spm-add-arrow-box">
                    <img
                      src={leftArrow}
                      onClick={() => {
                        if (addImageNum != 0) setAddImageNum(addImageNum - 1);
                        else setAddImageNum(4);
                      }}
                    />
                    <img
                      src={rightArrow}
                      onClick={() => {
                        if (addImageNum != 4) setAddImageNum(addImageNum + 1);
                        else setAddImageNum(0);
                      }}
                      style={{ float: 'right' }}
                    />
                    <div className="spm-add-arrow-num">{addImageNum + 1}/5</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex' }}>
                      <input
                        className="spm-add-main-title spm-add-title"
                        placeholder="상품명"
                        onChange={handleAddName}
                      />
                      <div
                        id="spm-none-1"
                        className="spmcard-update-input-right"
                      >
                        x
                      </div>
                      <div
                        id="spm-none-1"
                        className="spmcard-update-input-right"
                      >
                        x
                      </div>
                    </div>
                    {/* <button className="mobile spm-add-img-m">
                                        <AddIcon />
                                    </button> */}
                    <div className="spmcard-update-input spmcard-update-input-top">
                      <div
                        id="spm-none-1"
                        className="spmcard-update-input-left"
                      >
                        <DragCBtn className="spmcard-update-input-left-icon" />
                      </div>
                      <div style={{ width: '100%' }}>
                        <input
                          id="spm-none-1"
                          className="spmcard-update-input-text"
                          type="text"
                          // name={"name"+optionList.optionListId}
                          // value={option.optionDirect&&option.optionList.length==optionList.optionListId? "직접 입력": optionList.optionListName}
                          // onChange={(e)=>{handleOptionListName(e, idx, option.optionId, optionList.optionListId)}}
                          // disabled={option.optionDirect&&option.optionList.length==optionList.optionListId}
                        />
                      </div>
                      <input
                        className="spmcard-update-input-price"
                        type="text"
                        min="0"
                        placeholder="0"
                        onChange={handleAddPrice}
                      />
                      원
                      <div
                        id="spm-none-1"
                        className="spmcard-update-input-right"
                      >
                        x
                      </div>
                    </div>
                    <SPMCard_Add
                      addOption={addOption}
                      setAddOptionF={setAddOption}
                    />
                  </div>
                </div>
              </div>

              <div className="pc spm-tap">
                <button
                  onClick={() => {
                    setAddDiv(false);
                  }}
                >
                  <CloseBtn />
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* addButton */}
        <div className="pc">
          <div
            className="spm-btn"
            onClick={() => {
              setAddDiv(true);
            }}
          >
            <AddIcon />
          </div>
        </div>
        <div className="mobile">
          <div className="spm-bottom">
            <button className="spm-bottom-inner spm-bottom-left">
              <CopyBtn />
            </button>
            <button
              className="spm-bottom-inner spm-bottom-middle"
              onClick={() => {
                setAddDiv(true);
              }}
            >
              {/* <AddSmalllIcon/> */}
              <img src={cake6} />
            </button>
            <button
              className="spm-bottom-inner spm-bottom-right"
              onClick={() => {
                setAddDiv(false);
              }}
            >
              <CloseBtn />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductManagement;
