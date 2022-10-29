import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../../styles/main/home/Home.scss';

import MainCrousel from '../../../components/main/home/Carousel';
import NewMenu from './NewMenu';
import MainAd from '../../../components/main/home/MainAd';
import CakeMenu from './CakeMenu';
import StoreMenu from './StoreMenu';
import LinkClick from 'src/utils/LinkClick';
import PopularMenu from './PopularMenu';

interface Props {
  session: boolean,
  auth: {
      accountId: number,
      address: string,
      dateOfBirth: string,
      email: string,
      nickname: string,
      phoneNumber: string,
  }
}

function Home({session, auth}: Props) {
  useEffect(() => {
    LinkClick('Home');
  }, []);
  return (
    <>
      <MainCrousel session={session} auth={auth} />
      <PopularMenu session={session} auth={auth} />
      <NewMenu />
      <MainAd />
      <CakeMenu />
      <StoreMenu />
    </>
  );
}

export default Home;
