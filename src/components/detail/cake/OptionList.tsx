import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/OptionList.scss';

import subtrack from 'src/assets/detail/cake/subtrack.png';
import add from 'src/assets/detail/cake/add.png';

// import subtrack from 'src/styles/detail/cake/subtrack.png';
// import add from 'src/styles/detail/cake/add.png';

interface Props {
  getData: any;
}

function OptionList({ getData }: Props) {
  let [output, setOutput] = useState([]);
  let [child, setChild] = useState([]);

  const [select, setSelect] = useState(0);
  const [selectShow, setSelectShow] = useState([false, false, false]);
  const [focusNum, setfocusNum] = useState(0);
  useEffect(() => {
    setSelect(focusNum);
    console.log('useE,', focusNum);
  }, [focusNum]);

  const [size, setSize] = useState('A1');
  const [taste, setTaste] = useState('B1');
  const [color, setColor] = useState('D1');

  useEffect(() => {}, []);

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
                className={classNames({
                  'cake-detail-optionlist-flex': idx !== select,
                  'cake-detail-optionlist-flex-focus': idx === select,
                  //  opacity: '1' / '0.4' }}
                })}
                onClick={() => {
                  setSelect(idx);
                  console.log('select1', select);
                }}
              >
                idx:{idx} , select:{select}
                <div style={{ marginBottom: '6px' }}>
                  {idx + 1 + '. ' + option.optionName}
                </div>
                <div
                  className={classNames('cake-detail-optionlist-select', {
                    'cake-detail-optionlist-select-focus': selectShow[idx],
                    /* -focus div {   display: block !important; } */
                  })}
                  onClick={() => {
                    var arr = [...selectShow];
                    var wantgo = !arr[idx];
                    arr = [false, false, false];
                    arr[idx] = wantgo;
                    setSelectShow(arr);
                  }}
                >
                  {/* <select
                                    onChange={(e)=>{
                                        output[idx] = e.target.value; setOutput(output);
                                        setSelect(idx+1);
                                    }}>
                                </select> */}
                  {/* <div>옵션 선택</div> */}
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
                        <div
                          className="cake-detail-optionlist-select-option"
                          style={{
                            width: '100%',
                            height: '20px',
                          }}
                          onClick={() => {
                            if (item.itemChild === undefined) child = [];
                            else child = item.itemChild;
                            setChild(child);
                            setSelect(select + 1);
                            console.log('select', select);
                            console.log('item.itemName', item.itemName);
                            // focus를 2로 넘기는 함수
                            // setSelect((prev) => prev + 1);
                            // if (select >= 2) setSelect(0);
                            // console.log('select', select);
                          }}
                        >
                          <span onClick={() => setfocusNum(select + 1)}>
                            {item.itemName}aa
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="cake-detail-optionlist-btn">
                  <div></div>
                  <div>
                    <div
                      style={{ color: '#ea5450', border: '1px solid #ea5450' }}
                    >
                      <img src={subtrack} />
                    </div>
                    <div
                      style={{ fontSize: '16px', border: '1px solid #e0e0e0' }}
                    >
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
