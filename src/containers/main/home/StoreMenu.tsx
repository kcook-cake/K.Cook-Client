import React,  { useEffect, useState }from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss'

import axios from 'axios';

import getAxios from 'src/utils/getAxios';
import SectionTitle from 'src/components/main/card/SectionTitle';
import StoreCard from 'src/components/main/card/StoreCard';
import storeGetAxios from 'src/utils/storeGetAxios';
import StoreMenuModal from 'src/components/main/home/image-modal/StoreMenuModal';
import isSession from 'src/utils/isSession';

interface Props {
    session: any,
    auth: any,
}

function StoreMenu ({session, auth}: Props){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        storeGetAxios(setData, 'stores/arepresentative', 0, 3);
    },[]);

    // 모달창 생성용 값
    const [modalShow, setModalShow] = useState(false);

    return(
        <div className="">
            <div className="cake-store-menu storemenu home">
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
                    <SectionTitle title="스토어" link="Store"/>
                    </>
                ) : (
                    <SectionTitle title="스토어" link="Store"/>
                )}
                </div>
                <StoreMenuModal
                //  resize={resize}
                imageModalShow={modalShow}
                setImageModalShowF={setModalShow}
                />
                <div className="contents">
                    <StoreCard getData={data} cakeDetail={false}/>
                </div>
            </div>
        </div>
    )
}


export default StoreMenu;