import { h } from "preact";
import { useState } from "preact/hooks";
import Message from "./Message";
const Messages = () => {
	const user = {};
	const [messages, updateMessage] = useState([
		{
			from_me: true,
			message: "Welcome to freenet",
			date: "20-20-20-30:20:10",
		},
{
			from_me: false,
			message: "Yup, thanks",
			date: "20-20-20-30:20:10",
		},
{
			from_me: true,
			message: "Glad to see you here",
			date: "20-20-20-30:20:10",
		},
{
			from_me: true,
			message: "Do you have any aquaintances here??",
			date: "20-20-20-30:20:10",
		},
	]);
	return (
		<ul className="message--list">
			{messages.map((message) => (
				<li
					className={`message--wrap message--wrap__${
						message.from_me ? "right" : "left"
					}`}
				>
					<Message
						side={message.from_me}
						message={message.message}
						avatar={message.avatar}
					/>
				</li>
			))}
		</ul>
	);
};
export default Messages;
