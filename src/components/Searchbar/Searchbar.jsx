import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Searchbar.scss";

const SearchBar = ({ users, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(null);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

    const filteredUsers = users && users.data ? users.data.filter(user => user.email.startsWith(searchTerm)) : [];

    const handleItemClick = (user) => {
        setCurrentPage(user.data.email);
        setChatName(user.data.email);
        setRecipientId(user.data.id);
        navigate(`/messages/${user.data.id}`);
        localStorage.setItem("RecipientUserId", JSON.stringify(user.data.id));
        localStorage.setItem("DMName", JSON.stringify(user.data.name));
    }

    return (
        <div className="search-bar">
            <input 
                type="text"
                value={searchTerm} 
                onChange={handleSearch} 
                placeholder="Search Users" 
            />
            {searchTerm.length > 0 && filteredUsers.length > 0 && (
                <div className="search-dropdown">
                    {filteredUsers.slice(0, 5).map(user => (
                        <Link className="item-link"
                              key={user.data.id}
                              onClick={() => handleItemClick(user)}
                        >
                        <p className={currentPage === user.email ? "selected" : ""}>
                            {user.data.email}
                        </p>
                    </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;