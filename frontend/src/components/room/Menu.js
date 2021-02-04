import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./../common/Button";
import SearchBox from "./SearchBox";

const Menu = ({ username, maxGroupMembers }) => {
  const history = useHistory();

  return (
    <section id="menu">
      <div id="username-label">{username}</div>
      <Button size="long" text="Leave Room" />
      <br />
      <div className="move-up-slightly">
        <Button size="long" text="View List" />
      </div>
      <div id="search-box-label">All users</div>
      <SearchBox />
      <div id="max-group-users-label">
        Group size limit: {maxGroupMembers}
      </div>
    </section>
  );
};

export default Menu;
