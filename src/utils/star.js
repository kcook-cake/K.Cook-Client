import React, { useState, useEffect } from "react";
import axios from "axios";

import emptystar from '../assets/empty-star.svg';
import fillstar from '../assets/fill-star.svg';

const star = ( raiting, ) => {
    let array = [];
    for (let i = 0; i < 5; i++)
        if (raiting >= i && raiting != 0)
            array.push(<img src={fillstar} alt="lating-star" />);
        else
            array.push(<img src={emptystar} alt="lating-star" />);
    return array;
}

export default star;