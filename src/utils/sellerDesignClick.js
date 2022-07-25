import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const sellerDesignClick = (i) => {
    $(".seller-menu-link").css("color", "#999999");
        $(".seller-menu-link").css("background", "#fff");
        $(".seller-menu-link").css("stroke", "#fff");
        $(".seller-menu-link text").css("stroke", "#999999"); $(".seller-menu-link circle").css("stroke", "#999999"); $(".seller-menu-link path").css("stroke", "#999999"); $(".seller-menu-link tspan").css("stroke", "#999999"); $(".seller-menu-link ellipse").css("stroke", "#999999"); $(".seller-menu-link line").css("stroke", "#999999");

        $(".seller-menu-link."+i).css("color", "#fff");
        $(".seller-menu-link."+i).css("background", "#ea5450");
        $(".seller-menu-link."+i).css("stroke", "#ea5450");
        $(".seller-menu-link."+i+" text").css("stroke", "#fff"); $("."+i+" circle").css("stroke", "#fff"); $("."+i+" path").css("stroke", "#fff"); $("."+i+" tspan").css("stroke", "#fff"); $("."+i+" ellipse").css("stroke", "#fff"); $("."+i+" line").css("stroke", "#fff");
}

export default sellerDesignClick;