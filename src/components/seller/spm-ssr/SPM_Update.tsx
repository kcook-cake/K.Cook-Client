import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'src/styles/seller/spm-ssr/SPM_Add_Update.scss';

import cake6 from '../../../assets/cake6.png';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as SettingIcon } from '../../../assets/seller/spr-setting.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import setting from '../../../assets/seller/spm-setting.png';
import ImageModal from 'src/components/seller/spm-ssr/modal/ImageModal';
import MakePrice from 'src/utils/MakePrice';

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
interface Props {
  idx: any;
  NumF: any;
  resize: any;

  oriShow: any;
  getUpdateData: any;
}

function SPM_Update({ idx, NumF, resize, oriShow, getUpdateData }: Props) {
  const addPhoto = useRef(null);
  const [addFormData, setAddFormData] = useState(null);

  const handleAddName = (e: any) => {
    setUpdateName(e.target.value);
  };
  const handleAddPrice = (e: any) => {
    setUpdatePrice(e.target.value.replace(/[^0-9]/g, ''));
  };

  const handleOptionName = (e: any, optionId: any) => {
    updateOption[optionId - 1].optionName = e.target.value;
    NumF();
    setUpdateOption(updateOption);
  };
  const handleOptionListNameText = (
    e: any,
    optionId: any,
    optionListId: any
  ) => {
    updateOption[optionId - 1].optionList[optionListId - 1].optionListName =
      e.target.value;
    NumF();
    setUpdateOption(updateOption);
  };
  const handleOptionListName = (e: any, optionId: any, optionListId: any) => {
    updateOption[optionId - 1].optionList[optionListId - 1].optionListName =
      e.target.value;
    NumF();
    setUpdateOption(updateOption);
  };
  const handleOptionListPrice = (e: any, optionId: any, optionListId: any) => {
    updateOption[optionId - 1].optionList[optionListId - 1].optionListPrice =
      parseInt(e.target.value.replace(/[^0-9]/g, ''));
    NumF();
    setUpdateOption(updateOption);
  };

  const [updateChildOption, setUpdateChildOption] = useState(-1);

  const [updateImgModal, setUpdateImgModal] = useState(false);
  const [updateImgNum, setUpdateImgNum] = useState(0);
  const [updateImg, setUpdateImg] = useState([
    getUpdateData.productImage1,
    getUpdateData.productImage2,
    getUpdateData.productImage3,
    getUpdateData.productImage4,
    getUpdateData.productImage5,
  ]);
  const [updateName, setUpdateName] = useState(getUpdateData.name);
  const [updatePrice, setUpdatePrice] = useState(getUpdateData.price);
  const [updateOption, setUpdateOption] = useState<any>(
    getUpdateData.optionsList
  );
  console.log('updateOption', updateOption);

  const [startDrag, setStartDrag] = useState(0);
  useEffect(() => {}, []);

  //
  // 옵션-select에 들어갈 텍스트 변수 저장
  const [optionText1, setOption1Text] = useState([
    '옵션 선택',
    '옵션 세부 입력',
    '옵션 선택1',
    '옵션 선택2',
    '옵션 선택3',
  ]);
  const [optionText2, setOption2Text] = useState([
    '맛',
    '(시트+크림)',
    '맛 옵션1',
    '맛 옵션2',
    '맛 옵션3',
  ]);
  const [optionText3, setOptionText3] = useState([
    '색상',
    '색상 세부 입력',
    '색상 1',
    '색상 2',
    '색상 3',
  ]);

  const [hide, setHide] = useState(false);
  const [todayCakeLimit, setTodayCakeLimit] = useState('');
  // 당일 케이크 개수 범위
  var todayLimitNumber = [];
  for (var i = 1; i < 21; i++) {
    todayLimitNumber.push(i);
  }

  return (
    <>
      <ImageModal
        NumF={() => NumF()}
        resize={resize}
        TF={false}
        imageModalShow={updateImgModal}
        setImageModalShowF={setUpdateImgModal}
        imageData={updateImg}
      />

      <div className="spm-add-update">
        <div className="spm-add-update-inner">
          <div
            className="move-tap"
            onClick={() => {
              oriShow[idx] = true;
              NumF();
              alert('업데이트'); //updateOption
              // axios.update
            }}
          >
            <DragBtn />
          </div>
          <div className="spm-add-update-content">
            {/* 이미지 업데이트 창*/}
            <div>
              <div
                className="spm-add-update-img"
                onClick={() => {
                  setUpdateImgModal(true);
                }}
              >
                <div className="spm-add-update-img-inner">
                  {updateImg[updateImgNum] === '' ||
                  updateImg[updateImgNum] === null ||
                  updateImg[updateImgNum] === undefined ? (
                    <div className="spmcard-img-inner">
                      <AddIcon />
                    </div>
                  ) : (
                    <img src={updateImg[updateImgNum]} />
                  )}
                </div>
              </div>
              <div className="spm-add-update-img-bar">
                <ul style={{ display: 'flex' }}>
                  {[0, 1, 2, 3, 4].map((data: any) => {
                    return (
                      <li
                        key={data}
                        className={classNames('spm-add-update-dot', {
                          'spm-add-update-dot-active': updateImgNum === data,
                        })}
                        onClick={() => {
                          setUpdateImgNum(data);
                        }}
                      ></li>
                    );
                  })}
                </ul>
              </div>
              <div className="spm-add-update-todayCake-column">
                <input type="checkbox" name="istoday" />
                <span>당일케이크</span>
              </div>
              <div className="spm-add-update-todayCake-column">
                <input type="checkbox" name="todaylimit" />
                <span>
                  제한
                  <select>
                    <option value="none" selected disabled>
                      선택
                    </option>
                    {todayLimitNumber.map((data) => {
                      return <option value={data}>{data}</option>;
                    })}
                  </select>
                  {/* <input
                    type="number"
                    id="tentacles"
                    name="tentacles"
                    min="1"
                    max="30"
                    value={todayCakeLimit}
                    onChange={(e) => {
                      setTodayCakeLimit(e.target.value);
                    }}
                  ></input> */}
                  개
                </span>
              </div>
            </div>

            {/* spmcard-content-inner */}
            <div>
              <div style={{ display: 'flex' }}>
                <input
                  id="spm-update-name"
                  className="spm-add-update-main-title spm-add-update-title"
                  placeholder="상품명"
                  value={updateName}
                  onChange={handleAddName}
                />
                <div className="spm-add-update-right">x</div>
              </div>
              <div className="spm-add-update-price">
                <div className="spm-add-update-item-left">
                  <DragCBtn className="spm-add-update-item-left-icon" />
                </div>
                <div style={{ width: '100%' }}>
                  <input className="spm-add-update-item-text" />
                </div>
                <input
                  id="spm-update-price"
                  className="spm-add-update-price-inner"
                  type="text"
                  placeholder="+0원"
                  value={MakePrice(updatePrice)}
                  onChange={handleAddPrice}
                />
                <div className="spm-add-update-right">x</div>
              </div>
              <>
                {/* 아래부터 옵션 */}
                {updateOption.map(
                  (
                    option: {
                      optionNumber: any;
                      optionName: any;
                      itemList: any;
                    },
                    idx: any
                  ) => {
                    return (
                      <form>
                        <div className="spm-add-update-option">
                          {/* <input
                            className="spm-add-update-title"
                            placeholder={
                              '옵션' + (option.optionNumber + 1) + ' 이름'
                            }
                            value={option.optionName}
                            onChange={(e) => {
                              handleOptionName(e, option.optionNumber + 1);
                            }}
                          /> */}
                          {/* <div
                            className="spm-add-update-right"
                            onClick={() => {
                              for (
                                var i = option.optionNumber;
                                i < updateOption.length - 1;
                                i++
                              ) {
                                updateOption[i] = updateOption[i + 1];
                                updateOption[i].optionNumber = i + 1;
                              }
                              updateOption.pop();
                              NumF();
                            }}
                          >
                            x
                          </div> */}
                          <div className="spm-add-update-update-column">
                            <h1>옵션{idx + 1}.</h1>
                            <div>
                              <div className="spm-add-update-update-div-first">
                                <div
                                  className={classNames({
                                    option_selectbar_column_focus: hide,
                                  })}
                                >
                                  <div>
                                    {/* 클릭하면 아래껏들 사라지게 설정 :: !hide */}
                                    {idx === 0 && (
                                      <span>{optionText1[0]} </span>
                                    )}
                                    {idx === 1 && (
                                      <span>{optionText2[0]} </span>
                                    )}
                                    {idx === 2 && (
                                      <span>{optionText3[0]} </span>
                                    )}
                                    {!hide ? (
                                      <RiArrowDropDownLine
                                        onClick={() => {
                                          setHide((prev) => !prev);
                                        }}
                                      />
                                    ) : (
                                      <RiArrowDropUpLine
                                        onClick={() => {
                                          setHide((prev) => !prev);
                                        }}
                                      />
                                    )}
                                  </div>
                                  {hide && (
                                    <>
                                      {idx === 0 && (
                                        <>
                                          <div>
                                            <span>{optionText1[2]}</span>
                                          </div>
                                          <div>
                                            <span>{optionText1[3]}</span>
                                          </div>
                                          <div>
                                            <span>{optionText1[4]}</span>
                                          </div>
                                        </>
                                      )}
                                      {idx === 1 && (
                                        <>
                                          <div>
                                            <span>{optionText2[2]}</span>
                                          </div>
                                          <div>
                                            <span>{optionText2[3]}</span>
                                          </div>
                                          <div>
                                            <span>{optionText2[4]}</span>
                                          </div>
                                        </>
                                      )}
                                      {idx === 2 && (
                                        <>
                                          <div>
                                            <span>{optionText3[2]}</span>
                                          </div>
                                          <div>
                                            <span>{optionText3[3]}</span>
                                          </div>
                                          <div>
                                            <span>{optionText3[4]}</span>
                                          </div>
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                              <div
                                className={classNames(
                                  'spm-add-update-update-div-second',
                                  {
                                    'spm-add-update-update-div-second-focus':
                                      hide,
                                  }
                                )}
                              >
                                {idx === 0 && <span>{optionText1[1]}</span>}
                                {idx === 1 && <span>{optionText2[1]}</span>}
                                {idx === 2 && <span>{optionText3[1]}</span>}
                              </div>
                            </div>
                          </div>
                        </div>

                        {option.itemList.map(
                          (item: {
                            itemNumber: any;
                            itemName: any;
                            itemPrice: any;
                            itemType: any;
                            itemChild: any;
                          }) => {
                            return (
                              <div className="spm-add-update-item">
                                <div
                                  className="spm-add-update-item-left"
                                  onDragStart={(e) => {
                                    setStartDrag(e.clientY);
                                  }}
                                  onDragEnd={(e) => {
                                    var n = Math.ceil(
                                      (Math.abs(startDrag - e.clientY) - 45) /
                                        45
                                    );
                                    //Math.ceil() 올림 Math.floor() 내림, Math.abs() 절댓값
                                    if (
                                      n <= item.itemNumber &&
                                      56 <= startDrag - e.clientY &&
                                      item.itemNumber != 0
                                    ) {
                                      for (var i = n; i > 0; i--)
                                        updateOption[
                                          option.optionNumber
                                        ].itemList[
                                          item.itemNumber - i
                                        ].itemNumber =
                                          item.itemNumber - (i - 1);

                                      updateOption[
                                        option.optionNumber
                                      ].itemList[item.itemNumber].itemNumber =
                                        item.itemNumber - n;
                                      updateOption[
                                        option.optionNumber
                                      ].itemList.sort((a: any, b: any) => {
                                        if (a.itemNumber < b.itemNumber)
                                          return -1;
                                        if (a.itemNumber > b.itemNumber)
                                          return 1;
                                        return 0;
                                      });
                                    } else if (
                                      n <=
                                        option.itemList.length -
                                          1 -
                                          item.itemNumber &&
                                      startDrag - e.clientY <= -56 &&
                                      item.itemNumber !=
                                        option.itemList.length - 1
                                    ) {
                                      for (var i = n; i > 0; i--)
                                        updateOption[
                                          option.optionNumber
                                        ].itemList[
                                          item.itemNumber + i
                                        ].itemNumber =
                                          item.itemNumber + (i - 1);

                                      updateOption[
                                        option.optionNumber
                                      ].itemList[item.itemNumber].itemNumber =
                                        item.itemNumber + n;
                                      updateOption[
                                        option.optionNumber
                                      ].itemList.sort((a: any, b: any) => {
                                        if (a.itemNumber < b.itemNumber)
                                          return -1;
                                        if (a.itemNumber > b.itemNumber)
                                          return 1;
                                        return 0;
                                      });
                                    }
                                    NumF();
                                  }}
                                  draggable={true}
                                >
                                  <DragCBtn className="spm-add-update-item-left-icon" />
                                </div>
                                <div style={{ width: '100%' }}>
                                  <input
                                    className="spm-add-update-item-text"
                                    type="text"
                                    placeholder={
                                      item.itemType === 'normal'
                                        ? '품목' +
                                          (item.itemNumber + 1) +
                                          ' 입력'
                                        : item.itemType === 'text'
                                        ? '텍스트 입력'
                                        : '이미지 입력'
                                    }
                                    value={item.itemName}
                                    onChange={(e) => {
                                      handleOptionListName(
                                        e,
                                        option.optionNumber,
                                        item.itemNumber
                                      );
                                      NumF();
                                    }}
                                  />
                                </div>
                                <div
                                  className="spm-add-update-child"
                                  onClick={() => {
                                    if (updateChildOption > -1)
                                      setUpdateChildOption(-1);
                                    else
                                      setUpdateChildOption(option.optionNumber);
                                    setUpdateChildOption(item.itemNumber);
                                  }}
                                >
                                  이동
                                </div>
                                <input
                                  className="spm-add-update-item-price"
                                  type="text"
                                  placeholder="+0원"
                                  value={MakePrice(item.itemPrice)}
                                  onChange={(e) => {
                                    handleOptionListPrice(
                                      e,
                                      option.optionNumber,
                                      item.itemNumber
                                    );
                                  }}
                                />

                                <div
                                  className="spm-add-update-item-right"
                                  onClick={() => {
                                    for (
                                      var i = item.itemNumber;
                                      i < option.itemList.length - 1;
                                      i++
                                    ) {
                                      updateOption[
                                        option.optionNumber
                                      ].itemList[i] =
                                        updateOption[
                                          option.optionNumber
                                        ].itemList[i + 1];
                                      updateOption[
                                        option.optionNumber
                                      ].itemList[i].itemNumber = i;
                                    }
                                    updateOption[
                                      option.optionNumber
                                    ].itemList.pop();
                                    NumF();
                                  }}
                                >
                                  x
                                </div>
                              </div>
                            );
                          }
                        )}

                        {idx === 2 && (
                          <div className="spm-add-update-item-button">
                            <div
                              onClick={() => {
                                updateOption[option.optionNumber].itemList[
                                  option.itemList.length
                                ] = {
                                  itemNumber: option.itemList.length,
                                  itemType: 'normal',
                                  itemName: '',
                                  itemPrice: 0,
                                  itemChild: [],
                                };
                                NumF();
                              }}
                            >
                              +&nbsp;품목 추가
                            </div>

                            <div style={{ color: '#000' }}>
                              &nbsp;또는&nbsp;
                            </div>
                            <div
                              style={{ color: '#ea5450' }}
                              onClick={() => {
                                updateOption[option.optionNumber].itemList[
                                  option.itemList.length
                                ] = {
                                  itemNumber: option.itemList.length,
                                  itemType: 'text',
                                  itemName: '',
                                  itemPrice: 0,
                                  itemChild: [],
                                };
                                NumF();
                              }}
                            >
                              '텍스트' 추가
                            </div>

                            <div style={{ color: '#000' }}>
                              &nbsp;또는&nbsp;
                            </div>
                            <div
                              style={{ color: '#ea5450' }}
                              onClick={() => {
                                updateOption[option.optionNumber].itemList[
                                  option.itemList.length
                                ] = {
                                  itemNumber: option.itemList.length,
                                  itemType: 'image',
                                  itemName: '',
                                  itemPrice: 0,
                                  itemChild: [],
                                };
                                NumF();
                              }}
                            >
                              '이미지' 추가
                            </div>
                          </div>
                        )}
                      </form>
                    );
                  }
                )}

                <hr className="spm-add-update-hr" />
                <button
                  className="spm-add-update-button"
                  onClick={() => {
                    updateOption[updateOption.length] = {
                      optionNumber: updateOption.length,
                      optionName: '',
                      itemList: [
                        {
                          itemNumber: 0,
                          itemType: 'normal',
                          itemName: '',
                          itemPrice: 0,
                          itemChild: [],
                        },
                      ],
                    };
                    NumF();
                    console.log('assd');
                  }}
                >
                  + 옵션 추가
                </button>
              </>
            </div>
          </div>
        </div>

        {/* 오른쪽 빨간색 메뉴바*/}
        <div className="pc spm-tap">
          <button
            onClick={() => {
              oriShow[idx] = true;
              NumF();
            }}
          >
            <CloseBtn />
          </button>
        </div>
      </div>
    </>
  );
}

export default SPM_Update;
