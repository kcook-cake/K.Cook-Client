import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss';

import axios from 'axios';

import SectionTitle from 'src/components/main/common/SectionTitle';
import StoreCard from 'src/components/common/cake-store/StoreCard';
import Stores_Limit_TestData from 'src/testdata/main/Stores_Limit_TestData';

function StoreMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isComponentMounted = true;
    //get /api/main-store?dataCount=3 -> table:store-front 3개
    setData(Stores_Limit_TestData());
    // let num = 3;
    // axios({
    //     url: '/app/stores/representative',
    //     method: 'GET',
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       if (isComponentMounted) {
    //         const data = res.data.result;

    //         let changeData = [];
    //         for (let i = 0; i < data.length; i++) {
    //             changeData[i] = res.data.result[i];
    //         }
    //         for (let i:number = data.length; i < num; i++) {
    //             changeData[i] = {
    //               image: null,
    //               accountName: "~준비중 입니다~",
    //               address: "~준비중 입니다~",
    //               area: "~준비중 입니다~",
    //               contact: "~준비중 입니다~",
    //               name: "~준비중 입니다~",
    //               status: "BLACKLIST",
    //               storeId: 0
    //             };
    //         }
    //         setData(changeData);
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     let changeData = [];
    //     for (let i = 0; i < num; i++) {
    //       changeData[i] = {
    //         image: null,
    //         accountName: "~준비중 입니다~",
    //         address: "~준비중 입니다~",
    //         area: "~준비중 입니다~",
    //         contact: "~준비중 입니다~",
    //         name: "~준비중 입니다~",
    //         status: "BLACKLIST",
    //         storeId: 0
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
    <div className="">
      <div className="cake-store-menu storemenu home">
        <div className="title">
          <SectionTitle title="스토어" link="Store" />
        </div>
        <div className="contents store-contents">
          <StoreCard getData={data} />
        </div>
      </div>
    </div>
  );
}

export default StoreMenu;
