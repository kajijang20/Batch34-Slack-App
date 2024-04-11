import React, { useState, useEffect } from "react";
//import { Link, useNavigate } from "react-router-dom";
import "./DisplayDMList.scss";

import { DataAllUsers } from "../../utils/Api";
import SearchBar from "../Searchbar/Searchbar";

const DisplayDMList = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
//    const navigate = useNavigate();
/*
    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await DataAllUsers();
            setUsers(allUsers);
        }
        fetchData();
    }, []);
    
    console.log("all users: ", users);
    const filteredUsers = users && users.data ? users.data.filter(user => user.email.includes(searchTerm)) : [];
    

    return (
        <div className="dms">
            <div className="dms-header">
                Users List
            </div>
            <div className="dms-search">
                <SearchBar users={users}
                           onSearch={(searchTerm) => setSearchTerm(searchTerm)}
                />
                {filteredUsers.map(user => (
                    <div key={user.id}>{user.email}</div>
                ))}
            </div>
        </div>
    );
    */
}

export default DisplayDMList;