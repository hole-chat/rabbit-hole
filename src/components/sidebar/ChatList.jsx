import { h } from 'preact';
import { useState, useContext } from 'preact/hooks';
import Avatar from "../ui/Avatar";
import { UsersContext } from '../../context'

const ChatList = () => {
  const users = useContext(UsersContext)
  // const [users, updateUsers] = useState([
  // 	{
  // 		name: "Jack",
  // 		id: 1,
  // 		lastMessage: "How are you",
  // 		avatar: undefined,
  // 	},
  // 	{
  // 		name: "Jasy",
  // 		id: 2,
  // 		lastMessage:
  // 			"THIS IS YOUR LIFE. DOESNT GET ANY BETTER THAN THIS. YOU HAVE TO GIVE UP. YOU HAVE TO REALIZE WHAT SOMEDAAY YOU WILL DIE",
  // 		avatar: "https://avatars.githubusercontent.com/u/80746081?s=200&v=4",
  // 	},
  // ]);
  return (
    <ul className="peer--list">
      {users.self.map((user) => {
        return (
          <li key={user.id} className="peer peer__selected">
            <Avatar src={user.avatar} />
            <p className="peer--info">
              <h3 className="peer--title">{user.name}</h3>
              <p className="peer--last">{user.lastMessage}</p>
            </p>
          </li>
        )
      })}
    </ul>
  );
};
export default ChatList;
