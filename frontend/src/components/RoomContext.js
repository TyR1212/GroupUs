//this file allows you to share state data between different components that aren't children of each other
import React, { useState, createContext } from "react";
import RoomInfo from './RoomInfo';

export const RoomContext = createContext(new RoomInfo());

export const RoomProvider = (props) => {
  const [room, setRoom] = useState();

  return (
    <RoomContext.Provider value={[room, setRoom]}>
      {props.children}
    </RoomContext.Provider>
  );
};
