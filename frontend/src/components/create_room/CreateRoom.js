import React from "react";
import CreateRoomForm from "./CreateRoomForm";
import Logo from "../common/Logo";
import HelpButton from "../common/HelpButton";

const CreateRoom = () => {
  return (
    <div>
      <HelpButton />
      <div id="centered-container">
        <Logo />
        <div className="move-up">
          <h1>Create a Room</h1>
          <CreateRoomForm />
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
