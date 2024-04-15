import React, { useState, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DisplayDMList.scss";

import { DataAllUsers, DataRecentMessage } from "../../utils/Api";
import getDMUsers from "../../utils/helper/getDMUsers";

const DisplayDMList = ({ setRecipientId, setChatName }) => {
    const [users, setUsers] = useState([]);
    const [DMUsers, setDMUsers] = useState([]);  
    const [recentUser, setRecentUser] = useState([]);  
    const [searchTerm, setSearchTerm] = useState("");
    const [displayUsers, setDisplayUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // getting user IDs from channels current user is a part of
        const channels = JSON.parse(localStorage.getItem("UserChannels"));
        if (channels !== null) {
            getDMUsers({ channels }).then((sortChannelUsers) => {
            setDMUsers(sortChannelUsers);
            });
        }
        // getting all users and recent messages
        const fetchData = async () => {
            const allUsers = await DataAllUsers();
            setUsers(allUsers);
            const recentDm = await DataRecentMessage();
            setRecentUser(recentDm.data);
        }
        fetchData();
    }, []);

    // letting searchbar only output users in channel with
    const filteredUsers = [];
    if (users.data) {
        {DMUsers.map((userid) => {
            filteredUsers.push(users.data[userid]);
        })}
    }

    const handleItemClick = async (user) => {
        setChatName(user.email);
        setRecipientId(user.id);
        navigate(`/messages/${user.id}`);
        setSearchTerm("");
    }

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        const filteredUsers = users.data.filter(user => user.email.toLowerCase().includes(searchValue.toLowerCase()));
        setDisplayUsers(filteredUsers);
    }

    if (filteredUsers.length && recentUser.length) {
        return (
            <div className="dms">
                <div className="dms-recent">
                    <div className="dms-recent-header">
                        Recent DMs
                    </div>
                    {recentUser.length > 0 && (
                        <div className="dms-recent-list">
                        {recentUser.map((dm, dmIndex) => (
                            <Link className="item-link"
                                  key={`${dm.email}-${dmIndex}-dms`}
                                  to={`/messages/${dm.id}`}
                                  onClick={() => handleItemClick(dm)}
                            >
                                <p className="dms-name">
                                    {dm.email}
                                </p>
                            </Link>
                        ))}
                    </div>
                    )}
                </div>
                <div className="dms-header">
                    Users List
                </div>
                <div className="search-bar">
                    <input 
                        type="text"
                        value={searchTerm} 
                        onChange={handleSearch} 
                        placeholder="Search Users" 
                    />
                    {searchTerm.length > 0 && displayUsers.length > 0 && (
                        <div className="search-dropdown">
                            {displayUsers.map((user, userIndex) => (
                                <Link className="item-link"
                                      key={`${user.id}-${userIndex}-dms`}
                                      to={`/messages/${user.id}`}
                                      onClick={() => handleItemClick(user)}
                                >
                                <p className="search-name">
                                    {user.email}
                                </p>
                            </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    } else if (filteredUsers.length && !recentUser.length) {
        return (
            <div className="dms">
                <div className="dms-header">
                    Users List
                </div>
                {filteredUsers.length > 0 && (
                <div className="search-bar">
                    <input 
                        type="text"
                        value={searchTerm} 
                        onChange={handleSearch} 
                        placeholder="Search Users" 
                    />
                    {searchTerm.length > 0 && displayUsers.length > 0 && (
                        <div className="search-dropdown">
                            {displayUsers.map((user, userIndex) => (
                                <Link className="item-link"
                                      key={`${user.id}-${userIndex}-dms`}
                                      to={`/messages/${user.id}`}
                                      onClick={() => handleItemClick(user)}
                                >
                                <p className="search-name">
                                    {user.email}
                                </p>
                            </Link>
                            ))}
                        </div>
                    )}
                </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="dms">
                <div className="dms-header">
                    Users List
                </div>
                You're not in any channels
            </div>
        );
    }
}

export default DisplayDMList;
