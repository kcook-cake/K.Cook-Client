import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss';

import axios from 'axios';

import SectionTitle from 'src/components/main/card/SectionTitle';
import getAxios from 'src/utils/getAxios';
import CakeCard from 'src/components/main/card/CakeCard';

import cakeGetAxios from 'src/utils/cakeGetAxios';
import MenuModal from 'src/components/main/home/image-modal/Modals';

interface Props {
  session: any;
  auth: any;
}

function CakeMenu({ session, auth }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    cakeGetAxios(setData, 'products/representative-cake', 0, 4);
  }, []);

  // 모달창 생성용 값
  const [modalShow, setModalShow] = useState(false);
  const [cakeTF, setCakeTF] = useState<number>();

  return (
    <div className="home-flex">
      <div className="cake-store-menu cakemenu home">
        <div className="title">
          {auth.accountId == 31 ? (
            <>
              <button
                onClick={
                  auth.accountId === 31
                    ? () => {
                        return setModalShow((prev) => !prev), setCakeTF(3);
                      }
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
        <MenuModal
          //  resize={resize}
          imageModalShow={modalShow}
          setImageModalShowF={setModalShow}
          cakeTF={cakeTF}
        />
        <div className="contents">
          <CakeCard getData={data} cakeDetail={false} />
        </div>
      </div>
    </div>
  );
}

export default CakeMenu;
