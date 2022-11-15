import { fn } from 'jquery';
import React from 'react';
import { Link } from "react-router-dom";

import $ from 'jquery';

interface CityProps {
    getData: {
        cityId: number,
        cityName: string,
    }[],
    LocationAxiosF: Function,
}

function City({ getData, LocationAxiosF }: CityProps) { 
    return (
        <select
            id="lp-select-city"
            className="dropdown-bar-do"
            onChange={(e)=>{LocationAxiosF(e.target.value)}}
        >
            <option disabled>
                지역 선택
            </option>
            {getData.map((data: { cityId: number, cityName: string })=>{
                return (
                    <option
                        value={data.cityId}
                        className="lp-option-city"
                    >{data.cityName}</option>
                )
                })
            }
        </select>
    );
}


export default City;