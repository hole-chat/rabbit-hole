import Avatar from "../ui/Avatar";
const Message = (props) => {
	console.log(props.side);
	const message = props.message;
	const avatar = props.src;
	return (
		<div className={`message message__${(props.side ? "right" : "left")}`}>
			<Avatar small={true} src={avatar} />
			<p className="message--text">{message}</p>
		</div>
	);
};
export default Message;
