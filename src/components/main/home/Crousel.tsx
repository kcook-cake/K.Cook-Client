import React from 'react';
import '../../../styles/main/home/MainCrousel.scss'

import Crousel1 from '../../../assets/crousel1.jpg';

function Crousel (){
    return(
        <div className="crousel">
            <img src={Crousel1}/>
        </div>
    )
}


export default Crousel;