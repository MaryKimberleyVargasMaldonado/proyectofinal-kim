//import React from "react";

export const metaReducer = (state = [], action) => {
	switch (action.type) {
		case "add":
			return [...state, action.payload];

		case "delete":
			return state.filter((todo) => todo.id !== action.payload);

		case "toggle":
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo
			);

		case "toggle-1":
			return state.map((todo) => {
				if (todo.id === action.payload) {
					return { ...todo, done: !todo.done };
				} else {
					return todo;
				}
			});

		default:
			return state;
	}
};
