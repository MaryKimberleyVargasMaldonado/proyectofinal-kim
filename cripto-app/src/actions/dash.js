import { types } from "../types/types";

// S U M A   A H O R R O S  -  A C T I O N
export const sumA = () => ({
	type: types.dashSummaryA,
});

export const startSummary = (a1, a2) => {
	return (dispatch) => {
		firebase
			.auth()
			.create(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });

				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				console.log(e);
				Swal.fire("Error", e.message, "error");
			});
	};
};
