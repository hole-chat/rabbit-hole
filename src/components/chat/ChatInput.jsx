import { useState, useContext, useRef } from "preact/hooks";
import { MessagesContext, AppContext } from "../../context";

let fixScroll = (scrollBlock) => {
    const scroll = document.getElementById("chat-scroll")
	const blockHeight = scroll.offsetHeight;
	const scrollHeight = scroll.scrollHeight;
	const current = scroll.scrollTop;
};

const ChatInput = () => {
	let [newMessage, newValue] = useState("");
	const { self, update } = useContext(MessagesContext);
	const state = useContext(AppContext).self;
    const scroll = document.getElementById("chat-scroll")
	let sendMessage = () => {
		let id = state.currentChat;
		update({
			...self,
			[id]: [
				...self[id],
				{ fromMe: true, message: newMessage, date: new Date().toISOString() },
			],
		});
		setTimeout(() => {
		scroll.scrollTo(0, scroll.scrollHeight);
		}, 10);
		state.ws.send(
			JSON.stringify({ type: "sendMessage", message: newMessage, userId: id })
		);
        console.log("seding", newMessage)
	};

	return (
		<div className="input__wrap">
			<input
				className="input"
				placeholder="Your message"
				onSubmit={sendMessage}
				value={newMessage}
				onChange={(input) => {
					newValue(input.target.value);
				}}
			/>
			<button className="button input-button" onClick={sendMessage}>
				send
			</button>
		</div>
	);
};
export default ChatInput;
