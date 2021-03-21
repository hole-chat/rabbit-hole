import Avatar from "../ui/Avatar";
const Message = (props) => {
	return (
		<div className={`message message__${(props.side ? "right" : "left")}`}>
			<Avatar small={true} src={props.avatar} />
			<p className="message--text">{props.message}</p>
		</div>
	);
};
export default Message;
