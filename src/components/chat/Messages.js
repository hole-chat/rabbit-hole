import Message from './Message'
const Messages = () => {
    const from_me;
    return (
            <ul>
            <li className={"message message__" + (from_me ? "right" : "left")}>
            <Message side={from_me}/>
            </li>
            </li>
    )
}
export default Messages;
