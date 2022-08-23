import React, { useState, useEffect} from "react";
import "../../../styles/main/home/MainCrousel.scss";

import getAxios from "src/utils/getAxios";

import BannerSlider from "../card/BannerSlide";

function Crousel() {
  const [data, setData] = useState([]);
  //0페이지부터 시작한다
  const [pageTodays, setPageTodays] = useState(0);
  const [lengthTodays, setLengthTodays] = useState(0);
  useEffect(()=>{
      getAxios(setData, setLengthTodays, "cakes", [], 4, pageTodays, 0);
  },[]);

  return (
    <div className="crousel">
      <BannerSlider getData={data}/>
    </div>
  );
}

export default Crousel;