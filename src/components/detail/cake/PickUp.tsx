import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'src/styles/detail/cake/PickUp.scss';

interface Props {
    getData: any,
    groupTimeId: (number | string)[],
    setGroupTimeIdF: Function,
}

function PickUp({ getData, groupTimeId, setGroupTimeIdF, }: Props) {
    const [timeId, setTimeId] = useState(-1);
    useEffect(()=>{
    },[]);

    return (
        <div className='cake-detail-pickup-flex'>
            {getData.map((data: { groupId: number, groupTF: boolean, time: string, }, idx: number )=>{
                return (
                    <div 
                        key={idx}
                        className={classNames('cake-detail-pickup', {
                            'cake-detail-pickup-none': data.groupTF,
                            'cake-detail-pickup-focus': groupTimeId[1] === data.time && groupTimeId[0] === data.groupId,
                        })}
                        onClick={()=> {
                            setTimeId(idx);
                            setGroupTimeIdF([data.groupId, data.time]);
                        }}>
                        {data.time}
                    </div>
                )
                })
            }
        </div>
    );
}

export default PickUp;