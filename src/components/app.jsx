import { h } from "preact";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import NewChatPopup from "./new-chat-popup/NewChatPopup";
import { useEffect, useState } from "preact/hooks";
import Errors from "./Errors"
import {
	AppContext,
	MessagesContext,
	UsersContext,
	appDef,
	mesDef,
	usDef,
} from "../context";
import "preact/devtools";

const App = () => {
	const [appState, updateAppState] = useState(appDef);
	const [messages, updateMessages] = useState(mesDef);
	const [userList, updateUserList] = useState(usDef);
	useEffect(() => {
		const socket = new WebSocket("ws://127.0.0.1:5948");
		socket.onopen = () => {
			console.log("Connected!");
			const json = JSON.stringify({
				type: "startApp",
			});

			socket.send(json);
			socket.send(
				JSON.stringify({
					type: "loadUsers",
				})
			);
			updateAppState({ ...appState, ws: socket });
		};
		socket.onmessage = (json) => {
			try {
				let j = JSON.parse(json.data);
				console.log("json: ", j);
				switch (j.type) {
					case "initialConfig":
						{
							updateAppState({
								...appState,
								userConfig: { id: j.id, publicKey: j.publicKey },
								ws: socket,
							});
						}
                        console.warn("YOUR SHARED CONFIG \n", JSON.stringify({id: j.id, insertKey: j.publicKey, signKey: "none"}))
						break;
					case "userList":
						{
							console.log("userlist" ,[...userList, ...j.users]);
              setTimeout(() =>{
							  updateUserList([...userList, ...j.users]);
              },  500)
							// j.users.forEach((us, id) => {
							// 	updateMessages({
							// 		...messages,
							// 		[us.id]: [
							// 			messages[us.id] == undefined ? messages[us.id] : [],
							// 		],
							// 	});
							// })
						}
						break;
					case "userAdded":
						{
							console.log("old list", userList);
							console.log("got new list", [...userList, j]);
							updateUserList([...userList, j]);
						}
						break;
					case "messageList":
						{
              console.log(`id is $(j.id), messages is $(j.messages)`, {
								...messages,
								[j.id]: [...messages[j.id], j.messages],
							})
							updateMessages({
								...messages,
								[j.id]: [...messages[j.id], ...j.messages],
							});
						}
						break;

                   case "Message": {
                       updateMessages({
								...messages,
								[j.id]: [...messages[j.id], j],
							})
                       console.log("Adding new message", {
								...messages,
								[j.id]: [...messages[j.id], j],
							});
                       break;
                   }

				}
			} catch (e) {}
		};
	}, []);

	return (
		<AppContext.Provider value={{ self: appState, update: updateAppState }}>
			<MessagesContext.Provider
				value={{ self: messages, update: updateMessages }}
			>
				<UsersContext.Provider
					value={{ self: userList, update: updateUserList }}
				>
					<div id="app">
                      	<Errors/>
						<Sidebar />
						<Chat />
						<NewChatPopup />
					</div>
				</UsersContext.Provider>
			</MessagesContext.Provider>
		</AppContext.Provider>
	);
};

export default App;
