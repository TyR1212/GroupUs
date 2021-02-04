import React from "react";
import User from "./User";

const UserList = ({ filteredUsers }) => {
  return (
    <table id="search-box">
      {filteredUsers.map((u) => (
        <User key={u.id} user={u} />
      ))}
    </table>
  );
};

export default UserList;
