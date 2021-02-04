import React from "react";
import { useHistory } from "react-router-dom";
import JoinRoomForm from "./JoinRoomForm";
import Logo from "../common/Logo";
import Button from "../common/Button";
import HelpButton from "../common/HelpButton";

const JoinRoom = () => {
  const history = useHistory();

  const goToCreateRoom = () => {
    history.push("/create-room");
  };

  return (
    <div>
      <HelpButton />
      <div id="centered-container">
        <Logo />
        <h1>Join a Room</h1>
        <JoinRoomForm />
        <h2>---- Or ----</h2>
        <Button text="Create Room" size="long" clickEvent={goToCreateRoom} />
      </div>
    </div>
  );
};

export default JoinRoom;
