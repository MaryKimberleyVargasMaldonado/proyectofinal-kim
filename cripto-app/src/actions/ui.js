import { types } from "../types/types";

// S E T
export const setError = (err) => ({
	type: types.uiSetError,
	payload: err,
});

// R E M O V E
export const removeError = () => ({
	type: types.uiRemoveError,
});

// S T A R T   L O A D I N G
export const startLoading = () => ({
	type: types.uiStartLoading,
});

// F I N I S H   L O A D I N G
export const finishLoading = () => ({
	type: types.uiFinishLoading,
});
