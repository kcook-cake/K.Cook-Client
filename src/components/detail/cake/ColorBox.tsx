import React from 'react';
import 'src/styles/detail/CakeDetail.scss';

function ColorBox() {
    return (
        <>
        <div className='cake-detail-colorbox-flex'>
            <div style={{ display: "flex"}}>
                <div className='cake-detail-colorbox' style={{ marginRight: "15px", }}>
                    <div className='cake-detail-colorbox-inner'></div>
                    선택
                </div>
                <div className='cake-detail-colorbox'>
                    <div className='cake-detail-colorbox-inner' style={{ background: "#e0e0e0"}}></div>
                    마감
                </div>
            </div>
        </div>
        <div style={{ marginBottom: "53px", }}></div>
        </>
    );
}

export default ColorBox;