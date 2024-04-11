import React, { useState, useEffect } from "react";
import "./DisplayDMList.scss";

import { DataAllUsers } from "../../utils/Api";
import SearchBar from "../Searchbar/Searchbar";

const DisplayDMList = () => {
    /*
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await DataAllUsers();
            console.log("all users: ", allUsers);
            setUsers(allUsers);
            setFilteredUsers(allUsers);
        }
        fetchData();
    }, []);
  
    const handleSearch = (searchTerm) => {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredUsers(filteredUsers);
        console.log("filtered users: ", filteredUsers);
    }
    
    return (
        <div className="dms">
            <div className="dms-main">
                <div className="dms-header">
                    <h3> Channels </h3>
                </div>
                <SearchBar users={users} onSearch={handleSearch} />
                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
    */
   
    return (
        <div className="dms">
            DM wip
        </div>
    );
}

export default DisplayDMList;