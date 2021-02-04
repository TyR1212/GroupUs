import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Input from "../common/Input";
import Button from "../common/Button";
import Increment from "../common/Increment";
import { RoomContext } from "../RoomContext";
import RoomInfo from "../RoomInfo";

const cryptoRandomString = require("crypto-random-string");

const CreateRoomForm = () => {
  const history = useHistory();
  const [room, setRoom] = useContext(RoomContext);
  const [adminName, setAdminName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [maxGroupMembers, setmaxGroupMembers] = useState(0);

  const goToGenerateCode = (e) => {
    var roomCode = cryptoRandomString({ length: 12, type: "alphanumeric" });
    var adminCode = cryptoRandomString({ length: 12, type: "alphanumeric" }); //check if these are taken

    e.preventDefault();
    setRoom(new RoomInfo(roomName, adminName, maxGroupMembers, roomCode, adminCode, new Date()));
    //push to API then redirect
    history.push("/your-code");
  };

  const inputNameHandler = (e) => {
    setRoomName(e.target.value);
  };

  const inputAdminHandler = (e) => {
    setAdminName(e.target.value);
  };

  const inputmaxGroupMembersHandler = (value) => {
    setmaxGroupMembers(value);
  };

  return (
    <form>
      <Input
        placeholder="Your Name"
        type="admin-name"
        value={adminName}
        onChange={inputAdminHandler}
        size="small"
      />
      <br />
      <Input
        placeholder="Room Name"
        type="room-name"
        value={roomName}
        onChange={inputNameHandler}
        size="small"
      />
      <br />
      <Increment
        value={maxGroupMembers}
        onChange={inputmaxGroupMembersHandler}
      />
      <Button text="Create" size="long" clickEvent={goToGenerateCode} />
    </form>
  );
};

export default CreateRoomForm;
