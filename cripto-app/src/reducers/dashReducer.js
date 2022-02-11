import { types } from "../types/types";

export const dashReducer = (state = {}, action) => {
	switch (action.type) {
		case types.dashSummaryA:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			};

		default:
			return state;
	}
};
