import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { Criptocoin } from "../components/cripto/Criptocoin";

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth/login" component={LoginScreen} />

					<Route exact path="/auth/register" component={RegisterScreen} />

					<Route exact path="/auth/c" component={Criptocoin} />

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
