import React from 'react';
import '../../../styles/card/SSOMCard.scss';


interface MPRMCardProps {
    getData: any
}

function SSOMCard({getData}: MPRMCardProps) {
    return (
        <>
            <div className="ssomcard-date">어제</div>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="ssomcard"  key={data.productId}>
                        <div className="ssomcard-box">

                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default SSOMCard;