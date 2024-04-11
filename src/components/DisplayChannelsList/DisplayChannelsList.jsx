import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DisplayChannelsList.scss";

import getChannels from "../../utils/helper/getChannels";

const DisplayChannelsList = ({ setRecipientId, setChatName }) => {
    const [channels, setChannels] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const channelData = await getChannels();
            setChannels(channelData);
        }
        fetchData();
    }, []);

    const handleItemClick = (item) => {
        setCurrentPage(item.data.name);
        setChatName(item.data.name);
        setRecipientId(item.data.id);
        navigate(`/channels/${item.data.id}`);
        localStorage.setItem("RecipientId", JSON.stringify(item.data.id));
        localStorage.setItem("ChatName", JSON.stringify(item.data.name));
    }

    if (channels.length) {
        return (
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
                                onClick={() => handleItemClick(item)}
                            >
                            <p className={currentPage === item.name ? "selected" : ""}>
                                {item.icon} {item.data.name}
                            </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="channels">
                <div className="channels-main">
                    <div className="channels-header">
                        <h3> Channels </h3>
                        <button className="channels-btn"> + </button>
                    </div>
                    <div className="channels-content">
                        No channels
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayChannelsList;
