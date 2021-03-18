import { h } from 'preact';
import Sidebar from './sidebar/Sidebar'
import Chat from './chat/Chat'

const App = () => (
	<div id="app">
		<Sidebar/>
		<Chat/>
	</div>
)

export default App;
