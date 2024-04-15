import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DisplayChannelsList.scss";

import { DataAllUsers, DataCreateChannel } from "../../utils/Api";
import getChannels from "../../utils/helper/getChannels";
import getChannelMems from "../../utils/helper/getChannelMems";
import DisplayChannelMembersList from "../DisplayChannelMembersList/DisplayChannelMembersList";

const DisplayChannelsList = ({ setRecipientId, setChatName }) => {
    const currentUser = JSON.parse(localStorage.getItem("UserId"));
    const [channels, setChannels] = useState([]);
    const [members, setMembers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [channelId, setChannelId] = useState([]);
    
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [channelName, setChannelName] = useState("");
    const [dropdownUsers, setDropdownUsers] = useState([]);
    const [searchTermChannel, setSearchTermChannel] = useState("");
    const [showChannelPopup, setShowChannelPopup] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const channelData = await getChannels();
            setChannels(channelData);
        }
        fetchData();
    }, []);

    const handleItemClick = async (item) => {
        setChatName(item.name);
        setRecipientId(item.id);
        setChannelId(item.id);
        navigate(`/channels/${item.id}`);
        const membersData = await getChannelMems({ id: item.id });
        setMembers(membersData);
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsersData = await DataAllUsers();
            setAllUsers(allUsersData);
        };
        fetchUsers();
    }, []);

    const toggleCreatePopup = () => {
        setShowChannelPopup(!showChannelPopup);
    }

    const createChannel = () => {
        console.log("handle create channel");
        setChannelName("");
        setSearchTermChannel("");
        toggleCreatePopup();
    }

    const handleChannelName = (event) => {
        const setName = event.target.value;
        setChannelName(setName);
    }

    const handleSearchChannel = (event) => {
        const searchValue = event.target.value;
        setSearchTermChannel(searchValue);
        const filteredUsers = allUsers.data.filter(user => user.email.toLowerCase().includes(searchValue.toLowerCase()));
        setDropdownUsers(filteredUsers);
    }

    const handleAddMember = (user) => {
        setSelectedMembers([...selectedMembers, user]);
        setDropdownUsers(dropdownUsers.filter(member => member.id !== user.id));
    }

    const handleRemoveMember = (user) => {
        const updatedMembers = selectedMembers.filter(member => member.id !== user.id);
        setSelectedMembers(updatedMembers);
    }

    const handleCreateChannel = async () => {
        setChannelName("");
        setSearchTermChannel("");
        toggleCreatePopup();
        const memberIds = selectedMembers.map((user) => user.id);
        memberIds.push(currentUser);
        const createchan = await DataCreateChannel({ name: channelName, user_ids: memberIds });
        //setChannels([...channels, createchan]);
    }


    if (typeof(channels) === "object") {
        return (
            <div className="channels">
                <div className="channels-header">
                    <h3> Channels </h3>
                    <button className="channels-btn" onClick={createChannel}> + </button>
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
                {showChannelPopup && (
                <div className="channels-create-channel-popup">
                    <div className="channels-create-channel-popup-input">
                        <input type="text" 
                               value={channelName}
                               placeholder="Enter channel name" 
                               onChange={handleChannelName}                                
                        />
                        <div className="channels-create-channel-popup-selected-members">
                            Selected Members:
                            {selectedMembers.map(member => (
                                <p key={member.id} 
                                   className="channels-create-channel-popup-selected-member" 
                                   onClick={() => handleRemoveMember(member)}
                                >
                                    {member.email}
                                </p>
                            ))}
                        </div>
                        <input type="text" 
                               value={searchTermChannel}
                               placeholder="Search for members" 
                               onChange={handleSearchChannel}                                
                        />
                        {searchTermChannel.length > 0 && dropdownUsers.length > 0 && (
                            <div className="channels-create-channel-search-dropdown"> 
                                {dropdownUsers.map((user, userIndex) => (
                                    <p className="channels-create-channel-search-name"
                                       key={user.id} 
                                       onClick={() => handleAddMember(user)}
                                    >
                                        {user.email}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="channels-create-channel-popup-btns">
                        <button onClick={handleCreateChannel} className="channels-create-channel-popup-add-btn"> Create Channel </button>
                        <button onClick={toggleCreatePopup} className="channels-create-channel-popup-cancel-btn"> Cancel </button>
                    </div>
                </div>
                )}

                <DisplayChannelMembersList members={members} channelId={channelId}/>
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
