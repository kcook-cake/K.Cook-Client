import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const LinkClick = (i) => {
    $(".header-link").css("color", "black");
    $(".header-link").css("padding-bottom", "0px");
    $(".header-link").css("border-bottom", "0px solid #ea5450");

    $(".header-link."+i).css("color", "#ea5450");
    $(".header-link."+i).css("padding-bottom", "3px");
    $(".header-link."+i).css("border-bottom", "3px solid #ea5450");
}

export default LinkClick;