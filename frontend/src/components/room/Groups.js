import React, { useContext } from "react";
import GroupsTable from "./GroupsTable";
import { UsersContext } from "./../UsersContext";

const Groups = () => {
  const [users, setUsers] = useContext(UsersContext);

  return (
    <section id="groups">
      <GroupsTable />
      <div id="user-count">Total users: {users.length}/300</div>
    </section>
  );
};

export default Groups;
