import Message from "./Message";
const Messages = () => {
	const from_me = false;
	return (
		<ul className="message--list">
			<li
				className={`message--wrap message--wrap__${(from_me ? "right" : "left")}`}
			>
				<Message
					side={from_me}
					message="Hey john"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fspoonflower%2Fpublic%2Fdesign_thumbnails%2F0694%2F9616%2Fgradient-3_shop_thumb.png&f=1&nofb=1"
				/>
			</li>
			<li
				className={`message--wrap message--wrap__${(!from_me ? "right" : "left")}`}
			>
				<Message
					side={true}
					message="Hi!"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fspoonflower%2Fpublic%2Fdesign_thumbnails%2F0274%2F3857%2FrrCyan_Gradient_shop_thumb.png&f=1&nofb=1"
				/>
			</li>
			<li
				className={`message--wrap message--wrap__${from_me ? "right" : "left"}`}
			>
				<Message
					side={from_me}
					message="Do you procrastinate? :)"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fspoonflower%2Fpublic%2Fdesign_thumbnails%2F0694%2F9616%2Fgradient-3_shop_thumb.png&f=1&nofb=1"
				/>
			</li>
			<li
				className={`message--wrap message--wrap__${from_me ? "right" : "left"}`}
			>
				<Message
					side={from_me}
					message="I dont fink so :)"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fspoonflower%2Fpublic%2Fdesign_thumbnails%2F0694%2F9616%2Fgradient-3_shop_thumb.png&f=1&nofb=1"
				/>
			</li>
			<li
				className={`message--wrap message--wrap__${from_me ? "right" : "left"}`}
			>
				<Message
					side={from_me}
					message="THIS IS YOUR LIFE. DOESNT GET ANY BETTER THAN THIS. YOU HAVE TO GIVE UP. YOU HAVE TO REALIZE WHAT SOMEDAAY YOU WILL DIE"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fspoonflower%2Fpublic%2Fdesign_thumbnails%2F0694%2F9616%2Fgradient-3_shop_thumb.png&f=1&nofb=1"
				/>
			</li>


		</ul>
	);
};
export default Messages;
