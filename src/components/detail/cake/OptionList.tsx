import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/OptionList.scss';

import subtrack from 'src/assets/detail/cake/subtrack.png';
import add from 'src/assets/detail/cake/add.png';

// import subtrack from 'src/styles/detail/cake/subtrack.png';
// import add from 'src/styles/detail/cake/add.png';


interface Props {
    getData: any
}

function OptionList({getData}: Props) {
    const [select, setSelect] = useState(0);
    let [output, setOutput] = useState([]);
    let [child, setChild] = useState([]);



    useEffect(()=>{
    },[]);

    return (
        <>
            {getData.map((option:{ optionId: any, optionNumber: any, optionName: any, itemList: any, }, idx: any, )=>{
                return (
                    <>
                        <div
                            className='cake-detail-optionlist-flex'
                            style={{ opacity: (select<idx? "0.4": "1"), }}>
                            <div style={{ marginBottom: "6px", }}>{(idx+1)+". "+option.optionName}</div>
                            <div className='cake-detail-optionlist-select'>
                                {/* <select
                                    onChange={(e)=>{
                                        output[idx] = e.target.value; setOutput(output);
                                        setSelect(idx+1);
                                    }}>
                                </select> */}
                                {/* <div>옵션 선택</div> */}
                                {option.itemList.map(( item:{itemId: any, itemNumber: any, itemType: any, itemName: any, itemPrice: any, itemChild: any, } )=>{
                                    return (
                                        <div
                                            style={{ width: "100%", height: "10px", background: "green" }}
                                            onClick={()=>{
                                                if (item.itemChild === undefined) child = [];
                                                else child = item.itemChild;
                                                setChild(child);
                                                console.log(child);
                                            }}>
                                            {item.itemName}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='cake-detail-optionlist-btn'>
                                <div></div>
                                <div>
                                    <div style={{ color: "#ea5450", border: "1px solid #ea5450", }}>
                                        <img src={subtrack} />
                                    </div>
                                    <div style={{ fontSize: "16px", border: "1px solid #e0e0e0" }}>
                                        1
                                    </div>
                                    <div style={{ color: "#fff", background: "#ea5450", }}>
                                        <img src={add} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default OptionList;