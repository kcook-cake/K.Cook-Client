import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const mypageLinkClick = (i) => {
    $(".ms-link").css("color", "#fff");
    $(".ms-link").css("background", "none");
    $(".ms-link").css("font-weight", "normal");
    $(".ms-link text").css("stroke", "#fff"); $(".ms-link circle").css("stroke", "#fff"); $(".ms-link path").css("stroke", "#fff"); $(".ms-link tspan").css("stroke", "#fff"); $(".ms-link ellipse").css("stroke", "#fff"); $(".ms-link line").css("stroke", "#fff");

    $(".ms-link."+i).css("color", "#ea5450");
    $(".ms-link."+i).css("background", "#fff");
    $(".ms-link."+i).css("font-weight", "bold");
    $(".ms-link."+i+" text").css("stroke", "#ea5450"); $(".ms-link."+i+" circle").css("stroke", "#ea5450"); $(".ms-link."+i+" path").css("stroke", "#ea5450"); $(".ms-link."+i+" tspan").css("stroke", "#ea5450"); $(".ms-link."+i+" ellipse").css("stroke", "#ea5450"); $(".ms-link."+i+" line").css("stroke", "#ea5450");
}

export default mypageLinkClick;