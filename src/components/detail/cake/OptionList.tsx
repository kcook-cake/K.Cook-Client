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
    useEffect(()=>{
    },[]);

    return (
        <>
            {getData.map((data:{ optionId: any, optionName: any, optionList: any, }, idx: any, )=>{
                return (
                    <>
                        <div className='cake-detail-optionlist-flex'>
                            <div style={{ marginBottom: "6px", }}>{(idx+1)+". "+data.optionName}</div>
                            <div className='cake-detail-optionlist-select'>
                                <select>
                                    <option disabled>옵션 선택</option>
                                    {data.optionList.map(( option:{optionListId: any, optionListName: any, optionListPrice: any,} )=>{
                                        return (
                                            <option>
                                                {option.optionListName}
                                            </option>
                                        );
                                    })}
                                </select>
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