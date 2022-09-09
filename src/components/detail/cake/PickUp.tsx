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
            {getData.map((data: any, )=>{
                return (
                    <div className={classNames(
                        'cake-detail-pickup',
                        // {
                        //     'cake-detail-none-active': time.split(":")[0] > data.split(":")[0],
                        // }
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