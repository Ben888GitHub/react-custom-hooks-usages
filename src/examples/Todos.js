import { useTodo } from '../hooks/useTodo';
import { Fragment, memo } from 'react';

function Todos() {
	const { todos, addTodo, removeTodo, setNewTodo, newTodo } = useTodo();

	const handleChange = (e) => {
		setNewTodo((prevNewTodo) => ({
			...prevNewTodo,
			[e.target.name]: e.target.value,
			id: todos.length + 1
		}));
	};

	return (
		<>
			<h1>Todos</h1>
			<br />
			<input
				type="text"
				placeholder="title"
				name="title"
				value={newTodo.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="description"
				name="description"
				value={newTodo.description}
				onChange={handleChange}
			/>
			<button onClick={addTodo}>Add new Todo</button>
			<br />
			{todos.map((todo, idx) => (
				<Fragment key={idx}>
					<h2>{todo.title}</h2>
					<h3>{todo.description}</h3>
					<button onClick={() => removeTodo(todo.id)}>Remove</button>
					<br />
					<br />
				</Fragment>
			))}
		</>
	);
}

export default memo(Todos);
