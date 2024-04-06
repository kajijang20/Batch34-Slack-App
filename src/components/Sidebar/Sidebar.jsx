import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import { SidebarLogo, HomeIcon, FriendsIcon, MessagesIcon, LogoutIcon } from "../../assets/icons";
import HandleLogout from "../HandleLogout/HandleLogout";

const NavItems = [
    {
        url: "/homepage",
        name: "Homepage",
        logo: <HomeIcon />,
    },
    {
        url: "/channels",
        name: "Channels",
        logo: <FriendsIcon />,
    },
    {
        url: "/messages",
        name: "Messages",
        logo: <MessagesIcon />, 
    },
    {
        url: "/login", 
        name: "Logout",
        logo: <LogoutIcon />,
    },
];


const Sidebar = () => {
    const [currentPage, setCurrentPage] = useState(null);

    const handleItemClick = (item) => {
        setCurrentPage(item.name);
        if (item.name === "Logout") {
          HandleLogout();
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar-overlay">
            <div className="sidebar-title">
                <p className="sidebar-title-logo"> <SidebarLogo /> </p>
                <p className="sidebar-title-txt"> Star Stream </p>
            </div>
            <div className="sidebar-content">
                {NavItems.map((item, index) => (
                    <Link className="item-link"
                        key={item.name + index}
                        to={item.url}
                        onClick={() => handleItemClick(item)}
                    >
                    <p className={currentPage === item.name ? 'selected' : ''}>
                        {item.logo}
                    </p>
                </Link>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;