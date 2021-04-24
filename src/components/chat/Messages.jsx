import { h } from "preact";
import { useState, useContext, useRef, useEffect } from "preact/hooks";
import Message from "./Message";
import {MessagesContext} from "../../context"
import {AppContext} from "../../context"
const Messages = (props) => {
    const state = useContext(AppContext)
    const scroll = useRef()
    const messages = props.messages.self;
    // Adding ul DOM element to AppContext
    const curr_id = state.self.currentChat
    useEffect(() => {
        state.update({...state.self, chatBlock: scroll})
        console.log(messages[curr_id])
        if(messages[curr_id] == undefined) {
            console.log("requesting new messages...")
            //TODO infinite cycle, probably beacause I have clean up database
            state.self.ws.send(JSON.stringify({
                type: 'loadMessages',
                userId: curr_id,
                count: 10,
                startIndex: 0,
            }))
        }
    }, [messages, curr_id])
	return (
		<ul className="message--list" ref={scroll} id="chat-scroll">
		  {messages[curr_id] == undefined ?
           <div>No Messages</div>
           :messages[curr_id].map((message) => {
               if(message != undefined)
                   {return (

				<li
					className={`message--wrap message--wrap__${
						message.fromMe ? "right" : "left"
					}`}
				>
					<Message
						side={message.fromMe}
						message={message.message}
						avatar={message.avatar}
					/>
				</li>
		           )}}
                                 )}
		</ul>

	);
};
export default Messages;
