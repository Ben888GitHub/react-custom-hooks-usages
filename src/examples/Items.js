import { useLocalStorage } from '../hooks/useLocalStorage';

import { Fragment, memo, useState } from 'react';

function Items() {
	const { items, addItem, deleteItem } = useLocalStorage();

	const initialItem = {
		id: null,
		title: '',
		description: ''
	};

	const [newItem, setNewItem] = useState(initialItem);

	const handleChange = (e) => {
		setNewItem({
			...newItem,
			[e.target.name]: e.target.value,
			id: items.length + 1
		});
	};

	const handleAddItem = () => {
		addItem('items', newItem);
		setNewItem({ ...initialItem });
	};

	return (
		<>
			<h1>Local Storage Items</h1>
			<br />
			<input
				type="text"
				placeholder="title"
				name="title"
				value={newItem.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="description"
				name="description"
				value={newItem.description}
				onChange={handleChange}
			/>
			<button onClick={handleAddItem}>Add new Todo</button>
			<br />
			{items &&
				items?.map((item, idx) => (
					<Fragment key={idx}>
						<h2>{item.title}</h2>
						<h3>{item.description}</h3>
						<button onClick={() => deleteItem(item.id, 'items')}>Remove</button>
						<br />
						<br />
					</Fragment>
				))}
		</>
	);
}

export default memo(Items);
