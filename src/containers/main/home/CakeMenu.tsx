import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss';

import axios from 'axios';

import SectionTitle from 'src/components/main/card/SectionTitle';
import getAxios from 'src/utils/getAxios';
import CakeCard from 'src/components/main/card/CakeCard';

import isSession from 'src/utils/isSession';
import CakeMenuModal from 'src/components/main/home/image-modal/CakeMenuModal';
import cakeGetAxios from 'src/utils/cakeGetAxios';

interface Props {
  session: any,
  auth: any,
}

function CakeMenu({session, auth}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    cakeGetAxios(setData, 'products/representative-cake', 0, 4);
  }, []);

  // 모달창 생성용 값
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="home-flex">
      <div className="cake-store-menu cakemenu home">
        <div className="title">
          {auth.accountId == 31 ? (
            <>
              <button
                onClick={
                  auth.accountId === 31
                    ? () => setModalShow((prev) => !prev)
                    : () => {}
                }
              >
                상품 변경
              </button>
              <SectionTitle title="케이크" link="Cake" />
            </>
          ) : (
            <SectionTitle title="케이크" link="Cake" />
          )}
        </div>
        <CakeMenuModal
          //  resize={resize}
          imageModalShow={modalShow}
          setImageModalShowF={setModalShow}
        />
        <div className="contents">
          <CakeCard getData={data} cakeDetail={false} />
        </div>
      </div>
    </div>
  );
}

export default CakeMenu;
