import { useState, useEffect } from "react";
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import "src/styles/common/kcook-select/SelectWindow.scss";

import X from "src/assets/x.svg";

interface Props {
  cakestoreTF: boolean,
  NumF: Function,

  selectAll: String[],
  selectWindow: any[][],

  selectData: any[][],

  setSelectMobileTF: Function,
  SelectCloseF: Function,

  searchChangeF: Function,
}

export default function SelectWindow({ 
        cakestoreTF, NumF,
        selectAll, selectWindow,
        selectData,
        setSelectMobileTF, SelectCloseF, 
        searchChangeF,
    }: Props) {

    const [citySubway, setCitySubway] = useState("");

    //선택지창
    const SelectF = (n: number, str: string, length: number) => {
        selectAll[selectAll.length] = str;
        // if (SelectBarF(str)) {
        //     if (!cakestoreTF && (n===3 || n===5)) selectAll[selectAll.length] = citySubway+" "+str;
        //     else selectAll[selectAll.length] = str;
        //     // if (cakestoreTF) selectAll[selectAll.length] = str;
        //     // else if (n===3 || n===5) selectAll[selectAll.length] = citySubway+" "+str;
        // }
        selectWindow[n-1] = [false, str, 14*length];
        searchChangeF(selectAll);
        NumF();
    };

    //선택지바
    const SelectBarF = (str: string) => {
        for (var i = 0; i < selectAll.length; i++) {
        if (selectAll[i] === str) return false;
        }
        return true;
    };

    const LocationF = (i: any, ) => {
        axios
            .get(`/app/locations/`+i)
            .then(res =>{
                selectData[1] = res.data.result;
                NumF();
            });
    };
    const SubwayF = (str: any, ) => {
        if (str === "인천1호선") str = "인천선";
            
        if (str === "수인선") {
            selectData[3] = ["달월", "월곶", "소래포구", "인천논현", "호구포", "남동인더스파크", "원인재", "연수", "송도", "신포", "인하대", "숭의(인하대병원)"];
        } else if (str === "경의중앙선") {
            selectData[3] = ["청량리", "회기", "지평", "임진강"];
        } else if (str === "자기부상") {
            selectData[3] = ["장기주차장", "합동청사", "파라다이스시티", "워터파크", "용유", ];
        } else {
            //466d5944556364703834526c75516a
            axios
                .get(`http://openapi.seoul.go.kr:8088/466d5944556364703834526c75516a/json/SearchSTNBySubwayLineInfo/1/99/ / /`+str)
                .then(res =>{
                    for (var i=0; i<res.data.SearchSTNBySubwayLineInfo.row.length; i++)
                        selectData[3][i] = res.data.SearchSTNBySubwayLineInfo.row[i].STATION_NM;
                });
        }
        NumF();
    };

    return (
        <>
        <div className="cake-select-mobile-flex">
            <div className="mobile cake-select-mobile-top">
                <div style={{ marginLeft: "30px", }}></div>
                <div>상세검색</div>
                <div
                    onClick={()=>{setSelectMobileTF(false)}}>
                    <img src={X} />
                </div>
            </div>

            <div className="mobile cake-select-mobile">
                지역
                <div
                    className="cake-select-mobile-button"
                    onClick={()=>{
                        SelectCloseF();
                        if (selectWindow[1][0]) selectWindow[1][0] = false;
                        else selectWindow[1][0] = true;
                        NumF();
                    }}>
                    선택하기
                </div>
            </div>
            {selectWindow[1][0]?
            <div
                className="cake-select-absolute"
                style={{ marginLeft: (-85+selectWindow[1][2]), }}> {/* -90에서 시작 */}
                <div className="cake-select-top"></div>
                <div 
                    className="cake-select-ul"
                    style={{ height: selectData[0].length>5? 52.2*5 : (52.2)*selectData[0].length, }}> 
                    <ul>
                        {selectData[0].map((data: { cityId: any, cityName: any, }, idx: any, )=>{
                            return (
                                <li
                                    key={idx}
                                    className="cake-select-li"
                                    onClick={()=>{
                                        SelectF(2, data.cityName, data.cityName.length);
                                        if(!cakestoreTF) {
                                            setCitySubway(data.cityName);
                                            selectWindow[2] = [false, "시/군", 8];
                                            LocationF(data.cityId);
                                        };
                                    }}>
                                    {data.cityName}
                                </li>
                            )
                            })
                        }
                    </ul>
                </div>
            </div>
            : null}


            <div className="mobile cake-select-mobile">
                {cakestoreTF? "맛" : "시/군"}
                <div
                    className="cake-select-mobile-button"
                    onClick={()=>{
                    SelectCloseF();
                        if (selectWindow[2][0]) selectWindow[2][0] = false;
                        else selectWindow[2][0] = true;
                    }}>
                    선택하기
                </div>
            </div>
            {selectWindow[2][0]?
            <div
                className="cake-select-absolute"
                style={{ marginLeft: ((-40)+selectWindow[1][2]+selectWindow[2][2]), }}>
                {!cakestoreTF && selectData[1].length === 1?
                    null:
                    <>
                        <div className="cake-select-top"></div>
                        <div 
                            className="cake-select-ul"                    
                            style={{ height: selectData[1].length>5? 52.2*5 : (52.2)*selectData[1].length, }}>
                            <ul>
                                {cakestoreTF?
                                    <>
                                        {selectData[1].map((data: any, idx: any, )=>{
                                            return (
                                                <li
                                                    key={idx}
                                                    className="cake-select-li"
                                                    onClick={()=>{SelectF(3, data, data.length);}}>
                                                    {data}
                                                </li>
                                            )
                                            })
                                        }
                                    </>:
                                    <>
                                        {selectData[1].map((data: { locationId: any, locationName: any, }, idx: any, )=>{
                                            return (
                                                <li
                                                    key={idx}
                                                    className="cake-select-li"
                                                    onClick={()=>{SelectF(3, data.locationName, data.locationName.length); }}>
                                                    {data.locationName}
                                                </li>
                                            )
                                            })
                                        }
                                    </>
                                }
                            </ul>
                        </div>
                    </>
                }
            </div>: null}


            {cakestoreTF?
            <div className="mobile cake-select-mobile">
                {cakestoreTF? "이벤트" : "지하철노선"}
                <div
                    className="cake-select-mobile-button"
                    onClick={()=>{
                        SelectCloseF();
                        if (selectWindow[3][0]) selectWindow[3][0] = false;
                        else selectWindow[3][0] = true;
                        NumF();
                    }}>
                    선택하기
                </div>
            </div>
            :null}
            {selectWindow[3][0]?
            <div 
                className="cake-select-absolute"
                style={{ marginLeft: (-10)+(cakestoreTF?10:-35)+selectWindow[1][2]+(cakestoreTF?selectWindow[2][2]:0)+selectWindow[3][2] }}>
                <div className="cake-select-top"></div>
                <div
                    className="cake-select-ul"
                    style={{ height: selectData[2].length>5? 52.2*5 : (52.2)*selectData[2].length, }}>
                    <ul>
                        {selectData[2].map((data: any, idx: any, )=>{
                            return (
                                <li
                                    key={idx}
                                    className="cake-select-li"
                                    onClick={()=>{
                                        SelectF(4, data, data.length-data.split("/").length+1);
                                        if(!cakestoreTF) {
                                            setCitySubway(data);
                                            selectWindow[4] = [false, "지하철역", 8];
                                            SubwayF(data, );
                                        };
                                    }}>
                                    {data}
                                </li>
                            )
                            })
                        }
                    </ul>
                </div>
            </div>
            :null}

            
            {cakestoreTF?
            <div className="mobile cake-select-mobile">
                {cakestoreTF? "가격대" : "지하철역"}
                <div
                    className="cake-select-mobile-button"
                    onClick={()=>{
                    SelectCloseF();
                    if (selectWindow[4][0]) selectWindow[4][0] = false;
                    else selectWindow[4][0] = true;
                    }}>
                    선택하기
                </div>
            </div>
            :null}
            {selectWindow[4][0]?
            <div
                className="cake-select-absolute"
                style={{ marginLeft: (-10)+(cakestoreTF?50:5)+selectWindow[1][2]+(cakestoreTF?selectWindow[2][2]:0)+selectWindow[3][2]+selectWindow[4][2], }}>
                {!cakestoreTF && selectData[3].length === 1?
                    null:
                    <>
                        <div className="cake-select-top"></div>
                        <div 
                            className="cake-select-ul"
                            style={{ height: selectData[3].length>5? 52.2*5 : (52.2)*selectData[3].length, }}>
                            <ul>
                                {selectData[3].map((data: any, idx: any, )=>{
                                    return (
                                        <li
                                            key={idx}
                                            className="cake-select-li"
                                            onClick={()=>{SelectF(5, data, cakestoreTF? data.length-2: data.length);}}>
                                            {data}
                                        </li>
                                    )
                                    })
                                }
                            </ul>
                        </div>
                    </>
                }
            </div>: null}
            

        </div>
        </>
    );
}
