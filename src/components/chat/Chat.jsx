import ChatInput from "./ChatInput";
import Messages from "./Messages";
const Chat = () => {
	return (
		<div className="chat__wrap">
			<Messages />
			<ChatInput />

		</div>
	);
};
export default Chat;
