import { useLocalStorage } from '../hooks/useLocalStorage2';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';

function StorageKeys() {
	const { storageValue, insertValue } = useLocalStorage();
	const [uuidVal, setUuidVal] = useState('');

	// storageValue?.authToken && console.log(JSON.parse(storageValue?.authToken));
	// const parsedValue = JSON.parse(storageValue.items);
	// storageValue && setUuidVal(storageValue);

	useEffect(() => {
		// storageValue && console.log(typeof storageValue);
		storageValue && setUuidVal(storageValue?.authToken || storageValue);
		// console.log(JSON.parse(storageValue?.authToken));
	}, [storageValue]);
	// uuidVal && console.log(uuidVal);

	return (
		<>
			<h1>Storage Keys</h1>
			<br />

			{storageValue && (
				<>
					<button onClick={() => insertValue('authToken', uuid())}>
						Set Auth Token
					</button>
					<h3>Auth token: {uuidVal && uuidVal}</h3>
					<br />
				</>
			)}
		</>
	);
}

export default StorageKeys;
