import React, { useEffect, useState } from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss';

import axios from 'axios';

import SectionTitle from '../../../components/main/card/SectionTitle';
import getAxios from 'src/utils/getAxios';
import CakeCard from 'src/components/main/card/CakeCard';

import isSession from 'src/utils/isSession';
import CakeMenuModal from './cakeMenuModal';

function CakeMenu() {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    getAxios(setData, setDataLength, 'representative-cake', [], 4, 0, 0);
  }, []);

  // 로그인확인 & 관리자 확인
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({
    accountId: 0,
    address: '',
    dateOfBirth: '',
    email: '',
    nickname: '',
    phoneNumber: '',
  });
  var jwToken: any = undefined;
  if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
  else jwToken = sessionStorage.jwToken;
  useEffect(() => {
    isSession(
      jwToken,
      (s: any) => {
        if (s) setSession(s);
      },
      (a: any) => {
        setAuth(a);
      }
    );
  }, [jwToken]);

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
