import React, { useState, useEffect } from "react";
import "./DisplayChannelMembersList.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DataAllUsers, DataAddMem } from "../../utils/Api";
import { getHeaders } from "../../utils/helper/getHeaders";

const DisplayChannelMembersList = ({ members, channelId }) => {
    const header = getHeaders();
    const [showPopup, setShowPopup] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownUsers, setDropdownUsers] = useState([]);
    const [memID, setMemID] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsersData = await DataAllUsers();
            setAllUsers(allUsersData);
        };
        fetchUsers();
    }, []);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const addUser = () => {
        if (typeof(channelId) === "number") {
            console.log("handle add user");
            setSearchTerm("");
            togglePopup();
        } else {
            toast.error("Please click on a channel first.");
        }
    }

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        const filteredUsers = allUsers.data.filter(user => user.email.toLowerCase().includes(searchValue.toLowerCase()));
        setDropdownUsers(filteredUsers);
    }

    const handleAddMemberUserId = (user) => {
        setSearchTerm(user.email);
        setMemID(user.id);
    }

    console.log("channelId: ", channelId);
    console.log("memId: ", memID);

    const handleAddUser = async () => {
        console.log("handle add user");
        setSearchTerm("");
        togglePopup();
        const addUser = await DataAddMem({ id: channelId, member_id: memID });
        console.log("adduser: ", addUser);
    }

    return (
        <div>
        <ToastContainer/>
        <div className="channels-member-header">
            <h3> Members: </h3>
            <button className="add-mem-btn" onClick={addUser}> + </button>
        </div>
        <div className={`channels-members ${members.length > 5 ? 'scrollable' : ''}`}>
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
                            {dropdownUsers.map((user) => (
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
}

export default DisplayChannelMembersList;
