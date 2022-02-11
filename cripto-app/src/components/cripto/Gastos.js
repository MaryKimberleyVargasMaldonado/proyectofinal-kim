import React, { useEffect, useState } from "react";

export const Gastos = () => {
	// U S E   S T A T E
	const [number, setNumber] = useState({
		a1: 0,
		a2: 0,
		a3: 0,
		a4: 0,
		a5: 0,
		a6: 0,
		a7: 0,
		a8: 0,
		a9: 0,
		a10: 0,
		a11: 0,
		a12: 0,
		a13: 0,
		a14: 0,
		a15: 0,
		a16: 0,
		a17: 0,
		a18: 0,
		a19: 0,
		a20: 0,
		a21: 0,
		a22: 0,
		a23: 0,
		a24: 0,
		a25: 0,
		a26: 0,
		a27: 0,
		a28: 0,
		a29: 0,
		a30: 0,
		a31: 0,
		a32: 0,
		a33: 0,
		a34: 0,
		a35: 0,
		a36: 0,
		a37: 0,
		a38: 0,
		a39: 0,
		a40: 0,
		a41: 0,
		a42: 0,
		a43: 0,
		a44: 0,
		a45: 0,
		a46: 0,
		a47: 0,
		a48: 0,
		a49: 0,
		a50: 0,
		a51: 0,
		a52: 0,
		a53: 0,
		a54: 0,
		a55: 0,
		a56: 0,
		a57: 0,
		a58: 0,
		a59: 0,
		a60: 0,
		a61: 0,
		a62: 0,
		a63: 0,
		a64: 0,
	});
	const [suma, setSuma] = useState();

	// U S E   E F F E C T
	useEffect(() => {
		const {
			a1,
			a2,
			a3,
			a4,
			a5,
			a6,
			a7,
			a8,
			a9,
			a10,
			a11,
			a12,
			a13,
			a14,
			a15,
			a16,
			a17,
			a18,
			a19,
			a20,
			a21,
			a22,
			a23,
			a24,
			a25,
			a26,
			a27,
			a28,
			a29,
			a30,
			a31,
			a32,
			a33,
			a34,
			a35,
			a36,
			a37,
			a38,
			a39,
			a40,
			a41,
			a42,
			a43,
			a44,
			a45,
			a46,
			a47,
			a48,
			a49,
			a50,
			a51,
			a52,
			a53,
			a54,
			a55,
			a56,
			a57,
			a58,
			a59,
			a60,
			a61,
			a62,
			a63,
			a64,
		} = number;
		setSuma(
			Number(a1) +
				Number(a2) +
				Number(a3) +
				Number(a4) +
				Number(a5) +
				Number(a6) +
				Number(a7) +
				Number(a8) +
				Number(a9) +
				Number(a10) +
				Number(a11) +
				Number(a12) +
				Number(a13) +
				Number(a14) +
				Number(a15) +
				Number(a16) +
				Number(a17) +
				Number(a18) +
				Number(a19) +
				Number(a20) +
				Number(a21) +
				Number(a22) +
				Number(a23) +
				Number(a24) +
				Number(a25) +
				Number(a26) +
				Number(a27) +
				Number(a28) +
				Number(a29) +
				Number(a30) +
				Number(a31) +
				Number(a32) +
				Number(a33) +
				Number(a34) +
				Number(a35) +
				Number(a36) +
				Number(a37) +
				Number(a38) +
				Number(a39) +
				Number(a40) +
				Number(a41) +
				Number(a42) +
				Number(a43) +
				Number(a44) +
				Number(a45) +
				Number(a46) +
				Number(a47) +
				Number(a48) +
				Number(a49) +
				Number(a50) +
				Number(a51) +
				Number(a52) +
				Number(a53) +
				Number(a54) +
				Number(a55) +
				Number(a56) +
				Number(a57) +
				Number(a58) +
				Number(a59) +
				Number(a60) +
				Number(a61) +
				Number(a62) +
				Number(a63) +
				Number(a64)
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
					¿Cuánto dinero gasto mensualmente en el hogar?
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
							<td>Renta o Hipoteca:</td>
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
							<td>Agua:</td>
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
							<td>Gas:</td>
							<td>
								$
								<input
									type="number"
									name="a3"
									onChange={handleSuma}
									value={number.a3}
								/>
							</td>
						</tr>
						<tr>
							<td>Luz:</td>
							<td>
								$
								<input
									type="number"
									name="a4"
									onChange={handleSuma}
									value={number.a4}
								/>
							</td>
						</tr>
						<tr>
							<td>Télefono fijo:</td>
							<td>
								$
								<input
									type="number"
									name="a5"
									onChange={handleSuma}
									value={number.a5}
								/>
							</td>
						</tr>
						<tr>
							<td>Internet:</td>
							<td>
								$
								<input
									type="number"
									name="a6"
									onChange={handleSuma}
									value={number.a6}
								/>
							</td>
						</tr>
						<tr>
							<td>TV:</td>
							<td>
								$
								<input
									type="number"
									name="a7"
									onChange={handleSuma}
									value={number.a7}
								/>
							</td>
						</tr>
						<tr>
							<td>Alarma:</td>
							<td>
								$
								<input
									type="number"
									name="a8"
									onChange={handleSuma}
									value={number.a8}
								/>
							</td>
						</tr>
						<tr>
							<td>Limpieza / Asesora del hogar:</td>
							<td>
								$
								<input
									type="number"
									name="a9"
									onChange={handleSuma}
									value={number.a9}
								/>
							</td>
						</tr>
						<tr>
							<td>Jardinero:</td>
							<td>
								$
								<input
									type="number"
									name="a10"
									onChange={handleSuma}
									value={number.a10}
								/>
							</td>
						</tr>
						<tr>
							<td>Supermercado:</td>
							<td>
								$
								<input
									type="number"
									name="a11"
									onChange={handleSuma}
									value={number.a11}
								/>
							</td>
						</tr>
						<tr>
							<td>Lavandería:</td>
							<td>
								$
								<input
									type="number"
									name="a12"
									onChange={handleSuma}
									value={number.a12}
								/>
							</td>
						</tr>
						<tr>
							<td>Basurero o servicio de basura:</td>
							<td>
								$
								<input
									type="number"
									name="a13"
									onChange={handleSuma}
									value={number.a13}
								/>
							</td>
						</tr>
						<tr>
							<td>Gastos comunes:</td>
							<td>
								$
								<input
									type="number"
									name="a14"
									onChange={handleSuma}
									value={number.a14}
								/>
							</td>
						</tr>
						<tr>
							<td>Otros gastos:</td>
							<td>
								$
								<input
									type="number"
									name="a15"
									onChange={handleSuma}
									value={number.a15}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				{/* ANOTHER TABLE */}
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto dinero gasto mensualmente en gastos personales?
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
							<td>Articulo de cuidado personal:</td>
							<td>
								$
								<input
									type="number"
									name="a16"
									onChange={handleSuma}
									value={number.a16}
								/>
							</td>
						</tr>
						<tr>
							<td>Transporte:</td>
							<td>
								$
								<input
									type="number"
									name="a17"
									onChange={handleSuma}
									value={number.a17}
								/>
							</td>
						</tr>
						<tr>
							<td>Celular:</td>
							<td>
								$
								<input
									type="number"
									name="a18"
									onChange={handleSuma}
									value={number.a18}
								/>
							</td>
						</tr>
						<tr>
							<td>Ropa:</td>
							<td>
								$
								<input
									type="number"
									name="a19"
									onChange={handleSuma}
									value={number.a19}
								/>
							</td>
						</tr>
						<tr>
							<td>Hobbies:</td>
							<td>
								$
								<input
									type="number"
									name="a20"
									onChange={handleSuma}
									value={number.a20}
								/>
							</td>
						</tr>
						<tr>
							<td>Maquillaje:</td>
							<td>
								$
								<input
									type="number"
									name="a21"
									onChange={handleSuma}
									value={number.a21}
								/>
							</td>
						</tr>
						<tr>
							<td>Otro:</td>
							<td>
								$
								<input
									type="number"
									name="a22"
									onChange={handleSuma}
									value={number.a22}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				{/* ANOTHER TABLE */}
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto dinero destino a educación ?
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
							<td>Mensualidad colegios:</td>
							<td>
								$
								<input
									type="number"
									name="a23"
									onChange={handleSuma}
									value={number.a23}
								/>
							</td>
						</tr>
						<tr>
							<td>Mensualidad universidades:</td>
							<td>
								$
								<input
									type="number"
									name="a24"
									onChange={handleSuma}
									value={number.a24}
								/>
							</td>
						</tr>
						<tr>
							<td>Derechos en colegios y asociaciones:</td>
							<td>
								$
								<input
									type="number"
									name="a25"
									onChange={handleSuma}
									value={number.a25}
								/>
							</td>
						</tr>
						<tr>
							<td>Transporte escolar:</td>
							<td>
								$
								<input
									type="number"
									name="a26"
									onChange={handleSuma}
									value={number.a26}
								/>
							</td>
						</tr>
						<tr>
							<td>Útiles escolares:</td>
							<td>
								$
								<input
									type="number"
									name="a27"
									onChange={handleSuma}
									value={number.a27}
								/>
							</td>
						</tr>
						<tr>
							<td>Fotocopias:</td>
							<td>
								$
								<input
									type="number"
									name="a28"
									onChange={handleSuma}
									value={number.a28}
								/>
							</td>
						</tr>
						<tr>
							<td>Libros:</td>
							<td>
								$
								<input
									type="number"
									name="a29"
									onChange={handleSuma}
									value={number.a29}
								/>
							</td>
						</tr>
						<tr>
							<td>Uniformes:</td>
							<td>
								$
								<input
									type="number"
									name="a30"
									onChange={handleSuma}
									value={number.a30}
								/>
							</td>
						</tr>
						<tr>
							<td>Cursos:</td>
							<td>
								$
								<input
									type="number"
									name="a31"
									onChange={handleSuma}
									value={number.a30}
								/>
							</td>
						</tr>
						<tr>
							<td>Entrenamientos:</td>
							<td>
								$
								<input
									type="number"
									name="a32"
									onChange={handleSuma}
									value={number.a32}
								/>
							</td>
						</tr>
						<tr>
							<td>Programas de crecimiento personal:</td>
							<td>
								$
								<input
									type="number"
									name="a33"
									onChange={handleSuma}
									value={number.a33}
								/>
							</td>
						</tr>
						<tr>
							<td>Audios:</td>
							<td>
								$
								<input
									type="number"
									name="a34"
									onChange={handleSuma}
									value={number.a34}
								/>
							</td>
						</tr>
						<tr>
							<td>Otros:</td>
							<td>
								$
								<input
									type="number"
									name="a35"
									onChange={handleSuma}
									value={number.a35}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				{/* ANOTHER TABLE */}
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto dinero destino a movimientos financieros?
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
							<td>Seguro de vida:</td>
							<td>
								$
								<input
									type="number"
									name="a36"
									onChange={handleSuma}
									value={number.a36}
								/>
							</td>
						</tr>
						<tr>
							<td>Seguro de bienes (autos,casas,etc):</td>
							<td>
								$
								<input
									type="number"
									name="a37"
									onChange={handleSuma}
									value={number.a37}
								/>
							</td>
						</tr>
						<tr>
							<td>Seguros de salud:</td>
							<td>
								$
								<input
									type="number"
									name="a38"
									onChange={handleSuma}
									value={number.a38}
								/>
							</td>
						</tr>
						<tr>
							<td>Pago tarjeta de crédito:</td>
							<td>
								$
								<input
									type="number"
									name="a39"
									onChange={handleSuma}
									value={number.a39}
								/>
							</td>
						</tr>
						<tr>
							<td>Pago en línea de crédito:</td>
							<td>
								$
								<input
									type="number"
									name="a40"
									onChange={handleSuma}
									value={number.a40}
								/>
							</td>
						</tr>
						<tr>
							<td>Intereses bancarios:</td>
							<td>
								$
								<input
									type="number"
									name="a41"
									onChange={handleSuma}
									value={number.a41}
								/>
							</td>
						</tr>
						<tr>
							<td>Ahorro / inversión programada:</td>
							<td>
								$
								<input
									type="number"
									name="a42"
									onChange={handleSuma}
									value={number.a42}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				{/* ANOTHER TABLE */}
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto dinero destino a los gastos de mis vehículos?
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
							<td>Pagos / Mensualidades del auto:</td>
							<td>
								$
								<input
									type="number"
									name="a43"
									onChange={handleSuma}
									value={number.a43}
								/>
							</td>
						</tr>
						<tr>
							<td>Seguro:</td>
							<td>
								$
								<input
									type="number"
									name="a44"
									onChange={handleSuma}
									value={number.a44}
								/>
							</td>
						</tr>
						<tr>
							<td>Gasolina:</td>
							<td>
								$
								<input
									type="number"
									name="a45"
									onChange={handleSuma}
									value={number.a45}
								/>
							</td>
						</tr>
						<tr>
							<td>Mantenimiento:</td>
							<td>
								$
								<input
									type="number"
									name="a46"
									onChange={handleSuma}
									value={number.a46}
								/>
							</td>
						</tr>
						<tr>
							<td>Tenencia:</td>
							<td>
								$
								<input
									type="number"
									name="a47"
									onChange={handleSuma}
									value={number.a47}
								/>
							</td>
						</tr>
						<tr>
							<td>Otro:</td>
							<td>
								$
								<input
									type="number"
									name="a48"
									onChange={handleSuma}
									value={number.a48}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				{/* ANOTHER TABLE */}
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto dinero gasto en servicios o cosas no planificadas?
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
							<td>Regalos:</td>
							<td>
								$
								<input
									type="number"
									name="a49"
									onChange={handleSuma}
									value={number.a49}
								/>
							</td>
						</tr>
						<tr>
							<td>Restaurantes / Bares:</td>
							<td>
								$
								<input
									type="number"
									name="a50"
									onChange={handleSuma}
									value={number.a50}
								/>
							</td>
						</tr>
						<tr>
							<td>Dulces o chucherías:</td>
							<td>
								$
								<input
									type="number"
									name="a51"
									onChange={handleSuma}
									value={number.a51}
								/>
							</td>
						</tr>
						<tr>
							<td>Paseos:</td>
							<td>
								$
								<input
									type="number"
									name="a52"
									onChange={handleSuma}
									value={number.a52}
								/>
							</td>
						</tr>
						<tr>
							<td>Cine:</td>
							<td>
								$
								<input
									type="number"
									name="a53"
									onChange={handleSuma}
									value={number.a53}
								/>
							</td>
						</tr>
						<tr>
							<td>Teatro:</td>
							<td>
								$
								<input
									type="number"
									name="a54"
									onChange={handleSuma}
									value={number.a54}
								/>
							</td>
						</tr>
						<tr>
							<td>Música:</td>
							<td>
								$
								<input
									type="number"
									name="a55"
									onChange={handleSuma}
									value={number.a55}
								/>
							</td>
						</tr>
						<tr>
							<td>Cafés:</td>
							<td>
								$
								<input
									type="number"
									name="a56"
									onChange={handleSuma}
									value={number.a56}
								/>
							</td>
						</tr>
						<tr>
							<td>Vicios:</td>
							<td>
								$
								<input
									type="number"
									name="a57"
									onChange={handleSuma}
									value={number.a57}
								/>
							</td>
						</tr>
						<tr>
							<td>Viajes:</td>
							<td>
								$
								<input
									type="number"
									name="a58"
									onChange={handleSuma}
									value={number.a58}
								/>
							</td>
						</tr>
						<tr>
							<td>Otros:</td>
							<td>
								$
								<input
									type="number"
									name="a59"
									onChange={handleSuma}
									value={number.a59}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				{/* ----------------------        ANOTHER TABLE    -------------------- */}
				<h2 style={{ textAlign: "center" }}>
					¿Cuánto mis gastos fijos de esparcimiento?
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
							<td>Gimnasio:</td>
							<td>
								$
								<input
									type="number"
									name="a60"
									onChange={handleSuma}
									value={number.a60}
								/>
							</td>
						</tr>
						<tr>
							<td>Clases:</td>
							<td>
								$
								<input
									type="number"
									name="a61"
									onChange={handleSuma}
									value={number.a61}
								/>
							</td>
						</tr>
						<tr>
							<td>Peródicos:</td>
							<td>
								$
								<input
									type="number"
									name="a62"
									onChange={handleSuma}
									value={number.a62}
								/>
							</td>
						</tr>
						<tr>
							<td>Suscripciones a revistas:</td>
							<td>
								$
								<input
									type="number"
									name="a63"
									onChange={handleSuma}
									value={number.a63}
								/>
							</td>
						</tr>
						<tr>
							<td>Otros:</td>
							<td>
								$
								<input
									type="number"
									name="a64"
									onChange={handleSuma}
									value={number.a64}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				{/* T O T A L E S  */}
				<table className="table table-striped table-hover ">
					<thead></thead>
					<tbody>
						<tr>
							<td>
								<b>Total de gastos:</b>
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
				<button className="btn btn-gold" onClick={handleSuma}>
					Guardar
				</button>
			</form>
		</div>
	);
};
