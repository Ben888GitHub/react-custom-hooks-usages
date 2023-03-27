import { useState, useEffect } from 'react';

export const useLocalStorage = () => {
	const [storageValue, setStorageValue] = useState();

	useEffect(() => {
		localStorage && setStorageValue(localStorage);
	}, []);

	const insertValue = (key, newValue) => {
		localStorage.setItem(key, newValue);
		setStorageValue(newValue);
	};

	// console.log(storageValue);

	return {
		storageValue,
		insertValue
	};
};
