import { h } from 'preact';
import { Router } from 'preact-router';
import Sidebar from './sidebar/Sidebar'
import Chat from './chat/Chat'

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Sidebar/>
		<Chat/>
	</div>
)

export default App;
