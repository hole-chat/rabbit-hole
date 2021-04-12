import { h } from "preact";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import { useEffect, useState } from "preact/hooks";
import { AppContext, MessagesContext, UsersContext, appDef, mesDef, usDef } from '../context';


const App = () => {
  const [appState, updateAppState] = useState(appDef)
  const [messages, updateMessages] = useState(mesDef)
  const [userList, updateUserList] = useState(usDef)
  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:5948");
    socket.onopen = () => {
      console.log("Connected!")
      const json = JSON.stringify({
        type: 'startApp'
      });
      socket.send(json);
      updateAppState({...appState, ws: socket})
    };
    socket.onmessage = (json) => {
      console.log(json)
    };
  }, []);

  return (
    <AppContext.Provider value={{ self: appState, update: updateAppState }}>
      <MessagesContext.Provider value={{ self: messages, update: updateMessages }}>
        <UsersContext.Provider value={{ self: userList, update: updateUserList }}>
          <div id="app">
            <Sidebar />
            <Chat />
          </div>
        </UsersContext.Provider >
      </MessagesContext.Provider >
    </AppContext.Provider >
  );
};

export default App;
