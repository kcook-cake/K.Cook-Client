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
import likeFill from 'src/assets/detail/cake/likeFill.png';
import share from 'src/assets/detail/cake/share.png';
import profile from 'src/assets/detail/cake/profile.png';

import MakePrice from 'src/utils/MakePrice';
import PickUp from 'src/components/detail/cake/PickUp';
import ColorBox from 'src/components/detail/cake/ColorBox';
import OptionList from 'src/components/detail/cake/OptionList';
import Date_Calendar from 'src/components/detail/cake/Date_Calendar';
import List2Option from 'src/utils/List2Option';
import Group2List from 'src/components/detail/cake/Group2List';

import Cake_Detail_Static_TestData from 'src/testdata/detail/Cake_Detail_Static_TestData';
import Cake_Detail_Date_TestData from 'src/testdata/detail/Cake_Detail_Date_TestData';

const CakeDetail = () =>{
    const [num, setNum] = useState(0);


    const ChangeDataF = (date: string, ) => {
        //axios -> date를 기준으로 order cake.maxOfToday, order store-group.count 비교
        //get /app/cake-detail/groups?date=
        console.log(date);
        setPickUp({
            cakeTF: false,
            groupsList: Group2List(Cake_Detail_Date_TestData().groupsList),
        });
    }



    const [selectShow, setSelectShow] = useState([true, true, true]);
    const [date, setDate] = useState("");
    const [pickUp, setPickUp] = useState({
        cakeTF: false,
        groupsList: [],
    });
    const [option, setOption] = useState([]);

    const [groupTimeId, setGroupTimeId] = useState([-1, '']);
    const [optionId, setOptionId] = useState([]);
    const [cusId, setCusId] = useState([]);


    let [image, setImage] = useState(null);
    let [cakeData, setCakeData] = useState({
        cakeId: 0,
        name: "", 
        price: 0, 
        likes: 0,
        likeStatus: false,
        todayCake: false,
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        storeId: 0,
        storeName: 0,
        deadline: [],
        optionsList: [],
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
        let pathname = window.location.pathname.split("/"); //cakeId 가져오기
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

        ChangeDataF(dateString); //cake_detail_date -> groupsList PickUp
        setOption(List2Option(Cake_Detail_Static_TestData().optionsList));
        setCakeData(Cake_Detail_Static_TestData());
        setImage(Cake_Detail_Static_TestData().image1);

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
                                {image==="" || image===null || image===undefined || image.length===133? 
                                    <div>~준비중~</div>:
                                    <img src={image} />
                                }
                            </div>
                        </div>
                        <div className='cake-detail-sub-img'>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.image1==="" || cakeData.image1===null || cakeData.image1===undefined || cakeData.image1.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.image1} 
                                        onClick={()=>{ image = cakeData.image1; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.image2==="" || cakeData.image2===null || cakeData.image2===undefined || cakeData.image2.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.image2} 
                                        onClick={()=>{ image = cakeData.image2; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.image3==="" || cakeData.image3===null || cakeData.image3===undefined || cakeData.image3.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.image3} 
                                        onClick={()=>{ image = cakeData.image3; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.image4==="" || cakeData.image4===null || cakeData.image4===undefined || cakeData.image4.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.image4} 
                                        onClick={()=>{ image = cakeData.image4; setImage(image); }}/>
                                }
                            </div>
                            <div className='cake-detail-sub-img-inner'>
                                {cakeData.image5==="" || cakeData.image5===null || cakeData.image5===undefined || cakeData.image5.length===103?
                                    <div>~준비중~</div>:
                                    <img 
                                        src={cakeData.image5} 
                                        onClick={()=>{ image = cakeData.image5; setImage(image); }}/>
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
                                <Link to={"/Store/"+cakeData.storeName}>
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
                                    <div 
                                        style={{ float: "right", marginRight: "20px", }}
                                        onClick={()=>{
                                            //patch /app/cake-detail/likes
                                        }}>
                                        {cakeData.likeStatus?
                                            <img src={likeFill} width={18.5} height={18.5} />:
                                            <img src={like} width={18.5} height={18.5} />
                                        }
                                        <div className='cake-detail-right-like-price'>{cakeData.likes}</div>
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
                                {selectShow[0]&&
                                    <div style={{ pointerEvents: (cakeData.todayCake? "none": "auto")}}>
                                        <Date_Calendar 
                                            date={date} setDateF={setDate} 
                                            deadline={cakeData.deadline}
                                            ChangeDataF={ChangeDataF} 
                                            setGroupTimeIdF={setGroupTimeId} />
                                        <ColorBox />
                                    </div>
                                }
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
                                        <PickUp getData={pickUp.groupsList} groupTimeId={groupTimeId} setGroupTimeIdF={setGroupTimeId} />
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
                                            optionId={optionId}
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
                                <div 
                                    style={{ color: "#000", border: "1px solid #e0e0e0", background: "#fff"}}
                                    onClick={()=>{
                                        console.log(cakeData.cakeId);
                                        console.log(date);
                                        console.log(groupTimeId);
                                        console.log(optionId);
                                    }}>
                                    장바구니
                                </div>
                                <div
                                    onClick={()=>{
                                        console.log(pickUp.cakeTF);
                                        console.log(cakeData.cakeId);
                                        console.log(date);
                                        console.log(groupTimeId);
                                        console.log(optionId);
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