import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CodeDisplay from "./CodeDisplay";
import Button from "../common/Button";
import Logo from "../common/Logo";
import HelpButton from "../common/HelpButton";
import { RoomContext } from "../RoomContext";
import RoomInfo from "../RoomInfo";

const cookieCutter = require('cookie-cutter');

const YourCode = () => {
  const history = useHistory();
  const [room, setRoom] = useContext(RoomContext); //won't need later
  const [roomCode, setRoomCode] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [roomName, setRoomName] = useState("");

  useEffect(() => { //do fetch from api
    if (typeof room !== "undefined") {
      setRoomCode(room.roomCode);
      setAdminCode(room.adminCode);
      setRoomName(room.name);
    } else {
      //room doesn't exist, redirect
      history.push("/create-room");
    }
  }, []);

  const goToRoom = () => {
    cookieCutter.set("admin", adminCode);
    console.log(room);
    history.push("/room/" + roomCode);
  };

  return (
    <div>
      <HelpButton />
      <div id="centered-container">
        <Logo />
        <div className="move-up">
          <h1>{roomName}</h1>
          <h2>Room Code (Share this)</h2>
          <CodeDisplay code={roomCode} />
          <h2>Your Admin Code (Keep secret)</h2>
          <CodeDisplay code={adminCode} />
          <br />
          <br />
          <Button clickEvent={goToRoom} text="Go to Room" size="long" />
        </div>
      </div>
    </div>
  );
};

export default YourCode;
