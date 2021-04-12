import { useState, useContext, useRef } from "preact/hooks";
import { MessagesContext, AppContext } from "../../context";

let fixScroll = (scrollBlock) => {
	const blockHeight = scrollBlock.offsetHeight;
	const scrollHeight = scrollBlock.scrollHeight;
	const current = scrollBlock.scrollTop;
	console.log(blockHeight, scrollHeight, current);
};

const ChatInput = () => {
	let [newMessage, newValue] = useState("");
	const { self, update } = useContext(MessagesContext);
	const state = useContext(AppContext).self;
	let sendMessage = () => {
		let id = state.currentChat;
		update({
			...self,
			[id]: [
				...self[id],
				{ fromMe: true, message: newMessage, date: new Date().toISOString() },
			],
		});
		console.log(state.chatBlock.current.scrollHeight);
		setTimeout(() => {
			state.chatBlock.current.scrollTo(0, state.chatBlock.current.scrollHeight);
		}, 10);
		state.ws.send(
			JSON.stringify({ type: "sendMessage", message: newMessage, userId: id })
		);
		console.log("sended");
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
