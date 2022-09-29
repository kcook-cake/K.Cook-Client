import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/OptionList.scss';

import subtrack from 'src/assets/detail/cake/subtrack.png';
import add from 'src/assets/detail/cake/add.png';

// import subtrack from 'src/styles/detail/cake/subtrack.png';
// import add from 'src/styles/detail/cake/add.png';

interface Props {
  NumF: any,
  cusId: any,
  getData: any;
}

function OptionList({ NumF, cusId, getData }: Props) {
  let [selectNum, setSelectNum] = useState(0); //옵션 불투명도
  let [optionNum, setOptionNum] = useState(-1); //옵션 어떤 것 눌렀는지

  let [child, setChild] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <>
      {getData.map(
        (
          option: {
            optionId: any;
            optionNumber: any;
            optionName: any;
            itemList: any;
          },
          idx: any
        ) => {
          return (
            <>
              <div
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
                        itemId: any;
                        itemNumber: any;
                        itemType: any;
                        itemName: any;
                        itemPrice: any;
                        itemChild: any;
                      }) => {
                        return (
                          <>
                            <div
                              className={classNames('cake-detail-optionlist-select-option', {
                                'cake-detail-optionlist-option-none': 
                                (child[option.optionNumber] === undefined?
                                  false:
                                  child[option.optionNumber].array.find((data: any,)=>{
                                    if (data === item.itemNumber)
                                      return true;
                                  }) !== undefined
                                ),
                              })}
                              onClick={() => {
                                selectNum = option.optionNumber+1;
                                setSelectNum(selectNum);

                                for (var i=optionNum; i<getData.length; i++) {
                                  cusId[i] = -1;
                                  cusId[option.optionNumber] = item.itemNumber;
                                }

                                for (var i=0; i<option.itemList.length; i++) {
                                  child[i] = undefined;
                                }
                                for (var i=0; i<selectNum; i++) {
                                  if (cusId[i]<0) continue; 
                                  var childList = getData[i].itemList[cusId[i]].itemChild;
                                  if (childList === undefined) continue;

                                  for (var j=0; j<childList.length; j++) {
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
                          </>
                        );
                      }
                    )}
                </div>
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

                </div>
              </div>
            </>
          );
        }
      )}
    </>
  );
}

export default OptionList;