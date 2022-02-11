import React, { useEffect, useState } from "react";

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};
export const Inversiones = React.memo(() => {
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

	// r e t u r n
	return (
		<div>
			<form>
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto dinero libre de impuestos recibo mensualmente?
				</h2>

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
							<td>Activos de papel:</td>
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
							<td>Commodities:</td>
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
							<td>Bienes Raíces:</td>
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
							<td>Negocios:</td>
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
					</tbody>
				</table>
			</form>
			{/* ---------------------     ANOTHER TABLE  ----------------------------------- */}

			<form>
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto dinero invierto en mi salud o la de mi entorno familiar?
				</h2>

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
							<td>Honorarios médicos:</td>
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
							<td>Medicamento:</td>
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
						<tr>
							<td>Exámenes:</td>
							<td>
								$
								<input
									type="number"
									name="in7"
									onChange={handleSuma}
									value={number.in7}
								/>
							</td>
						</tr>
						<tr>
							<td>Otros gastos:</td>
							<td>
								$
								<input
									type="number"
									name="in8"
									onChange={handleSuma}
									value={number.in8}
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
				<button className="btnL btn-gold" onClick={handleSuma}>
					Guardar
				</button>
			</form>
		</div>
	);
});
