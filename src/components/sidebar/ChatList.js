import Avatar from '../ui/Avatar';

const ChatList = () => {
    const name = "jasy";
    const lastMessage = "how are you";
    return (
        <ul className="peer--list">
            <li className="peer peer__selected">
            <Avatar src="https://avatars.githubusercontent.com/u/80746081?s=200&v=4"/>
            <p className="peer--info">
            <h3 className="peer--title">{name}</h3>
            <p className="peer--last">{lastMessage}</p>
            </p>
            </li>

            <li className="peer">
            <Avatar src="https://avatars.githubusercontent.com/u/80746081?s=200&v=4"/>
            <p className="peer--info">
            <h3 className="peer--title">{name}</h3>
            <p className="peer--last">{lastMessage}</p>
            </p>
            </li>
        </ul>
    )
}
export default ChatList;
