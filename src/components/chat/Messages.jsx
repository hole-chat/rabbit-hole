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
    useEffect(() => {
        state.update({...state.self, chatBlock: scroll})
    }, [messages])
    useEffect(() => {
        console.log("state has updated", messages)

    })
	return (
		<ul className="message--list" ref={scroll}>
		  {messages["id1"].map((message) => (
				<li
					className={`message--wrap message--wrap__${
						message.from_me ? "right" : "left"
					}`}
				>
					<Message
						side={message.from_me}
						message={message.message}
						avatar={message.avatar}
					/>
				</li>
			))}
		</ul>

	);
};
export default Messages;
