import Avatar from '../ui/Avatar';

const ChatList = () => {
    const name = "Jasy";
    const lastMessage = "THIS IS YOUR LIFE. DOESNT GET ANY BETTER THAN THIS. YOU HAVE TO GIVE UP. YOU HAVE TO REALIZE WHAT SOMEDAAY YOU WILL DIE";
    return (
        <ul className="peer--list">
            <li className="peer peer__selected">
            <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fspoonflower%2Fpublic%2Fdesign_thumbnails%2F0694%2F9616%2Fgradient-3_shop_thumb.png&f=1&nofb=1"/>
            <p className="peer--info">
            <h3 className="peer--title">{name}</h3>
            <p className="peer--last">{lastMessage}</p>
            </p>
            </li>

            <li className="peer">
            <Avatar src="https://avatars.githubusercontent.com/u/80746081?s=200&v=4"/>
            <p className="peer--info">
            <h3 className="peer--title">"Michael"</h3>
            <p className="peer--last">{lastMessage}</p>
            </p>
            </li>
        </ul>
    )
}
export default ChatList;
