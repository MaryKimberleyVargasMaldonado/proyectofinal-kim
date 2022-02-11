import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";
import HomeScreen from "../components/cripto/HomeScreen";

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<HomeScreen {...props} />
				) : (
					<Redirect to="/auth/login" />
				)
			}
		/>
	);
};

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
