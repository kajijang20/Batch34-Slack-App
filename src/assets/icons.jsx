import React from "react";
import SiteLogoImg from "./logo.png";
import HomeIconImg from "./home.svg";
import FriendIconImg from "./friends.svg";
import MessagesIconImg from "./messages.svg";
import UserIconImg from "./user.svg";
import LogoutIconImg from "./logout.svg";
import Star1IconImg from "./stars/star1.svg";
import Star2IconImg from "./stars/star2.svg";
import Star3IconImg from "./stars/star3.svg";
import Star4IconImg from "./stars/star4.svg";
import Star5IconImg from "./stars/star5.svg";

export const SiteLogo = ({ className }) => (
    <img className={className} src={SiteLogoImg} width="70" height="70"/>
);

export const SidebarLogo = ({ className }) => (
    <img className={className} src={SiteLogoImg} width="50" height="50"/>
);

export const HomeIcon = ({ className }) => (
    <img className={className} src={HomeIconImg} />
);

export const FriendsIcon = ({ className }) => (
    <img className={className} src={FriendIconImg} />
);

export const MessagesIcon = ({ className }) => (
    <img className={className} src={MessagesIconImg} />
);

export const UserIcon = ({ className }) => (
    <img className={className} src={UserIconImg} />
);

export const LogoutIcon = ({ className }) => (
    <img className={className} src={LogoutIconImg} />
);

export const StarIcon1 = ({ className }) => (
    <img className={className} src={Star1IconImg} />
);

export const StarIcon2 = ({ className }) => (
    <img className={className} src={Star2IconImg} />
);

export const StarIcon3 = ({ className }) => (
    <img className={className} src={Star3IconImg} />
);

export const StarIcon4 = ({ className }) => (
    <img className={className} src={Star4IconImg} />
);

export const StarIcon5 = ({ className }) => (
    <img className={className} src={Star5IconImg} />
);
