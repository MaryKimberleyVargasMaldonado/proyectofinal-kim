import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "../../styles/log.css";
// import { RegisterScreen } from "./RegisterScreen";
// import "./app";

export const LoginScreen = () => {
	// U S E   D I S P A T C H
	const dispatch = useDispatch();

	// U S E  F O R M
	const [formValues, handleInputChange] = useForm({
		email: "",
		password: "",
	});

	// F O R M   V A L U E S
	const { email, password } = formValues;

	// H A N D L E   L O G I N
	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	// H A N D L E  G O G L E  L O G I N
	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	// R E T U R N
	return (
		<div className="container">
			<div className="forms-container">
				<div className="signin-signup">
					{/* I  N  I  C  I  A    S  E  S  I  Ó  N   */}
					<form onSubmit={handleLogin} className="sign-in-form">
						<h2 className="title">Inicia Sesión</h2>
						<div className="input-field">
							<i className="fas fa-user"></i>
							<input
								type="Email"
								placeholder="Correo"
								name="email"
								value={email}
								autoComplete="off"
								onChange={handleInputChange}
							/>
						</div>
						<div className="input-field">
							<i className="fas fa-lock"></i>
							<input
								type="password"
								placeholder="Contraseña"
								name="password"
								value={password}
								autoComplete="off"
								onChange={handleInputChange}
							/>
						</div>
						<input type="submit" value="Aceptar" className="btnL btn solid" />
						<p className="social-text">O inicia sesión con Google:</p>
						<div className="social-media">
							{/* <a href="#" className="social-icon">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="#" className="social-icon">
								<i className="fab fa-twitter"></i>
							</a> */}
							<a className="social-icon" onClick={handleGoogleLogin}>
								<i className="fab fa-google"></i>
							</a>
						</div>
					</form>
				</div>
			</div>

			{/* R E D I R E C C I O N A M I E N T O  */}
			<div className="panels-container">
				<div className="panel left-panel">
					<div className="content">
						<h3>¿Eres nuevo/a?</h3>
						<p>¡Unete a nuestra comunidad!</p>
						<Link to="/auth/register" className="btnL btn transparent">
							{/* <button className="btnL btn-transparent" id="sign-up-btn"> */}
							Registrate
							{/* </button> */}
						</Link>
					</div>
					<img src="../../img/log.svg" className="image" alt="login" />
				</div>
			</div>
		</div>
	);
};
