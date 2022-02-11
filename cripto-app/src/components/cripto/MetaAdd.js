import React from "react";
import { useForm } from "../../hooks/useForm";

export const MetaAdd = ({ handleAdd }) => {
	// U S E   F O R M ------------------------------------------------------------------------------------
	const [{ description }, handleInputChange, reset] = useForm({
		description: "",
	});

	// H A N D L E    S U B M I T  -----------------------------------------------------------------------
	const handleSubmit = (e) => {
		e.preventDefault(); //evitar el refresh

		// No agregar si hay espacios
		if (description.trim().length <= 1) {
			return;
		} //fin

		//  N U E V O   T O D O
		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		// A C T I O N
		const action = {
			type: "add",
			payload: newTodo,
		};

		// D I S P A T C H - mandarla a todoReducer
		handleAdd(newTodo);

		// R E S E T
		reset();
	};

	return (
		// para más de un elemento -> Fragment
		<>
			{/* <h4 className="text-center">Añadir: </h4>
			<hr /> */}

			<form
				onSubmit={handleSubmit}
				className="animate__animated animate__pulse"
			>
				{/* I    C    O    N    O     */}
				<div className="input-group w-50">
					<span className="input-group-text" id="basic-addon1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="26"
							fill="currentColor"
							className="bi bi-check2-square"
							viewBox="0 0 16 16"
						>
							<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"></path>
							<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
						</svg>
					</span>

					<input
						type="text"
						name="description"
						className="form-control cl text-center  "
						placeholder="Invertir en . . ."
						autoComplete="off"
						value={description}
						onChange={handleInputChange}
					/>
				</div>
				{/* a g r e g a r  */}
				<button
					type="submit"
					className="btnL btn-outline-primary mt-2 mb-5 btn-block"
				>
					Agregar
				</button>

				<img src="../../img/goals.svg" className="image mt-9	" alt="login" />
			</form>
		</>
	);
};
