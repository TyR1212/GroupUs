import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../RoomContext";
import { CurrentUserContext } from "./../CurrentUserContext";
import Logo from "./../common/Logo";
import HelpButton from "../common/HelpButton";
import Labels from "./Labels";
import Menu from "./Menu";
import Groups from "./Groups";
import Social from "./Social";
import UserInfo from "./../UserInfo";

const Room = () => {
  const [room, setRoom] = useContext(RoomContext);
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [roomName, setRoomName] = useState("");
  const [username, setUsername] = useState("");
  const [maxGroupMembers, setMaxGroupMembers] = useState(0);

  useEffect(() => {
    //fetch data from api initially?
    if (typeof room !== "undefined") {
      setRoomName(room.name);
      setUsername(room.admin);
      setMaxGroupMembers(room.maxGroupMembers);
      setCurrentUser(
        new UserInfo(0, room.admin, "sfsdfsdf", 0, 0, "The Outbreaks")
      );
    } else {
      //fetch from api
      setRoomName("void");
      setUsername("Username");
      setMaxGroupMembers(0);
      setCurrentUser(
        new UserInfo(0, "Username", "sfsdfsdf", 0, 0, "The Outbreaks")
      );
    }
  }, []);

  return (
    <div>
      <HelpButton />
      <Logo size="small-logo" />
      <div id="room-heading">
        <div id="room-title">{roomName}</div>
        <h3>September, 2020</h3>
      </div>
      <Labels />
      <div id="sections">
        <Menu username={username} maxGroupMembers={maxGroupMembers} />
        <Groups />
        <Social />
      </div>
    </div>
  );
};

export default Room;
