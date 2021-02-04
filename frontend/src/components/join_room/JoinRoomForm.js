import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const JoinRoomForm = () => {
  return (
    <form>
      <Input placeholder="Room Code" type="room-code" size="large" />
      <Button text="Join" size="short" />
    </form>
  );
};

export default JoinRoomForm;
