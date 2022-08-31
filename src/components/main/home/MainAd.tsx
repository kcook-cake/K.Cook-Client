import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/main/home/MainAd.scss';

import adimg from '../../../assets/main-ad.png';

function MainAd (){
    const [image, setImage] = useState("");
    useEffect(()=>{
        axios
            .get(`https://prod.kcook-cake.com/app/banner/static`)
            .then((res)=>{
                setImage(res.data.result.webImageUrl);
                // for (var i=0; i<4; i++) 
                //     image[i] = res.data.result[i].webImageUrl;
                // setBannerImage(image);
            })
    },[]);
    
    return(
        <div className="main-ad-flex">
            <div className="main-ad">
                <img src={image} />
                {/* <img className="main-ad-img" src={image} alt="advertise image"/> */}
            </div>
        </div>
    )
}


export default MainAd;