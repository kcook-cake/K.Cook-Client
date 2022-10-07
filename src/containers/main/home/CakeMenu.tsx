import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss';

import axios from 'axios';

import SectionTitle from 'src/components/main/common/SectionTitle';
import CakeCard from 'src/components/common/cake-store/CakeCard';
import Main_Cake_TestData from 'src/testdata/Main_Cake_TestData';

function CakeMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isComponentMounted = true;
    //get /api/main-cake?dataCount=4 -> table:cake-front 4개
    setData(Main_Cake_TestData());
    // let num = 4;
    // axios({
    //     url: '/app/products/representative-cake',
    //     method: 'GET',
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       if (isComponentMounted) {
    //         const data = res.data.result;

    //         let changeData = [];
    //         for (var i = 0; i < data.length; i++) {
    //             changeData[i] = res.data.result[i];
    //         }
    //         for (var i:number = data.length; i < num; i++) {
    //             changeData[i] = {
    //                 image: null,
    //                 name: "~준비중 입니다~",
    //                 price: 0,
    //                 storeName: "~준비중 입니다~",
    //             };
    //         }
    //         setData(changeData);
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     let changeData = [];
    //     for (var i = 0; i < num; i++) {
    //       changeData[i] = {
    //         image: null,
    //         name: "~준비중 입니다~",
    //         price: 0,
    //         storeName: "~준비중 입니다~",
    //       };
    //     }
    //     setData(changeData);
    //     console.log(err);
    //   });
    return () => {
      isComponentMounted = false;
    }
  }, []);

  return (
    <div className="home-flex">
      <div className="cake-store-menu home">
        <div className="title">
          <SectionTitle title="케이크" link="Cake" />
        </div>
        <div className="contents">
          <CakeCard getData={data} cakeDetail={false} />
        </div>
      </div>
    </div>
  );
}

export default CakeMenu;
