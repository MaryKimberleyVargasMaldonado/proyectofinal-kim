import { useState } from "react";

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = (newFormState = initialState) => {
		setValues(newFormState); // para tener un nuevo estado y establecer "x" valores al formulario
	};

	// H A N D L E   I N P U T   C H A N G E
	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, handleInputChange, reset];
};
