import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const designClick = (i) => {
    console.log("a");
    $(".header").css("color", "black");
    $(".header").css("padding-bottom", "0px");
    $(".header").css("border-bottom", "0px solid #ea5450");

    $(".header."+i).css("color", "#ea5450");
    $(".header."+i).css("padding-bottom", "3px");
    $(".header."+i).css("border-bottom", "3px solid #ea5450");
}

export default designClick;