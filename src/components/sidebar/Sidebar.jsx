import ChatList from "./ChatList"
import {useEffect, useContext} from 'preact/hooks'
import {UsersContext, AppContext} from '../../context'
const SideBar = () => {
    /*
    const ws = useContext(AppContext).self.ws;
    useEffect(() => {
        ws.onmessage = (data) => {
            console.log("gotted", data.data)
        }
    },[])*/
	return (
		<div>
			<ChatList />
            <button>+</button>
		</div>
	);
};
export default SideBar;
