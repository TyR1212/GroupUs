import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import JoinRoom from "./components/join_room/JoinRoom";
import CreateRoom from "./components/create_room/CreateRoom";
import YourCode from "./components/code_display/YourCode";
import Help from "./components/common/Help";
import Room from "./components/room/Room";
import { RoomProvider } from "./components/RoomContext";
import { UsersProvider } from "./components/UsersContext";
import { ActivityProvider } from "./components/ActivityContext";
import { ChatProvider } from "./components/ChatContext";
import { CurrentUserProvider } from "./components/CurrentUserContext";

function App() {
  return (
    <CurrentUserProvider>
      <ChatProvider>
        <ActivityProvider>
          <UsersProvider>
            <RoomProvider>
              <Router>
                <Switch>
                  <Redirect exact from="/" to="/join-room" />
                  <Route exact path="/join-room" component={JoinRoom} />
                  <Route exact path="/create-room" component={CreateRoom} />
                  <Route exact path="/your-code" component={YourCode} />
                  <Route exact path="/help" component={Help} />
                  <Route path="/room" component={Room} />
                </Switch>
              </Router>
            </RoomProvider>
          </UsersProvider>
        </ActivityProvider>
      </ChatProvider>
    </CurrentUserProvider>
  );
}

export default App;
