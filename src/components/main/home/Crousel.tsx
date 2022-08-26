import React, { useState, useEffect } from 'react';
import '../../../styles/main/home/MainCrousel.scss';

import getAxios from 'src/utils/getAxios';
import axios from 'axios';

import BannerSlider from '../card/BannerSlide';
import isSession from 'src/utils/isSession';

function Crousel() {
  const [data, setData] = useState([]);
  //0페이지부터 시작한다
  const [pageTodays, setPageTodays] = useState(0);
  const [lengthTodays, setLengthTodays] = useState(0);
  useEffect(() => {
    getAxios(setData, setLengthTodays, 'cakes', [], 4, pageTodays, 0);
    // axios
    // .get(`https://prod.kcook-cake.com/app/cakes`)
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  // 배너 모달창 용도
  // 로그인 여부
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({});
  const [isManager, setManager] = useState(false);

  useEffect(() => {
    var jwToken = undefined;
    if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
    else jwToken = sessionStorage.jwToken;
    isSession(
      jwToken,
      (s: any) => {
        if (s) setSession(s);
      },
      (a: any) => {
        setAuth(a);
      }
    );
  }, []);
  console.log(auth);
  //console.log(auth.accountId);

  type Employee = {
    accountId?: number;
    [key: string]: any;
  };

  const obj: Employee = {
    auth,
  };

  // 관리자라면 isManager = true
  useEffect(() => {
    if (Number(obj.auth.accountId) === 31) {
      setManager(true);
    } else {
      setManager(false);
    }
  }, [obj.auth.accountId]);
  console.log('obj.auth.accountId', obj.auth.accountId);
  console.log('isManager', isManager);

  // accountId가 true면 모달창 생성 <<
  return (
    <div className="crousel">
      <BannerSlider getData={data} isManager={isManager} />
    </div>
  );
}

export default Crousel;
