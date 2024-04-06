import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListChannels.scss";

import FindChannels from "../FindChannels/FindChannels";

const ListChannels = () => {
    const [channels, setChannels] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const channelData = await FindChannels();
            setChannels(channelData);
            //console.log("all channel users: ", channelData);
        }
        fetchData();
    }, []);

    const handleItemClick = (item) => {
        setCurrentPage(item.name);
    }

    return(
        <div className="channels">
            <div className="channels-main">
                <h3> Channels </h3>
                <div className={`channels-content ${channels.length > 5 ? 'scrollable' : ''}`}>
                    {channels.map((item) => (
                        <Link className="item-link"
                            key={item.id}
                            to={"/channels/" + item.name}
                            onClick={() => handleItemClick(item)}
                        >
                        <p className={currentPage === item.name ? 'selected' : ''}>
                            {item.icon} {item.name}
                        </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListChannels;
