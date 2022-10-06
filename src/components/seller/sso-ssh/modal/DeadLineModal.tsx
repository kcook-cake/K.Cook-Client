import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import 'src/styles/seller/sss/modal/ImageModal.scss';
import 'src/styles/main/home/image-modal/ImageModal.scss';
import 'src/styles/seller/sso-ssh/modal/FcSecondModal.scss';
import 'src/styles/seller/sso-ssh/modal/DeadLineModal.scss';

import add from 'src/assets/seller/sso-ssh/add.png';
import subtract from 'src/assets/seller/sso-ssh/subtract.png';
import sub_add from 'src/assets/detail/cake/add.png';
import sub_subtract from 'src/assets/detail/cake/subtrack.png';
import KCOOKScroll from 'src/utils/KCOOKScroll';


interface Props {
    NumF: Function;

    deadLineModal: boolean;
    setDeadLineModalF: Function;
}

function DeadLineModal({
    NumF,

    deadLineModal,
    setDeadLineModalF,
}: Props) {
    var weekText = ['월', '화', '수', '목', '금', '토', '일'];
    const [week, setWeek] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

    const handleWeek = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let w: number[] = week;  w[idx] = parseInt(e.target.value);
        setWeek(w);
        NumF();
    };

    useEffect(() => {
    },[]);

    return (
        <>
        <div className="sfc-deadline-modal-flex">
            {deadLineModal && (
                <>
                <div className='sfc-deadline-modal'>
                    <div className="spm-modal-title">마감일 설정</div>
                    {[0, 1, 2, 3, 4, 5, 6].map((data: number)=>{
                        return (
                            <div 
                                key={data} 
                                className='sfc-deadline-modal-week'>
                                {weekText[data]}요일&nbsp;&nbsp;
                                <input type='number' value={week[data]} onChange={(e)=>{handleWeek(e, data)}}/>
                                &nbsp;&nbsp;일 전 마감
                            </div>
                        );
                    })}

                    <div className="sfc-deadline-modal-btn">
                        <button
                            onClick={() => {
                                //post /api/store/deadline
                                /*
                                    axios({
                                        url: `/api/store/deadline`,
                                        method: 'POST',
                                        data: {
                                            deadline: week, //[0, 0, 0, 0, 0, 0, 0]
                                        },
                                        header: {
                                            X-ACCESS-TOKEN: ...,
                                        },
                                    })
                                    .then((res)=>{})
                                    .catch((err)=>{})
                                */
                                setDeadLineModalF(false);
                                NumF();
                            }}>
                            등록
                        </button>
                    </div>
                </div>
            </>
            )}
        </div>
        </>
    );
}

export default DeadLineModal;
