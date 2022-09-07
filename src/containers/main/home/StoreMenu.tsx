import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss';

import axios from 'axios';

import getAxios from 'src/utils/getAxios';
import SectionTitle from 'src/components/main/common/SectionTitle';
import StoreCard from 'src/components/common/cake-store/StoreCard';
import storeGetAxios from 'src/utils/storeGetAxios';
import MenuModal from 'src/components/main/home/image-modal/CakeStoreModal';

interface Props {
  session: any;
  auth: any;
}

function StoreMenu({ session, auth }: Props) {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    storeGetAxios(setData, 'stores/arepresentative', 0, 3);
  }, []);

  // 모달창 생성용 값
  const [modalShow, setModalShow] = useState(false);
  const [cakeTF, setCakeTF] = useState<number>(4);

  return (
    <div className="">
      <div className="cake-store-menu storemenu home">
        <div className="title">
          {auth.accountId == 31 ? (
            <>
              <button
                onClick={
                  auth.accountId === 31
                    ? () => {
                        return setModalShow((prev) => !prev), setCakeTF(4);
                      }
                    : () => {}
                }
              >
                상품 변경
              </button>
              <SectionTitle title="스토어" link="Store" />
            </>
          ) : (
            <SectionTitle title="스토어" link="Store" />
          )}
        </div>
        {/* <StoreMenuModal
          //  resize={resize}
          imageModalShow={modalShow}
          setImageModalShowF={setModalShow}
        /> */}
        <MenuModal
          //  resize={resize}
          imageModalShow={modalShow}
          setImageModalShowF={setModalShow}
          cakeTF={cakeTF}
        />
        <div className="contents">
          <StoreCard getData={data} cakeDetail={false} />
        </div>
      </div>
    </div>
  );
}

export default StoreMenu;
