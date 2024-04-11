import React, { useState } from "react";
import "./Searchbar.scss";

const SearchBar = ({ users, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <div>
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search Users" />
        </div>
    );
}

export default SearchBar;