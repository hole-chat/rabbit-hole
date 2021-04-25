import ChatList from "./ChatList"
import {useEffect, useContext} from 'preact/hooks'
import {UsersContext, AppContext} from '../../context'
const SideBar = () => {
    const context = useContext(AppContext);
    /*
    const ws = useContext(AppContext).self.ws;
    useEffect(() => {
        ws.onmessage = (data) => {
            console.log("gotted", data.data)
        }
    },[])*/
	return (
		<div className="sidebar--wrapper">
			<ChatList />
          <button className="add-chat-button" onClick={() => {context.update({...context.self, showAddNewUserPopUp: !context.self.showAddNewUserPopUp})}}>Add Chat</button>
		</div>
	);
};
export default SideBar;
