import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/common/modal/Modal.scss';
import 'src/styles/seller/spm-ssr/modal/ImageModal.scss';

import cake6 from 'src/assets/cake6.png';
import addImage from 'src/assets/seller/sso-ssh/image-add.png'
import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

interface Props {
    NumF: any,
    resize: any,
    TF: any,

    imageModalShow: any,
    setImageModalShowF: any,

    imageData: any,
}

const ImageModal = ({
        NumF, resize, TF,
        imageModalShow, setImageModalShowF, 
        imageData, 
    }: Props) => {

    const AddImageF = () => {
        for (var i=1; i<6; i++) {
            // if (formData.get("productImage"+(i)) === formData2.get("productImage"+(i))) continue;
            formData.append(
                "productImage"+(i),
                new Blob([JSON.stringify(formData.get("productImage"+(i)))], { type: "application/json" })
            )
        }
        axios({
            url: "/app/products/102/photos",
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarybuOGBs9coioS5Kb9',
                'X-ACCESS-TOKEN' : (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
            },
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const UpdateImageF = () => {
        // axios({
        //     url: "/app/products",
        //     method: "POST",
        //     data: formData,
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'X-ACCESS-TOKEN' : (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
        //     },
        // }).then((res)=>{
        // }).catch((err)=>{
        // })
    }

    const MakeFormDataF = useCallback((e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
        if (idx === 0) imageChange();
        else if (idx === 1) imageChange1();
        else if (idx === 2) imageChange2();
        else if (idx === 3) imageChange3();
        else imageChange4();

        formData.set("productImage"+(idx+1), e.target.files[0]);
        setFormData(formData);
        for (var i=1; i<6; i++)
            if (imageTF[i-1]) {
                formData.set("productImage"+(i), null);
                setFormData(formData);
            }
        NumF();
    },[]);

    let [imageTF, setImageTF] = useState([true, true, true, true, true]);
    const [preImage, setPreImage] = useState<File>(); const [preImage1, setPreImage1] = useState<File>(); const [preImage2, setPreImage2] = useState<File>(); const [preImage3, setPreImage3] = useState<File>(); const [preImage4, setPreImage4] = useState<File>();
    const [addPhoto, setAddPhoto] = useState<string>(); const [addPhoto1, setAddPhoto1] = useState<string>(); const [addPhoto2, setAddPhoto2] = useState<string>(); const [addPhoto3, setAddPhoto3] = useState<string>(); const [addPhoto4, setAddPhoto4] = useState<string>();
    const photoInput = useRef<HTMLInputElement>(); const photoInput1 = useRef<HTMLInputElement>(); const photoInput2 = useRef<HTMLInputElement>(); const photoInput3 = useRef<HTMLInputElement>(); const photoInput4 = useRef<HTMLInputElement>();
    
    const imageChange = () => {
        const file = photoInput.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage(file);
        else
            setPreImage(null);
        imageTF[0] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto(reader.result as string);
            };
            reader.readAsDataURL(preImage);
        } else
            setAddPhoto(null);
    },[preImage]);

    const imageChange1 = () => {
        const file = photoInput1.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage1(file);
        else
            setPreImage1(null);
        imageTF[1] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage1) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto1(reader.result as string);
            };
            reader.readAsDataURL(preImage1);
        } else
            setAddPhoto1(null);
    },[preImage1]);

    const imageChange2 = () => {
        const file = photoInput2.current.files[0];
        if (file && file.type.substr(0, 5) === "image") 
            setPreImage2(file);
        else 
            setPreImage2(null);
        imageTF[2] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage2) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto2(reader.result as string);
            };
            reader.readAsDataURL(preImage2);
        } else
            setAddPhoto2(null);
    },[preImage2]);

    const imageChange3 = () => {
        const file = photoInput3.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage3(file);
        else
            setPreImage3(null);
        imageTF[3] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage3) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto3(reader.result as string);
            };
            reader.readAsDataURL(preImage3);
        } else
            setAddPhoto3(null);
    },[preImage3]);

    const imageChange4 = () => {
        const file = photoInput4.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage4(file);
        else
            setPreImage4(null);
        imageTF[4] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage4) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto4(reader.result as string);
            };
            reader.readAsDataURL(preImage4);
        } else
            setAddPhoto4(null);
    },[preImage4]);


    let [formData, setFormData] = useState(new FormData);
    let [formData2, setFormData2] = useState(new FormData);
    // var formData = new FormData();
    useEffect(()=>{
        for (var i=1; i<6; i++) {
            formData.append("productImage"+(i), null); setFormData(formData);
            formData2.append("productImage"+(i), null); setFormData2(formData2);
        }
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
                        left: resize <= 767? 20: (resize-775)/2,
                }}>
                <div className="spm-modal-title">이미지 등록</div>
                <div className="spm-modal-subtitle">대표이미지(1장)</div>
                <div className="spm-modal-img-inner">
                    <div className="spm-modal-img-flex">
                        <form>
                            <button
                                onClick={(e)=>{
                                    e.preventDefault();
                                    photoInput.current.click();
                                }}>
                                <div className='spm-modal-img'>
                                    {imageTF[0]? 
                                        (imageData[0]===''||imageData[0]===null||imageData[0]===undefined?
                                            <div className='spm-modal-img-inner-icon'>
                                                <AddIcon />
                                            </div>:
                                            <img src={imageData[0]}/>):
                                        <img src={addPhoto}/>
                                    }
                                </div>
                            </button>
                            <input
                                id="spm-file-0"
                                className='modal-input'
                                type="file"
                                accept="image/*"
                                ref={photoInput}
                                onChange={(e)=>MakeFormDataF(e, 0)}
                            />
                        </form>
                    </div>
                </div>

                <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
                <div className="modal-scroll">
                    <div className="spm-modal-img-flex">
                        <form>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                photoInput1.current.click();
                            }}>
                                <div className='spm-modal-img'>
                                    {imageTF[1]? 
                                        (imageData[1]===''||imageData[1]===null||imageData[1]===undefined?     
                                            <div className='spm-modal-img-inner-icon'>
                                                <AddIcon />
                                            </div>:
                                            <img src={imageData[1]}/>):
                                        <img src={addPhoto1}/>
                                    }
                                </div>
                            </button>
                            <input
                                id="spm-file-1"
                                className='modal-input'
                                type="file"
                                accept="image/*"
                                ref={photoInput1}
                                onChange={(e)=>MakeFormDataF(e, 1)}
                            />
                        </form>
                    </div>
                    <div className="spm-modal-img-flex">
                        <form>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                photoInput2.current.click();
                            }}>
                                <div className='spm-modal-img'>
                                    {imageTF[2]? 
                                        (imageData[2]===''||imageData[2]===null||imageData[2]===undefined?
                                            <div className='spm-modal-img-inner-icon'>
                                                <AddIcon />
                                            </div>:
                                            <img src={imageData[2]}/>):
                                        <img src={addPhoto2}/>
                                    }
                                </div>
                            </button>
                            <input
                                id="spm-file-2"
                                className='modal-input'
                                type="file"
                                accept="image/*"
                                ref={photoInput2}
                                onChange={(e)=>MakeFormDataF(e, 2)}
                            />
                        </form>
                    </div>
                    <div className="spm-modal-img-flex">
                        <form>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                photoInput3.current.click();
                            }}>
                                <div className='spm-modal-img'>
                                    {imageTF[3]? 
                                        (imageData[3]===''||imageData[3]===null||imageData[3]===undefined?
                                            <div className='spm-modal-img-inner-icon'>
                                                <AddIcon />
                                            </div>:
                                            <img src={imageData[3]}/>):
                                        <img src={addPhoto3}/>
                                    }
                                </div>
                            </button>
                            <input
                                id="spm-file-3"
                                className='modal-input'
                                type="file"
                                accept="image/*"
                                ref={photoInput3}
                                onChange={(e)=>MakeFormDataF(e, 3)}
                            />
                        </form>
                    </div>
                    <div className="spm-modal-img-flex">
                        <form>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                photoInput4.current.click();
                            }}>
                                <div className='spm-modal-img'>
                                    {imageTF[4]? 
                                        (imageData[4]===''||imageData[4]===null||imageData[4]===undefined?
                                            <div className='spm-modal-img-inner-icon'>
                                                <AddIcon />
                                            </div>:
                                            <img src={imageData[4]}/>):
                                        <img src={addPhoto4}/>
                                    }
                                </div>
                            </button>
                            <input
                                id="spm-file-4"
                                className='modal-input'
                                type="file"
                                accept="image/*"
                                ref={photoInput4}
                                onChange={(e)=>MakeFormDataF(e, 4)}
                            />
                        </form>
                    </div>
                </div>

                <div className="spmdetail-content-btn-box spmdetail-btn-box">
                    <button
                        className="spmdetail-content-btn"
                        onClick={() => {
                            if (TF) AddImageF();
                            else UpdateImageF();
                            setImageModalShowF(false);
                            NumF();
                        }}>
                        등록
                    </button>
                    <button
                        className="spmdetail-content-btn"
                        style={{ color: "#ea5450", backgroundColor: "#fff", }}
                        onClick={() => {
                            imageTF[0] = true; imageTF[1] = true; imageTF[2] = true; imageTF[3] = true; imageTF[4] = true; 
                            setImageTF(imageTF);
                            setImageModalShowF(false);
                            NumF();
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