import React, { useEffect, useState } from "react";
import { firebase } from "../../firebase/firebase-config";

export const Ingresos = () => {
	// U S E   S T A T E
	const [number, setNumber] = useState({
		in1: 0,
		in2: 0,
		in3: 0,
		in4: 0,
		in5: 0,
		in6: 0,
		in7: 0,
		in8: 0,
	});
	const [suma, setSuma] = useState();

	// U S E   E F F E C T
	useEffect(() => {
		const { in1, in2, in3, in4, in5, in6, in7, in8 } = number;
		setSuma(
			Number(in1) +
				Number(in2) +
				Number(in3) +
				Number(in4) +
				Number(in5) +
				Number(in6) +
				Number(in7) +
				Number(in8)
		);
	}, [number]);

	// H A N D L E    S U M A
	const handleSuma = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setNumber({ ...number, [name]: value });
	};
	console.log(suma);

	const [ing, setIng] = useState([]);

	// // u s e   e f f e c t   -   f i r e b a s e
	// useEffect(() => {
	// 	firebase.db.collection("ingresos").onSnapshot((querySnapshot) => {
	// 		const ing = [number];
	// 		ing.push({ number });
	// 	});
	// 	setIng(ing);
	// }, []);

	// r e t u r n
	return (
		<div>
			<form>
				<h1 style={{ textAlign: "center" }}>
					<b>¿Cuánto dinero libre de impuestos recibo mensualmente?</b>
				</h1>

				<table className="table table-striped table-hover ta">
					<thead>
						<tr>
							<td>
								<b>Tipo</b>
							</td>
							<td>
								<b>Cantidad</b>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Ganacias de inversiones:</td>
							<td>
								$
								<input
									type="number"
									name="in1"
									onChange={handleSuma}
									value={number.in1}
								/>
							</td>
						</tr>

						<tr>
							<td>Bonos o comisiones:</td>
							<td>
								$
								<input
									type="number"
									name="in2"
									onChange={handleSuma}
									value={number.in2}
								/>
							</td>
						</tr>

						<tr>
							<td>Arrendamiento de propiedades:</td>
							<td>
								$
								<input
									type="number"
									name="in3"
									onChange={handleSuma}
									value={number.in3}
								/>
							</td>
						</tr>
						<tr>
							<td>Ganancias en cuentas de ahorro:</td>
							<td>
								$
								<input
									type="number"
									name="in4"
									onChange={handleSuma}
									value={number.in4}
								/>
							</td>
						</tr>
						<tr>
							<td>Sueldo o salario:</td>
							<td>
								$
								<input
									type="number"
									name="in5"
									onChange={handleSuma}
									value={number.in5}
								/>
							</td>
						</tr>
						<tr>
							<td>Otras:</td>
							<td>
								$
								<input
									type="number"
									name="in6"
									onChange={handleSuma}
									value={number.in6}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				{/* T O T A L E S  */}
				<table className="table table-striped table-hover ">
					<tbody>
						<tr>
							<td>
								<b>Total de inversiones:</b>
							</td>
							<td>
								$
								<input
									type="number"
									readOnly={true}
									disabled
									className="border-0"
									value={suma}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<button className="btnL btn-gold">Guardar</button>
			</form>
		</div>
	);
};
