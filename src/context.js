import { createContext } from "preact";
import {useState} from "preact/hooks"
export const AppContext = createContext({})
export const MessagesContext = createContext({})
export const UsersContext = createContext({})

export const mesDef = {
    "508bef17-cfe1-4931-8058-31ea8819ad49": [
      {
        from_me: true,
        message: "Welcome to freenet",
        date: "20-20-20-30:20:10",
      },
      {
        from_me: false,
        message: "Yup, thanks",
        date: "20-20-20-30:20:10",
      },
      {
        from_me: true,
        message: "Glad to see you here",
        date: "20-20-20-30:20:10",
      },
      {
        from_me: true,
        message: "Do you have any aquaintances here??",
        date: "20-20-20-30:20:10",
      },
    ]
  }
export const usDef = [
    {
      name: "Jack",
      id: 1,
      lastMessage: "How are you",
      avatar: undefined,
    },
    {
      name: "Jasy",
      id: 2,
      lastMessage:
        "THIS IS YOUR LIFE. DOESNT GET ANY BETTER THAN THIS. YOU HAVE TO GIVE UP. YOU HAVE TO REALIZE WHAT SOMEDAAY YOU WILL DIE",
      avatar: "https://avatars.githubusercontent.com/u/80746081?s=200&v=4",
    },
  ]
export const appDef = {currentChat: "508bef17-cfe1-4931-8058-31ea8819ad49", showAddNewUserPopUp: false, ws: undefined, chatBlock: undefined}

export const defaultState = {
messages:{"508bef17-cfe1-4931-8058-31ea8819ad49":[
		{
			from_me: true,
			message: "Welcome to freenet",
			date: "20-20-20-30:20:10",
		},
{
			from_me: false,
			message: "Yup, thanks",
			date: "20-20-20-30:20:10",
		},
{
			from_me: true,
			message: "Glad to see you here",
			date: "20-20-20-30:20:10",
		},
{
			from_me: true,
			message: "Do you have any aquaintances here??",
			date: "20-20-20-30:20:10",
		},
]},
    userList: [
		{
			name: "Jack",
			id: 1,
			lastMessage: "How are you",
			avatar: undefined,
		},
		{
			name: "Jasy",
			id: 2,
			lastMessage:
				"THIS IS YOUR LIFE. DOESNT GET ANY BETTER THAN THIS. YOU HAVE TO GIVE UP. YOU HAVE TO REALIZE WHAT SOMEDAAY YOU WILL DIE",
			avatar: "https://avatars.githubusercontent.com/u/80746081?s=200&v=4",
		},
	]}
