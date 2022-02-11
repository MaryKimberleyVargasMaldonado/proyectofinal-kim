import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

// import { Ahorros } from "../components/cripto/Ahorros";
// import { Convert } from "../components/cripto/Convert";
// import { Criptocoin } from "../components/cripto/Criptocoin";
// import { Gastos } from "../components/cripto/Gastos";
// import { Ingresos } from "../components/cripto/Ingresos";
// import { Inversiones } from "../components/cripto/Inversiones";
// import { Metas } from "../components/cripto/Metas";

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth/login" component={LoginScreen} />

					<Route exact path="/auth/register" component={RegisterScreen} />

					{/* <Route exact path="/auth/c" component={Criptocoin} />
					<Route exact path="/auth/ing" component={Ingresos} />
					<Route exact path="/auth/inv" component={Inversiones} />
					<Route exact path="/auth/a" component={Ahorros} />
					<Route exact path="/auth/G" component={Gastos} />
					<Route exact path="/auth/m" component={Metas} />
					<Route exact path="/auth/co" component={Convert} /> */}

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
