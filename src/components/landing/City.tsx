import { fn } from 'jquery';
import React from 'react';
import { Link } from "react-router-dom";

import $ from 'jquery';

interface CityProps {
    getData: any,
    LocationAxiosF: any,
}

function City({ getData, LocationAxiosF }: CityProps) { 
    return (
        <select
            id="lp-select-city"
            className="dropdown-bar-do"
            onClick={()=>{
                LocationAxiosF($("#lp-select-city option:selected").val());
            }}
        >
            <option disabled selected>
                지역 선택
            </option>
            {getData.map((data: { cityId: any, cityName: any })=>{
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