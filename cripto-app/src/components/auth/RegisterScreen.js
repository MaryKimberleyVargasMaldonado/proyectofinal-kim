import React from "react";
import "../../styles/log.css";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
	// const container = document.querySelector(".container");
	// const sign_up_btn = document.querySelector("#sign-up-btn");

	// sign_up_btn.addEventListener("click", () => {
	// 	container.classList.add("sign-up-mode");
	// });

	// u s e  dispatch
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	// U S E   F O R M
	const [formValues, handleInputChange] = useForm({
		name: "Nicole",
		email: "nico@gmail.com",
		password: "123456",
		password2: "123456",
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
			dispatch(setError("Name is required"));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError("Email is not valid"));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(
				setError(
					"Password should be at least 6 characters and match each other"
				)
			);
			return false;
		}

		dispatch(removeError());
		return true;
	};

	//  R E T U R N
	return (
		<div className="panels-container">
			<div className="panel left-panel">
				<form onSubmit={handleRegister} className="sign-up-form">
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
						{/* <i class="fa-solid fa-envelope"></i> */}
						<i className="fas fa-envelope"></i>
						<input
							type="email"
							placeholder="Correo"
							name="email"
							autoComplete="off"
							value={email}
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
					<input type="submit" className="btn" value="Sign up" />
					{/* R e d e s    S o c i a l e s  */}
					<p className="social-text">O inicia sesión con redes sociales</p>
					<div className="social-media">
						<a href="#" className="social-icon">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="social-icon">
							<i className="fab fa-google"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};
