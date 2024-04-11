import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DisplayChannelsList.scss";

import getChannels from "../../utils/helper/getChannels";
import getChannelMems from "../../utils/helper/getChannelMems";

const DisplayChannelsList = ({ setRecipientId, setChatName }) => {
    const [channels, setChannels] = useState([]);
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const channelData = await getChannels();
            //console.log("channeldata: ", channelData);
            setChannels(channelData);
            //console.log("channeldata type: ", typeof(channelData));
        }
        fetchData();
    }, []);

    const handleItemClick = async (item) => {
        //console.log("item: ", item);
        setChatName(item.name);
        setRecipientId(item.id);
        navigate(`/channels/${item.id}`);
        const membersData = await getChannelMems({ id: item.id });
        //console.log("membersData: ", membersData);
        setMembers(membersData);
    }

    const handleMemberClick = async (mems) => {
        navigate(`/messages/${mems.id}`);
    }

    if (typeof(channels) === "object") {
        return (
            <div className="channels">
                <div className="channels-header">
                    <h3> Channels </h3>
                    <button className="channels-btn"> + </button>
                </div>
                <div className={`channels-content ${channels.length > 5 ? 'scrollable' : ''}`}>
                    {channels.map((item) => (
                        <Link className="item-link"
                            key={item.id + `-channel`}
                            to={`/channels/${item.id}`}
                            onClick={() => handleItemClick(item)}
                        >
                        <p className="channels-name">
                            {item.icon} {item.name}
                        </p>
                        </Link>
                    ))}
                </div>
                <div className={`channels-members ${members.length > 5 ? 'scrollable' : ''}`}>
                    <div className="channels-member-header">
                        Members in Channel:
                    </div>
                    {members.map((mems) => (
                        <Link className="item-link"
                            key={mems.id + `-channel`}
                            to={`/messages/${mems.id}`}
                            onClick={() => handleMemberClick(mems)}
                        >
                        <p className="channels-members-name">
                            User ID: {mems.user_id}
                        </p>
                        </Link>
                    ))}
                </div>

            </div>
        );
    } else {
        return (
            <div className="channels">
                <div className="channels-header">
                    <h3> Channels </h3>
                    <button className="channels-btn"> + </button>
                </div>
                <div className="channels-content">
                    No channels
                </div>
            </div>
        );
    }
}

export default DisplayChannelsList;
