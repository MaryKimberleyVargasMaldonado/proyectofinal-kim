import React, { useReducer, useEffect } from "react";
import "../../styles/metas.css";
import { MetaList } from "./MetaList";
import { MetaAdd } from "./MetaAdd";
import { metaReducer } from "../../reducers/metaReducer";

// I N I T -
const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

// m e t a s
export const Metas = () => {
	// U S E   R E D U C E R  - reducer (function), init(function para inicializar el state), dispatch(dispara acciones al reducer)
	const [todos, dispatch] = useReducer(metaReducer, [], init);

	// U S E   E F F E C T - si los todos* cambian grabará la info en localStorage(solo guarda strings)
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// H A N D L E   A D D   ------------------------------------------------------------------------------
	const handleAdd = (newTodo) => {
		// A C T I O N - D I S P A T C H
		dispatch({
			type: "add",
			payload: newTodo,
		});
	};

	// H A N D L E    D E L E T E --------------------------------------------------------------------
	const handleDelete = (todoId) => {
		console.log(todoId);

		// A C T I O N
		const action = {
			type: "delete",
			payload: todoId,
		};

		// 2. D I S P A T C H
		dispatch(action);
	}; //delete fin

	// H A N D L E   T O G G L E  ----------------------------------------------------------------------
	const handleToggle = (todoId) => {
		dispatch({
			type: "toggle",
			payload: todoId,
		});
	}; // cambiar estado del done

	// R E T U R N  ------------------------------------------------------------------------------------
	return (
		<div>
			{/* {`${todos.length && "complete text-success"}`} */}
			<h1 className="text-center">Mis metas </h1>
			<hr />
			<input
				type="text"
				readOnly={true}
				disabled
				className="border-0 bg-white display-right text-center"
				value={`Total:  ${todos.length}`}
			/>
			<div className="row ">
				{/* L   I   S   T   A    -     T    O    D   O    */}
				<div className="col-7 ">
					<MetaList
						todos={todos}
						handleDelete={handleDelete} // manda las referencias a TodoList.js
						handleToggle={handleToggle}
					/>
				</div>

				{/*  A   G   R   E   G   A   R          N    U   E   V   O        T    O    D   O      */}
				<div className="col-5 ">
					<MetaAdd handleAdd={handleAdd} />
				</div>
			</div>
		</div>
	); // return
};
