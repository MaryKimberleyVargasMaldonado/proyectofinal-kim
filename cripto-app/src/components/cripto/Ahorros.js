import React, { useEffect, useState } from "react";

export const Ahorros = () => {
	// U S E   S T A T E
	const [number, setNumber] = useState({ a1: 0, a2: 0 });
	const [suma, setSuma] = useState();

	// U S E   E F F E C T
	useEffect(() => {
		const { a1, a2 } = number;
		setSuma(Number(a1) + Number(a2));
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
					¿Cuánto dinero ahorro mensualmente?
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
							<td>En efectivo:</td>
							<td>
								$
								<input
									type="number"
									name="a1"
									onChange={handleSuma}
									value={number.a1}
								/>
							</td>
						</tr>
						<tr>
							<td>En el banco:</td>
							<td>
								$
								<input
									type="number"
									name="a2"
									onChange={handleSuma}
									value={number.a2}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<b>Total:</b>
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
};
