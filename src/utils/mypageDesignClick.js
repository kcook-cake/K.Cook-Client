import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const mypageDesignClick = (i) => {
    $(".mypage-menu-link").css("color", "#fff");
    $(".mypage-menu-link").css("background", "none");
    $(".mypage-menu-link").css("font-weight", "normal");
    $(".mypage-menu-link text").css("stroke", "#fff"); $(".mypage-menu-link circle").css("stroke", "#fff"); $(".mypage-menu-link path").css("stroke", "#fff"); $(".mypage-menu-link tspan").css("stroke", "#fff"); $(".mypage-menu-link ellipse").css("stroke", "#fff"); $(".mypage-menu-link line").css("stroke", "#fff");

    $(".mypage-menu-link."+i).css("color", "#ea5450");
    $(".mypage-menu-link."+i).css("background", "#fff");
    $(".mypage-menu-link."+i).css("font-weight", "bold");
    $(".mypage-menu-link."+i+" text").css("stroke", "#ea5450"); $(".mypage-menu-link."+i+" circle").css("stroke", "#ea5450"); $(".mypage-menu-link."+i+" path").css("stroke", "#ea5450"); $(".mypage-menu-link."+i+" tspan").css("stroke", "#ea5450"); $(".mypage-menu-link."+i+" ellipse").css("stroke", "#ea5450"); $(".mypage-menu-link."+i+" line").css("stroke", "#ea5450");
}

export default mypageDesignClick;