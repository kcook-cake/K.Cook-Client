import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import $ from 'jquery';
import 'src/styles/main/CakeStore.scss';

import axios from 'axios';

import search from "../../../assets/search.svg";
import selectAllow from "../../../assets/selectArrow.png";
import X from "../../../assets/x.svg";

import getAxios from 'src/utils/getAxios';
import PickCard from 'src/components/main/card/PickCard';
import CakeCard from 'src/components/main/card/CakeCard';
import LinkClick from 'src/utils/LinkClick';
import CakeStoreTitle from 'src/components/main/card/cake-store/CakeStoreTitle';
import SelectWindow from 'src/components/main/card/cake-store/SelectWindow';
import SelectBar from 'src/components/main/card/cake-store/SelectBar';
import SelectBox from 'src/components/main/card/cake-store/SelectBox';

function Cake (){
    const [num, setNum] = useState(0);

    //선택지 가로 위치 계산
    const [width, setWidth] = useState(0);
    const SelectCloseF = () => {
        var n1: any = $(".cake-flex").width();
        var n2: any = $(".cake").width();
        if ((n1-n2)/2 < 0) setWidth(0);
        else setWidth((n1-n2)/2);

        for (var i=1; i<5; i++) {
            selectWindow[i][0] = false;
          }
          setNum(num+1);
    };



    //선택지창
    const [selectWindow, setSelectWindow] = useState([
        [false, "정렬", 0],
        [false, "지역", 0],
        [false, "맛", 0],
        [false, "이벤트", 0],
        [false, "가격대", 0],
    ]);
    //선택지바
    const [selectAll, setSelectAll] = useState([]);

    //선택지 모바일
    const [selectMobileTF, setSelectMobileTF] = useState(false);

    //더보기
    const [cakeDetail, setCakeDetail] = useState(true);
    
    
    const [resize, setResize] = useState(0);
    const handleResize = () => {
      setResize(window.innerWidth);
    };

    const [data, setData] = useState([]);
    //0페이지부터 시작한다
    const [pageTodays, setPageTodays] = useState(0);
    const [lengthTodays, setLengthTodays] = useState(0);
    useEffect(() => {
        LinkClick("Cake");

        setResize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        getAxios(setData, setLengthTodays, "cakes", [], 24, pageTodays, 0);
    },[]);

    return(
        <>
        <div className="cake-flex">
            {/* 선택지창 */}
            {resize>767 || selectMobileTF?
                <SelectWindow
                    cakestoreTF={true} width={width} height={250}
                    num={num} setNumF={setNum}
                    setSelectMobileTF={setSelectMobileTF} SelectCloseF={SelectCloseF}
                    selectAll={selectAll} selectWindow={selectWindow} />
                :null
            }

            <div className="cake">
                <div className="cake-select-flex">
                    <div
                        className="mobile cake-search"
                        onClick={()=>{
                            setSelectMobileTF(true);
                        }}>
                        <img src={search} />
                        상세검색
                    </div>

                    {/* 선택지 박스 */}
                    <SelectBox cakestoreTF={true} selectWindow={selectWindow} SelectCloseF={SelectCloseF} />

                    {/* 선택지 바 */}
                    {(resize>767 || selectMobileTF) && selectAll.length != 0?
                        <div
                            className="cake-select-bar"
                            style={{
                                marginTop: resize>767? 10 : 50*3,
                            }}>
                            <SelectBar setSelectAllF={setSelectAll} getData={selectAll} />
                            <div
                                className="cake-bar-card-all-delete"
                                onClick={()=>{
                                    SelectCloseF();

                                    selectWindow[1][1] = "지역";
                                    selectWindow[2][1] = "맛";
                                    selectWindow[3][1] = "이벤트";
                                    selectWindow[4][1] = "가격대";
                                    
                                    for (var i=1; i<5; i++) {
                                        selectWindow[i][2] = 0;
                                    }
                
                                    setSelectAll([]);
                                }}
                            >초기화</div>
                        </div>
                    :null}
                </div>

                <div className="cake-store-contents cake-contents-flex">
                    <CakeStoreTitle detail={cakeDetail} setDetailF={setCakeDetail}/>
                    <div className="contents">
                        <CakeCard getData={data} cakeDetail={cakeDetail} />
                    </div>
                    <div className={"pagination cake-store-"+(cakeDetail? "dummy": "")}>
                        <Link to="/" className="arrow prev" href="#"> &lt;Prev</Link>
                        <Link to="/" href="#" className="pagi active">1</Link>
                        <Link to="/" href="#" className="pagi" >2</Link>
                        <Link to="/" href="#" className="pagi" >3</Link>
                        <Link to="/" className="arrow next" href="#">Next &gt;</Link>
                    </div>
                </div>
                <PickCard/>
            </div>
        </div>
        </>
    )
}



export default Cake;