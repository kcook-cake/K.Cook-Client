import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from "jquery";
import '../../styles/detail/CakeDetail.scss';

import LinkClick from 'src/utils/LinkClick';

import test1 from 'src/assets/test1.png';
import cake6 from 'src/assets/cake6.png';
import selectArrow from 'src/assets/detail/cake/selectArrow.png';
import date_calendar from 'src/assets/detail/cake/date_calendar.png';
import pickup from 'src/assets/detail/cake/pickup.png';
import optionlist from 'src/assets/detail/cake/optionlist.png';
import like from 'src/assets/detail/cake/like.png';
import share from 'src/assets/detail/cake/share.png';
import profile from 'src/assets/detail/cake/profile.png';

import MakePrice from 'src/utils/MakePrice';
import PickUp from 'src/components/detail/cake/PickUp';
import ColorBox from 'src/components/detail/cake/ColorBox';
import OptionList from 'src/components/detail/cake/OptionList';
import Date_Calendar from 'src/components/detail/cake/Date_Calendar';
import List2Option from 'src/utils/List2Option';
import SPM_Data_Test from 'src/utils/SPM_Data_Test';

const CakeDetail = () =>{
    const [num, setNum] = useState(0);

    const [today, setToday] = useState("");
    const [selectShow, setSelectShow] = useState([true, true, true]);
    const [date, setDate] = useState("");
    const [pickUp, setPickUp] = useState(["10:00~11:00", "11:00~12:00", "21:00~22:00"]);
    let [option, setOption] = useState([]);
    let [cus, setCus] = useState([]);
    let [cusId, setCusId] = useState([]);



    let [height, setHeight] = useState(window.innerHeight);
    let [heightTF, setHeightTF] = useState(false);
    const handleHeight = () => {
        height = window.innerHeight
        setHeight(height);
    };
    let [data, getData] = useState({
        name: '',
        storeName: '',
        price: '',
        optionsList: [],
    });
    useEffect(()=>{
        setHeight(window.innerHeight);
        window.addEventListener('height', handleHeight);

        heightTF = ($('.cake-detail-right').height() > height);
        setHeightTF(heightTF);

        $(".hm-pc-flex").show();
        LinkClick("Cake");

        axios({
            url: "/app/products/87",
            method: "GET",
        }).then((res)=>{
            data = res.data.result; getData(data);
            option = List2Option(data.optionsList); setOption(option);
            for (var i=0; i<option.length; i++) {
                // cus[i] = '선택';
                cusId[i] = -1;
            }
            setCus(cus);
        }).catch((err)=>{
        })
    },[]);

    return(
        <div className="cake-detail-flex">
            <div className="cake-detail">
                <div className="cake-detail-inner">
                    <div className='cake-detail-left'>
                        <div className='cake-detail-main-img'>
                            <div className='cake-detail-main-img-inner'>
                                {true?
                                    <img src={test1} />:
                                    <div>~준비중 입니다~</div>
                                }
                            </div>
                        </div>
                        <div className='cake-detail-sub-img'>
                            <div className='cake-detail-sub-img-inner'>
                                {true? <img src={test1} />: <div>~준비중~</div>}
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {true? <img src={test1} />: <div>~준비중~</div>}
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {false? <img src={test1} />: <div>~준비중~</div>}
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {false? <img src={test1} />: <div>~준비중~</div>}
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {false? <img src={test1} />: <div>~준비중~</div>}
                            </div>
                        </div>
                        <div className='cake-detail-box'>
                            상품 정보
                            <hr/>
                        </div>
                        <div className='cake-detail-box'>
                            구매 후기
                            <hr/>
                        </div>
                        <div style={{ height: "2000px"}}></div>
                    </div>

                    <div className='cake-detail-right'>
                        {/* <div style={{ width: "611.3px", height: "5px", }}></div> */}
                        {/* <div className='cake-detail-height'                               
                            style={{ 
                                height: 
                                    $(".cake-detail-right-inner").height() > height? 
                                        (height-50)+"px": 
                                        "auto", 
                            }}> */}
                            <div 
                                className='cake-detail-right-inner'
                                style={{ 
                                    height: 
                                        heightTF? 
                                            (height-50)+"px": 
                                            "auto"
                                }}>
                                <div className='cake-detail-right-box'>
                                    <Link to="/Store/0">
                                        <div className='cake-detail-right-store'>
                                            {true?
                                                <img src={cake6} />:
                                                <img src={profile} />
                                            }
                                            <div className='cake-detail-right-store-name'>{data.storeName} &gt;</div>
                                        </div>
                                    </Link>
                                    <div className='cake-detail-right-store-cake'>
                                        {data.name}
                                    </div>
                                    <div className='cake-detail-right-price'>
                                        {MakePrice(data.price)}원
                                        <img src={share} />
                                        <div style={{ float: "right", marginRight: "20px", }}>
                                            <img src={like} width={18.5} height={18.5} />
                                            <div className='cake-detail-right-like-price'>68</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cake-detail-right-box-inner'>
                                    <img src={date_calendar} />
                                    <img
                                        src={selectArrow}
                                        className={classNames('cake-detail-img', {
                                            'cake-detail-img-active': selectShow[0],
                                        })}
                                        onClick={()=>{
                                            var s = selectShow;
                                            if (selectShow[0]) s[0] = false;
                                            else s[0] = true;

                                            setSelectShow(s);
                                            setNum(num+1);
                                        }}/>
                                    <div>날짜 선택</div>
                                    <hr/>
                                    {selectShow[0]?
                                        <>
                                            <Date_Calendar date={date} />
                                            <ColorBox />
                                        </>
                                    :null}
                                </div>
                                <div className='cake-detail-right-box-inner'>
                                    <img src={pickup} />
                                    <img
                                        src={selectArrow}
                                        className={classNames('cake-detail-img', {
                                            'cake-detail-img-active': selectShow[1],
                                        })}
                                        onClick={()=>{
                                            var s = selectShow;
                                            if (selectShow[1]) s[1] = false;
                                            else s[1] = true;

                                            setSelectShow(s);
                                            setNum(num+1);
                                        }}/>
                                    <div>픽업시간 선택</div>
                                    <hr/>
                                    {selectShow[1]?
                                        <>
                                            <PickUp getData={pickUp} />
                                            <ColorBox />
                                        </>
                                    :null}
                                </div>
                                <div className='cake-detail-right-box-inner'>
                                    <img src={optionlist} />
                                    <img
                                        src={selectArrow}
                                        className={classNames('cake-detail-img', {
                                            'cake-detail-img-active': selectShow[2],
                                        })}
                                        onClick={()=>{
                                            var s = selectShow;
                                            if (selectShow[2]) s[2] = false;
                                            else s[2] = true;

                                            setSelectShow(s);
                                            setNum(num+1);
                                        }}/>
                                    <div>옵션 선택</div>
                                    <hr/>
                                    {selectShow[2]?
                                        <>
                                            <OptionList 
                                                NumF={()=>setNum(num+1)} 
                                                cusId={cusId}    
                                                getData={option} 
                                            />
                                        </>
                                    :null}
                                </div>
                                <hr className='cake-detail-right-hr'/>
                                <div className='cake-detail-right-all-price'>
                                    총 금액
                                    <div style={{ fontSize: "22px", }}>
                                        {MakePrice(75000)+"원"}
                                    </div>
                                </div>
                                <div className='cake-detail-right-btn'>
                                    <div style={{ color: "#000", border: "1px solid #e0e0e0", background: "#fff"}}>장바구니</div>
                                    <div>주문하기</div>
                                </div>

                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CakeDetail;