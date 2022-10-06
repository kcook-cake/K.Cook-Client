import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/PickUp.scss';

interface Props {
    getData: any,
}

function PickUp({getData}: Props) {
    useEffect(()=>{
    },[]);

    return (
        <>
            {getData.map((data: string, idx: number )=>{
                return (
                    <div
                        key={idx}
                        className={classNames('cake-detail-pickup',
                        )}>
                        {data}
                    </div>
                )
                })
            }
        </>
    );
}

export default PickUp;