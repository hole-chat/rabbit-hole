import { createContext } from "preact";
import {useState} from "preact/hooks"
export const AppContext = createContext({})
export const MessagesContext = createContext({})
export const UsersContext = createContext({})

export const mesDef = {}
export const usDef =[]
export const appDef = {ws: undefined,currentChat: "508bef17-cfe1-4931-8058-31ea8819ad49", showAddNewUserPopUp: false,  chatBlock: undefined, userConfig: {}}

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
    userList: []}
