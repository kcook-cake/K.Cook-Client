import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/OptionList.scss';

import subtrack from 'src/assets/detail/cake/subtrack.png';
import add from 'src/assets/detail/cake/add.png';

// import subtrack from 'src/styles/detail/cake/subtrack.png';
// import add from 'src/styles/detail/cake/add.png';

interface Props {
  NumF: Function;
  getData: {
    optionId: number;
    optionNumber: number;
    optionName: string;
    itemList: Props2[];
  }[];
  optionId: number[];
  cusId: number[];
}

interface Props2 {
  itemId: number;
  itemNumber: number;
  itemType: string;
  itemName: string;
  itemPrice: number;
  itemChild: Props3[];
}

interface Props3 {
  type: number;
  array: number[];
}

function OptionList({ NumF, optionId, cusId, getData }: Props) {
  let [selectNum, setSelectNum] = useState(0); //옵션 불투명도
  let [optionNum, setOptionNum] = useState(-1); //옵션 어떤 것 눌렀는지
  let [itemNum, setItemNum] = useState(0);

  let [child, setChild] = useState([]);

  useEffect(() => {
    // for (let i=0; i<getData.length; i++) cusId2[i] = 0;
    // console.log(cusId);
    // console.log(cusId2);
  }, []);

  return (
    <>
      {getData.map(
        (
          option: {
            optionId: number;
            optionNumber: number;
            optionName: string;
            itemList: Props2[];
          },
          idx: number,
        ) => {
          return (
            <div
              key={idx}
              className='cake-detail-optionlist-flex-focus'
              style={{ opacity: (selectNum<option.optionNumber? 0.4 : 1)}}
              onClick={() => {
              }}>
              <div style={{ marginBottom: '6px' }}>
                {idx + 1 + '. ' + option.optionName}
              </div>
              <div
                className={classNames('cake-detail-optionlist-select', { 
                  'cake-detail-optionlist-select-focus': optionNum===option.optionNumber && selectNum>=option.optionNumber, 
                })}
                onClick={() => {
                  //클릭할 때마다 옵션이 보이도록 해야함
                  if (optionNum === -1 && cusId[option.optionNumber] !== -2) {
                    optionNum = option.optionNumber;
                    setOptionNum(optionNum);
                  } else {
                    optionNum = -1;
                    setOptionNum(optionNum);
                  }
                }}>
                  {child.length === getData.length?
                    (child[option.optionNumber] === undefined?
                      (cusId[option.optionNumber] === -1 || cusId[option.optionNumber] === -2?
                        "선택":
                        option.itemList[cusId[option.optionNumber]].itemName
                      ):
                      (child[option.optionNumber].array.length === option.itemList.length?
                        <div
                          onClick={()=>{
                            selectNum = option.optionNumber+1;
                            setSelectNum(selectNum);
                            
                            cusId[option.optionNumber] = -2;
                          }}>
                          없음
                        </div>:
                        (cusId[option.optionNumber] === -1 || cusId[option.optionNumber] === -2?
                          "선택":
                          option.itemList[cusId[option.optionNumber]].itemName
                        )
                      )
                    ):
                    "선택"
                  }
                  {option.itemList.map(
                    (item: {
                      itemId: number;
                      itemNumber: number;
                      itemType: string;
                      itemName: string;
                      itemPrice: number;
                      itemChild: Props3[];
                    }, idx2: number) => {
                      return (
                        <div
                          key={idx2}
                          className={classNames('cake-detail-optionlist-select-option', {
                            'cake-detail-optionlist-option-none': 
                            (child[option.optionNumber] === undefined?
                              false:
                              child[option.optionNumber].array.find((data: number,)=>{
                                if (data === item.itemNumber)
                                  return true;
                              }) !== undefined
                            ),
                          })}
                          onClick={() => {
                            itemNum = item.itemNumber;
                            setItemNum(itemNum);

                            selectNum = option.optionNumber+1;
                            setSelectNum(selectNum);

                            for (let i=optionNum; i<getData.length; i++) {
                              cusId[i] = -1; optionId[i] = -1;
                              cusId[option.optionNumber] = item.itemNumber; optionId[option.optionNumber] = item.itemId;
                            }

                            for (let i=0; i<getData.length; i++) {
                              child[i] = undefined;
                            }
                            for (let i=0; i<selectNum; i++) {
                              if (cusId[i]<0) continue; 
                              let childList: Props3[] = getData[i].itemList[cusId[i]].itemChild;
                              if (childList === undefined) continue;

                              for (let j=0; j<childList.length; j++) {
                                if (child[childList[j].type] !== undefined) {
                                  child[childList[j].type].array = child[childList[j].type].array.concat(childList[j].array);
                                  child[childList[j].type].array = Array.from(new Set(child[childList[j].type].array));
                                } else child[childList[j].type] = childList[j];
                              }
                            }

                            setChild(child);
                            NumF();
                          }}>
                            {item.itemName}
                        </div>
                      );
                    }
                  )}
              </div>
              {/* {cusId[option.optionNumber]} */}
              {cusId[option.optionNumber]<0 || cusId[option.optionNumber] === undefined?
                <div
                  className={classNames('cake-detail-optionlist-btn', {
                    'cake-detail-optionlist-btn-focus': optionNum===option.optionNumber && selectNum>=option.optionNumber && cusId[option.optionNumber] !== -2,
                  })}>
                  <div></div>
                  <div>
                    <div
                      style={{ color: '#ea5450', border: '1px solid #ea5450' }}>
                      <img src={subtrack} />
                    </div>
                    <div
                      style={{ fontSize: '16px', border: '1px solid #e0e0e0' }}>
                      1
                    </div>
                    <div style={{ color: '#fff', background: '#ea5450' }}>
                      <img src={add} />
                    </div>
                  </div>
                </div>:
                // <></>
                (option.itemList[cusId[option.optionNumber]].itemType === 'normal'?
                  <div
                  className={classNames('cake-detail-optionlist-btn', {
                    'cake-detail-optionlist-btn-focus': optionNum===option.optionNumber && selectNum>=option.optionNumber && cusId[option.optionNumber] !== -2,
                  })}>
                    <div></div>
                    <div>
                      <div
                        style={{ color: '#ea5450', border: '1px solid #ea5450' }}>
                        <img src={subtrack} />
                      </div>
                      <div
                        style={{ fontSize: '16px', border: '1px solid #e0e0e0' }}>
                        1
                      </div>
                      <div style={{ color: '#fff', background: '#ea5450' }}>
                        <img src={add} />
                      </div>
                    </div>
                  </div>:
                  (option.itemList[cusId[option.optionNumber]].itemType === 'text'?
                    <div className='cake-detail-optionlist-input'>
                      <input type='text'/>
                    </div>:
                    <div className='cake-detail-optionlist-input'>
                      <input type='file'/>
                    </div>
                  )
                )
              }

            </div>
          );
        }
      )}
    </>
  );
}

export default OptionList;