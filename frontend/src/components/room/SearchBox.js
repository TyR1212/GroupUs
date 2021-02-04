import React, { useState, useContext, useEffect } from "react";
import SearchInput from "./SearchInput";
import UserList from "./UserList";
import { UsersContext } from "./../UsersContext";

const SearchBox = () => {
  const [users, setUsers] = useContext(UsersContext);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchInput, setSearchInput] = useState("");

  const filterUsers = () => {
    var filtered = [];

    users.forEach((u) => {
      if (u.name.toLowerCase().includes(searchInput.toLowerCase())) {
        filtered.push(u);
      }
    });

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    if (searchInput.length === 0) setFilteredUsers(users);
    else filterUsers();
  }, [users]);

  useEffect(() => {
    filterUsers();
  }, [searchInput]);

  return (
    <div>
      <div id="search-box-container">
        <UserList filteredUsers={filteredUsers} />
      </div>
      <SearchInput
        users={users}
        setSearchInput={setSearchInput}
      />
    </div>
  );
};

export default SearchBox;
