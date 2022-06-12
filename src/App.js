import logo from './logo.svg';
import './App.css';
import BasicExample from './examples/BasicExample';
import Todos from './examples/Todos';

function App() {
	return (
		<div className="App">
			<h1>Custom Hooks</h1>
			<br />
			{/* <BasicExample />
			 */}
			<Todos />
		</div>
	);
}

export default App;
