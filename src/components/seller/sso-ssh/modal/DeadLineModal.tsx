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
    NumF: any;
    
    deadLineModal: any;
    setDeadLineModalF: any;
}

function DeadLineModal({
    NumF,

    deadLineModal,
    setDeadLineModalF,
}: Props) {
    var weekText = ['월', '화', '수', '목', '금', '토', '일'];
    const [week, setWeek] = useState([0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
    },[]);

    return (
        <>
        <div className="sfc-deadline-modal-flex">
            {deadLineModal && (
                <>
                <div className='sfc-deadline-modal'>
                    <div className="spm-modal-title">마감일 설정</div>
                    {[0, 1, 2, 3, 4, 5, 6].map((data: any)=>{
                        return (
                            <div className='sfc-deadline-modal-week'>
                                {weekText[data]}요일&nbsp;&nbsp;
                                <input type='number' value={week[data]} />
                                &nbsp;&nbsp;일 전 마감
                            </div>
                        );
                    })}

                    <div className="sfc-deadline-modal-btn">
                        <button
                            onClick={() => {
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
