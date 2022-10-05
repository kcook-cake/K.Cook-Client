import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss';

import axios from 'axios';

import SectionTitle from 'src/components/main/common/SectionTitle';
import StoreCard from 'src/components/common/cake-store/StoreCard';

function StoreMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isComponentMounted = true;
    let num = 3;
    axios({
        url: '/app/stores/representative',
        method: 'GET',
      })
      .then((res) => {
        if (res.data) {
          if (isComponentMounted) {
            const data = res.data.result;

            let changeData = [];
            for (var i = 0; i < data.length; i++) {
                changeData[i] = res.data.result[i];
            }
            for (var i:number = data.length; i < num; i++) {
                changeData[i] = {
                  image: null,
                  accountName: "~준비중 입니다~",
                  address: "~준비중 입니다~",
                  area: "~준비중 입니다~",
                  contact: "~준비중 입니다~",
                  name: "~준비중 입니다~",
                  status: "BLACKLIST",
                  storeId: 0
                };
            }
            setData(changeData);
          }
        }
      })
      .catch((err) => {
        let changeData = [];
        for (var i = 0; i < num; i++) {
          changeData[i] = {
            image: null,
            accountName: "~준비중 입니다~",
            address: "~준비중 입니다~",
            area: "~준비중 입니다~",
            contact: "~준비중 입니다~",
            name: "~준비중 입니다~",
            status: "BLACKLIST",
            storeId: 0
          };
        }
        setData(changeData);
        console.log(err);
      });
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
          <StoreCard getData={data} cakeDetail={false} />
        </div>
      </div>
    </div>
  );
}

export default StoreMenu;
