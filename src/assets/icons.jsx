import React from "react";
import SiteLogoImg from "./logo.png";
import HomeIconImg from "./home.svg";
import FriendIconImg from "./friends.svg";
import MessagesIconImg from "./messages.svg";
import UserIconImg from "./user.svg";
import LogoutIconImg from "./logout.svg";

export const SiteLogo = ({ className }) => (
    <img className={className} src={SiteLogoImg} width="100" height="100"/>
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
