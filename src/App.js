import logo from './logo.svg';
import './App.css';
import BasicExample from './examples/BasicExample';
import Todos from './examples/Todos';
import Items from './examples/Items';
import StorageKeys from './examples/StorageKeys';

function App() {
	return (
		<div className="App">
			<h1>Custom Hooks</h1>
			<br />
			{/* <BasicExample />
			 */}
			<Todos />
			{/* <Items />
			<StorageKeys /> */}
		</div>
	);
}

export default App;
