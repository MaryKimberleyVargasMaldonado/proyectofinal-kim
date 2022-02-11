import React from "react";
import { MetaListItem } from "./MetaListItem";

// todos, handleDelete, handleToggle
export const MetaList = ({ todos, handleDelete, handleToggle }) => {
	return (
		<ul className="list-group list-group-flush">
			{todos.map((todo, i) => (
				<MetaListItem
					key={todo.id}
					todo={todo}
					index={i}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
};
