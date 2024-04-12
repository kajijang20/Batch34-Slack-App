import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DisplayDMList.scss";

import { DataAllUsers, DataRecentMessage } from "../../utils/Api";
import getDMUsers from "../../utils/helper/getDMUsers";

const DisplayDMList = ({ setDmId, setChatEmail }) => {
    const [users, setUsers] = useState([]);
    const [DMUsers, setDMUsers] = useState([]);  
    const [recentUser, setRecentUser] = useState([]);  
    const [searchTerm, setSearchTerm] = useState("");
    const [displayUsers, setDisplayUsers] = useState([]);

    // getting user IDs from channels current user is a part of
    useEffect(() => {
        const channels = JSON.parse(localStorage.getItem("UserChannels"));
        if (channels !== null) {
            getDMUsers({ channels }).then((sortChannelUsers) => {
            //console.log("sortChannelusers: ", sortChannelUsers);
            //localStorage.setItem("DmList", JSON.stringify(sortChannelUsers));
            setDMUsers(sortChannelUsers);
            });
        }
    }, []);

    // getting all users
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await DataAllUsers();
            //console.log("allUsers: ", allUsers);
            setUsers(allUsers);
            const recentDm = await DataRecentMessage();
            console.log("recentDm: ", recentDm.data);
            setRecentUser(recentDm.data);
        }
        fetchData();
    }, []);
 
    const filteredUsers = [];
    if (users.data) {
        {DMUsers.map((userid) => {
            filteredUsers.push(users.data[userid]);
        })}
    }
    //console.log("filteredUsers: ", filteredUsers);

    const handleItemClick = async (user) => {
        //console.log("item: ", item);
        setChatEmail(user.email);
        setDmId(user.id);
        console.log("user email: ", user.email);
        navigate(`/messages/${user.id}`);
        //const membersData = await getChannelMems({ id: item.id });
        //console.log("membersData: ", membersData);
        //setMembers(membersData);
    }

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        const filteredUsers = users.data.filter(user => user.email.toLowerCase().includes(searchValue.toLowerCase()));
        setDisplayUsers(filteredUsers);
    }

    console.log("displayUsers: ", displayUsers);
    
    if (filteredUsers.length && recentUser.length) {
        return (
            <div className="dms">
                <div className="dms-recent">
                    <div className="dms-recent-header">
                        Recent DMs
                    </div>
                    {recentUser.length > 0 && (
                        <div className="dms-recent-list">
                        {recentUser.map(dm => (
                            <Link className="item-link"
                                key={dm.email + `-dms`}
                                to={`/messages/${dm.user_id}`}
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
                            {displayUsers.map(user => (
                                <Link className="item-link"
                                      key={user.uid + `-dms`}
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
    } else {
        return (
            <div className="dms">
                <div className="dms-header">
                    Users List
                </div>
                Loading...
            </div>
        );
    }
}

export default DisplayDMList;
