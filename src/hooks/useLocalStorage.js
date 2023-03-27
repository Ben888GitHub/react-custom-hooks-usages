import { useState, useEffect } from 'react';

export const useLocalStorage = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(
			localStorage.items !== undefined ? JSON.parse(localStorage.items) : []
		);
	}, []);

	const addItem = (key, newItem) => {
		const addItem = [...items, newItem];
		localStorage.setItem(key, JSON.stringify(addItem));
		setItems(addItem);
	};

	const deleteItem = (id, key) => {
		const deletedItem = items.filter((item) => item.id !== id);
		localStorage.setItem(key, JSON.stringify(deletedItem));
		setItems(deletedItem);
	};

	return {
		items,
		addItem,
		deleteItem
	};
};
