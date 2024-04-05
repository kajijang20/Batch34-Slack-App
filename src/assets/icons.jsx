import React from "react";
import SiteLogoImg from "./logo.png";
//import HamIconImg from "./hamburger.svg";

export const SiteLogo = ({ className }) => (
    <img className={className} src={SiteLogoImg} width="100" height="100"/>
);

/*
export const HamIcon = ({ className }) => (
    <img className={className} src={HamIconImg} />
);
*/
