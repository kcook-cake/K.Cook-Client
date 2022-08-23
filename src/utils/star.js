import React, { useState, useEffect } from "react";
import axios from "axios";

import emptystar from 'src/assets/empty-star.svg';
import fillstar from 'src/assets/fill-star.svg';

const star = ( raiting, zzum ) => {
    let array = [];
    for (let i = 0; i < 5; i++)
        if (raiting >= i && raiting != 0)
            array.push(<img src={zzum+fillstar} alt="lating-star" />);
        else
            array.push(<img src={zzum+emptystar} alt="lating-star" />);
    return array;
}

export default star;