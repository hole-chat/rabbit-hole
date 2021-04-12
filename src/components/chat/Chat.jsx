import ChatInput from "./ChatInput";
import Messages from "./Messages"
import { MessagesContext } from "../../context"
import {useEffect} from "preact/hooks"
const Chat = () => {
  return (
    <MessagesContext.Consumer>
      { messages =>
        <div className="chat__wrap">
           <Messages messages={messages}/>
          <ChatInput />
        </div>
      }
    </MessagesContext.Consumer>
  );
};
export default Chat;
