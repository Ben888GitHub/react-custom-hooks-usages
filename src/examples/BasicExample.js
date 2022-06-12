import React, { useState, useEffect } from 'react';

const useMyCustomHook = (someData) => {
	const [someValue, setSomeValue] = useState(null);

	useEffect(() => {
		setSomeValue(someData);
	}, [someData]);
	console.log(someValue);
	return [someValue, setSomeValue]; // return the new updated value to be used in other component
};

function BasicExample() {
	// const someValue = useMyCustomHook(12);
	const [someInt, setSomeInt] = useMyCustomHook(12);

	return (
		<div>
			<p>The new value is {someInt}</p>
		</div>
	);
}

export default BasicExample;
