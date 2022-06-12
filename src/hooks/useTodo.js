import { useState } from 'react';

export const useTodo = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Learn React',
			description: 'Frontend Library for building user interfaces'
		},
		{
			id: 2,
			title: 'Learn Vue',
			description: 'new tech for sure'
		}
	]);

	const initialTodo = {
		id: null,
		title: '',
		description: ''
	};

	const [newTodo, setNewTodo] = useState(initialTodo);

	const addTodo = () => {
		setTodos([...todos, newTodo]);
		setNewTodo({ ...initialTodo });
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return {
		todos,
		addTodo,
		removeTodo,
		setNewTodo,
		newTodo
	};
};
