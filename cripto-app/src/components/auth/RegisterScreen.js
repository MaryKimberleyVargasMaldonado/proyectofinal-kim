import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import {
	startGoogleLogin,
	startRegisterWithEmailPasswordName,
} from "../../actions/auth";
import "../../styles/log.css";
import { Link } from "react-router-dom";
import { LoginScreen } from "./LoginScreen";

export const RegisterScreen = () => {
	// u s e  d i s p a t c h
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	// U S E   F O R M
	const [formValues, handleInputChange] = useForm({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	// F O R M   V A L U E S
	const { name, email, password, password2 } = formValues;

	// H A N D L E    R E G I S T E R
	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startRegisterWithEmailPasswordName(email, password, name));
		}
	};

	// V A L I D A C I Ó N
	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError("Se requiere el nombre"));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError("El correo no es válido"));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError("La contraseña debe tener 6 caracteres y ser iguales"));
			return false;
		}

		dispatch(removeError());
		return true;
	};

	// H A N D L E  G O G L E  L O G I N
	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	//  R E T U R N
	return (
		<div className="container">
			<div className="forms-container">
				<div className="signin-signup">
					{/* R E G I S T R A R    S  E  S  I  Ó  N   */}
					<form onSubmit={handleRegister}>
						{/* MENSAJE DE ERROR */}
						{msgError && <div className="auth__alert-error">{msgError}</div>}
						<h2 className="title">Registrate</h2>
						<div className="input-field">
							<i className="fas fa-user"></i>
							<input
								type="text"
								placeholder="Usuario"
								name="name"
								value={name}
								autoComplete="off"
								onChange={handleInputChange}
							/>
						</div>
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
						<div className="input-field">
							<i className="fas fa-lock"></i>
							<input
								type="password"
								name="password2"
								value={password2}
								placeholder="Confirmar contraseña"
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
						<h3>¿Ya tienes usuario?</h3>
						<p>¡Da click en el botón para iniciar sesión!</p>
						<Link to="/auth/login" className="btnL btn transparent">
							Inicia sesión
						</Link>
					</div>
					<img src="../../img/register.svg" className="image" alt="login" />
				</div>
			</div>
		</div>
	);
};
