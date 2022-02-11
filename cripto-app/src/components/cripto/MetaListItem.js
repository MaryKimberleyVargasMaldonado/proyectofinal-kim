import React from "react";

// todo, index indice, handleDelete, handleToggle
export const MetaListItem = React.memo(
	({ todo, index, handleDelete, handleToggle }) => {
		return (
			<div className="animate__animated animate__bounce ">
				<hr />
				<li key={todo.id} className="list-group-item cl ">
					<p
						className={`${todo.done && "complete text-success"}`}
						onClick={() => handleToggle(todo.id)}
					>
						{index + 1}.{todo.desc}
					</p>

					<button
						className="btnL btn-danger"
						onClick={() => handleDelete(todo.id)}
					>
						Borrar
					</button>
				</li>
			</div>
		);
	}
);
