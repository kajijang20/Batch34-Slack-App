import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DisplayChannelsList.scss";

import FindChannels from "../FindChannels/FindChannels";

const DisplayChannelsList = () => {
    const [channels, setChannels] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const channelData = await FindChannels();
            setChannels(channelData);
        }
        fetchData();
    }, []);

    const handleItemClick = (item) => {
        setCurrentPage(item.name);
    }

    return(
        <div className="channels">
            <div className="channels-main">
                <div className="channels-header">
                    <h3> Channels </h3>
                    <button className="channels-btn"> + </button>
                </div>
                <div className={`channels-content ${channels.length > 5 ? 'scrollable' : ''}`}>
                    {channels.map((item) => (
                        <Link className="item-link"
                            key={item.data.id}
                            to={item.link}
                            onClick={() => handleItemClick(item)}
                        >
                        <p className={currentPage === item.name ? 'selected' : ''}>
                            {item.icon} {item.data.name}
                        </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DisplayChannelsList;
