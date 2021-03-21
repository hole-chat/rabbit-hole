import { h } from "preact";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import { useEffect } from "preact/hooks";
const App = () => {
	useEffect(() => {
		const socket = new WebSocket("ws://127.0.0.1:5948");
		socket.onopen = () => {
			console.log("Connected!")
			const json = JSON.stringify({
				user_id: 123456789,
				receiver_id: 123456789,
				message: "STARTAPP!",
				time:
					"Tue Oct 13 2020 18:31:22 GMT+0300 (Eastern European Summer Time)",
			});
			socket.send(json);
		};
		socket.onmessage = (json) => {
			console.log("Message gotted ", json );
		};
	}, []);
	return (
		<div id="app">
			<Sidebar />
			<Chat />
		</div>
	);
};

export default App;
