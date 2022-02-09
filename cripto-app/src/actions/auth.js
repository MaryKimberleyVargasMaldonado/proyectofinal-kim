import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { startLoading, finishLoading } from "./ui";
import Swal from "sweetalert2";

// S T A R T   L O G I N   E M A I L  -  P A S S W O R D
export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));

				dispatch(finishLoading());
			})
			.catch((e) => {
				console.log(e);
				dispatch(finishLoading());
				Swal.fire("Error", e.message, "error");
			});
	};
};

// S T A R T   R E G I S T E R  W I T H  E M A I L  - P A S S W O R D
export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
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

// S T A R T   G O O G L E  L O G I N
export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};

// L O G I N
export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

// L O G O U T  -	 A C T I O N
export const logout = () => ({
	type: types.logout,
});

// S T A R T   L O G O U T
export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch(logout());
	};
};
