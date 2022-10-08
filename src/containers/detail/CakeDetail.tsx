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
import Cake_Detail_TestData from 'src/testdata/Cake_Detail_TestData';
import Cake_Detail_Static_TestData from 'src/testdata/Cake_Detail_Static_TestData';
import Group2List from 'src/components/detail/cake/Group2List';

const CakeDetail = () =>{
    const [num, setNum] = useState(0);


    const ChangeDataF = (date: string, ) => {
        //axios -> date를 기준으로 order cake.maxOfToday, order store-group.count 비교
        //get /api/cake-detail
        setPickUp(Group2List(Cake_Detail_TestData()));
    }



    const [selectShow, setSelectShow] = useState([true, true, true]);
    const [date, setDate] = useState("");
    const [pickUp, setPickUp] = useState([]);
    let [option, setOption] = useState([]);

    const [groupTimeId, setGroupTimeId] = useState([-1, '']);
    let [cusId, setCusId] = useState([]);


    let [image, setImage] = useState(null);
    let [cakeData, setCakeData] = useState({
        cakeId: 0,
        image: "", //필수
        name: "", //필수
        price: 0, //필수
        storeName: "",
        isTodayCake: false,
        deadline: [],
        optionsList: [],
        productImage1: null,
        productImage2: null,
        productImage3: null,
        productImage4: null,
        productImage5: null,
    });



    let [heightTF, setHeightTF] = useState(false);
    let [height, setHeight] = useState(window.innerHeight);
    const handleHeight = () => {
        height = window.innerHeight
        setHeight(height);
    };
    useEffect(()=>{
        $(".hm-pc-flex").show();
        LinkClick("Cake");

        let isComponentMounted = true;
        /*
        axios({
            url: "/app/products/105",
            method: "GET",
        }).then((res)=>{
            data = res.data.result; setData(data);
            image = data.productImage1; setImage(image);

            option = List2Option(data.optionsList); setOption(option);

            for (var i=0; i<option.length; i++) cusId[i] = -1;
            setCusId(cusId);
        }).catch((err)=>{
        })
        */
        var today = new Date();
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        var dateString = year + '-' + month  + '-' + day;
        setDate(dateString);

        ChangeDataF(dateString);
        option = List2Option(Cake_Detail_Static_TestData().optionsList); setOption(option);
        cakeData = Cake_Detail_Static_TestData(); setCakeData(cakeData);

        setHeight(window.innerHeight);
        window.addEventListener('height', handleHeight);
        heightTF = ($('.cake-detail-right').height() > height);
        setHeightTF(heightTF);
        return () => {
            isComponentMounted = false;
            window.removeEventListener("resize", handleHeight);
        }
    },[]);

    return(
        <div className="cake-detail-flex">
            <div className="cake-detail">
                <div className="cake-detail-inner">
                    <div className='cake-detail-left'>
                        <div className='cake-detail-main-img'>
                            <div className='cake-detail-main-img-inner'>
                                {image!==null? 
                                    <img src={image} />: 
                                    <div>~준비중~</div>
                                }
                            </div>
                        </div>
                        <div className='cake-detail-sub-img'>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.productImage1==="" || cakeData.productImage1===null || cakeData.productImage1===undefined || cakeData.productImage1.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.productImage1} 
                                        onClick={()=>{ image = cakeData.productImage1; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.productImage2==="" || cakeData.productImage2===null || cakeData.productImage2===undefined || cakeData.productImage2.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.productImage2} 
                                        onClick={()=>{ image = cakeData.productImage2; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.productImage3==="" || cakeData.productImage3===null || cakeData.productImage3===undefined || cakeData.productImage3.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.productImage3} 
                                        onClick={()=>{ image = cakeData.productImage3; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.productImage4==="" || cakeData.productImage4===null || cakeData.productImage4===undefined || cakeData.productImage4.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.productImage4} 
                                        onClick={()=>{ image = cakeData.productImage4; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.productImage5==="" || cakeData.productImage5===null || cakeData.productImage5===undefined || cakeData.productImage5.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.productImage5} 
                                        onClick={()=>{ image = cakeData.productImage5; setImage(image); }}/>
                                }
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
                                        <div className='cake-detail-right-store-name'>{cakeData.storeName} &gt;</div>
                                    </div>
                                </Link>
                                <div className='cake-detail-right-store-cake'>
                                    {cakeData.name}
                                </div>
                                <div className='cake-detail-right-price'>
                                    {MakePrice(cakeData.price)}원
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
                                        <Date_Calendar date={date} setDateF={setDate} ChangeDataF={ChangeDataF} setGroupTimeIdF={setGroupTimeId} />
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
                                        <PickUp getData={pickUp} groupTimeId={groupTimeId} setGroupTimeIdF={setGroupTimeId} />
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
                                <div
                                    onClick={()=>{
                                        console.log(date);
                                        console.log(cakeData.cakeId);
                                        console.log(groupTimeId);
                                        console.log(cusId);
                                    }}>
                                    주문하기
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default CakeDetail;