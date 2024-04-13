import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DisplayChannelsList.scss";

import { DataAllUsers, DataAddMem } from "../../utils/Api";
import getChannels from "../../utils/helper/getChannels";
import getChannelMems from "../../utils/helper/getChannelMems";

//import AddMember from "../AddMember/AddMember";
//import handleAddUser from "../../utils/helper/handleAddUser";

const DisplayChannelsList = ({ setRecipientId, setChatName }) => {
    const [channels, setChannels] = useState([]);
    const [members, setMembers] = useState([]);
    const [channelId, setChannelId] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const channelData = await getChannels();
            //console.log("channeldata: ", channelData);
            setChannels(channelData);
        }
        fetchData();
    }, []);

    const handleCreateChannel = () => {
        console.log("handle create channel");
    }

    const handleItemClick = async (item) => {
        //console.log("item: ", item);
        setChatName(item.name);
        setRecipientId(item.id);
        setChannelId(item.id);
        navigate(`/channels/${item.id}`);
        const membersData = await getChannelMems({ id: item.id });
        //console.log("membersData: ", membersData);
        setMembers(membersData);
    }
/*
    const handleMemberClick = async (mems) => {
        navigate(`/messages/${mems.id}`);
    }
*/
    const [showPopup, setShowPopup] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownUsers, setDropdownUsers] = useState([]);
    const [memID, setMemID] = useState("");

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleAddUser = () => {
        console.log("handle add user");
        setSearchTerm("");
        togglePopup();
    }

    //console.log("allUsers: ", allUsers);

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        const filteredUsers = allUsers.data.filter(user => user.email.toLowerCase().includes(searchValue.toLowerCase()));
        setDropdownUsers(filteredUsers);
    }

    const handleAddMemberUserId = (user) => {
        setMemID(user.id);
        togglePopup();
    }

    //console.log("memID: ", memID);
    //console.log("channelId: ", channelId);

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsersData = await DataAllUsers();
            setAllUsers(allUsersData);
            if (memID !== "") {
                const addUser = await DataAddMem({ id: channelId, member_id: memID });
                //console.log("adduser: ", addUser);
            }
        };
        fetchUsers();
    }, []);

    ///////////////////////////////////////

    if (typeof(channels) === "object") {
        return (
            <div className="channels">
                <div className="channels-header">
                    <h3> Channels </h3>
                    <button className="channels-btn" onClick={handleCreateChannel}> + </button>
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
                
                <div className="channels-member-header">
                    <h3> Members: </h3>
                    <button className="add-mem-btn" onClick={handleAddUser}> + </button>
                </div>
                <div className={`channels-members ${members.length > 5 ? 'scrollable' : ''}`}>
                    {/*members.map((mems) => (
                        <Link className="item-link"
                            key={mems.id + `-channel`}
                            to={`/messages/${mems.id}`}
                            onClick={() => handleMemberClick(mems)}
                        >
                        <p className="channels-members-name">
                            User ID: {mems.user_id}
                        </p>
                        </Link>
                    ))*/}
                    {members.map((mems) => (
                        <p key={mems.id + `-channel`} className="channels-members-name">
                            User ID: {mems.user_id}
                        </p>
                    ))}
                </div>
                {showPopup && (
                <div className="channels-add-mem-popup">
                    <div className="channels-add-mem-popup-input">
                        <input type="text" 
                            value={searchTerm}
                            placeholder="Enter member_ids" 
                            onChange={handleSearch}                                
                        />
                        {searchTerm.length > 0 && dropdownUsers.length > 0 && (
                            <div className="channels-add-mem-search-dropdown"> 
                                {dropdownUsers.map((user, userIndex) => (
                                    <p className="channels-add-mem-search-name"
                                       key={user.id} 
                                       onClick={() => handleAddMemberUserId(user)}
                                    >
                                        {user.email}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="channels-add-mem-popup-btns">
                        <button onClick={handleAddUser} className="channels-add-mem-popup-add-btn"> Add Member </button>
                        <button onClick={togglePopup} className="channels-add-mem-popup-cancel-btn"> Cancel </button>
                    </div>
                </div>
            )}
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
