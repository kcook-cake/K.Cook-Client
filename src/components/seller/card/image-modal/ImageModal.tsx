import React, { useState, useEffect } from 'react';
import 'src/styles/seller/card/image-modal/ImageModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

interface Props {
    num: any,
    setNum: any,
    resize: any,

    imageModalShow: any,
    setImageModalShowF: any,

    imageData: any,
    setImageDataF: any,
}

type userType = {
    [key: string]: any;
}

function ImageModal ({
        num, setNum, resize,
        imageModalShow, setImageModalShowF, 
        imageData, setImageDataF,
    }: Props) {
    const [image, setImage] = useState(imageData);
    // const [image, setImage] = useState(['', '', '', '', '']);

    useEffect(()=>{
    },[]);

    return (
        <>
        <div className="spm-modal">
            {imageModalShow ? (
            <>
                <div
                className="spm-modal-background"
                style={{ top: window.pageYOffset }}>
                </div>

                <div
                className="spm-modal-box"
                style={{
                    top:
                    resize <= 767 ? 
                    window.innerHeight - 530 < 0 ? window.pageYOffset : window.pageYOffset + 20 : 
                    window.innerHeight - 775 < 0 ? window.pageYOffset : window.pageYOffset + (window.innerHeight - 775) / 2,
                }}>
                <div className="spm-modal-title">이미지 등록</div>
                <div className="spm-modal-subtitle">대표이미지(1장)</div>
                <div
                    className="spm-modal-img-inner"
                    onClick={() => {
                    //addImage[0] = 사진 링크 넣기
                    }}>
                    {image[0] == '' ? (
                    <div
                        className="spm-add-img"
                        onClick={()=>{
                        
                        }}>
                        <AddIcon />
                    </div>
                    ) : (
                    <img src={image[0]} />
                    )}
                </div>
                <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
                <div className="spm-modal-img-box">
                    <div className="spm-modal-img-inner">
                    {image[1] == '' ? (
                        <div className="spm-add-img">
                        <AddIcon />
                        </div>
                    ) : (
                        <img src={image[1]} />
                    )}
                    </div>
                    <div className="spm-modal-img-inner">
                    {image[2] == '' ? (
                        <div className="spm-add-img">
                        <AddIcon />
                        </div>
                    ) : (
                        <img src={image[2]} />
                    )}
                    </div>
                    <div className="spm-modal-img-inner">
                    {image[3] == '' ? (
                        <div className="spm-add-img">
                        <AddIcon />
                        </div>
                    ) : (
                        <img src={image[3]} />
                    )}
                    </div>
                    <div className="spm-modal-img-inner">
                    {image[4] == '' ? (
                        <div className="spm-add-img">
                        <AddIcon />
                        </div>
                    ) : (
                        <img src={image[4]} />
                    )}
                    </div>
                </div>
                <div className="spmdetail-content-btn-box">
                    <button
                        className="spmdetail-content-btn"
                        onClick={() => {
                            console.log(imageData);
                            setImageDataF(image);
                            setImageModalShowF(false);
                            console.log(imageData);
                            setNum(num+1);
                        }}>
                        등록
                    </button>
                    <button
                        className="spmdetail-content-btn spmdetail-content-btn-left"
                        onClick={() => {
                            setImage(imageData);
                            setImageModalShowF(false);
                            setNum(num+1);
                        }}>
                        취소
                    </button>
                </div>
                </div>
            </>
            ) : null}
        </div>
        </>
    );
}

export default ImageModal;